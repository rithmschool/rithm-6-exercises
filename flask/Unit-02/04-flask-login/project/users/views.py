from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.users.forms import UserForm, DeleteForm, LoginForm
from project.models import User
from project import db
from sqlalchemy.exc import IntegrityError
from project.decorators import prevent_login_signup, ensure_correct_user
from flask_login import login_user, logout_user, login_required

users_blueprint = Blueprint('users', __name__, template_folder='templates')

################### Users View Functions #########################

@users_blueprint.route('/')
@login_required
def index_users():
    '''Display all users'''

    delete_form = DeleteForm()
    return render_template('users/index.html', users=User.query.order_by('id').all(), delete_form=delete_form)

@users_blueprint.route('/new')
@prevent_login_signup
def new_users():
    '''Creates a new user'''

    return redirect(url_for('users.signup_users'))

@users_blueprint.route('/<int:user_id>', methods=['GET', 'PATCH', 'DELETE'])
@login_required
def show_users(user_id):
    ''''''

    found_user = User.query.get_or_404(user_id)
    delete_form = DeleteForm()

    if request.method == b'PATCH':
        user_form = UserForm(request.form)
        if user_form.validate():
            found_user.first_name = user_form.first_name.data
            found_user.last_name = user_form.last_name.data
            found_user.image_url = user_form.image_url.data
            db.session.add(found_user)
            db.session.commit()
            flash('User Updated!')
            return redirect(url_for('users.index_users'))
        return render_template('users/edit.html', user=found_user, form=user_form, delete_form=delete_form)

    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
            logout_user()
            flash('User Deleted!')
        return redirect(url_for('users.logout_users'))

    return render_template('users/show.html', user=found_user, delete_form=delete_form)

@users_blueprint.route('/<int:user_id>/edit')
@login_required
@ensure_correct_user
def edit_users(user_id):
    ''''''

    found_user = User.query.get_or_404(user_id)
    delete_form = DeleteForm()
    user_form = UserForm(obj=found_user)
    return render_template('users/edit.html', user=found_user, form=user_form, delete_form=delete_form)

@users_blueprint.route('/signup', methods=["GET", "POST"])
@prevent_login_signup
def signup_users():
    '''Creates a new user'''

    user_form = UserForm(request.form)

    if request.method == 'POST' and user_form.validate():
        try:
            new_user = User(
                    user_form.first_name.data,
                    user_form.last_name.data,
                    user_form.image_url.data,
                    user_form.username.data,
                    user_form.password.data)
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user)
            flash('User Created!')
            return redirect(url_for('users.index_users'))
        except IntegrityError as e:
            flash("Username already taken. Please pick another!")
            return render_template('users/signup.html', form=user_form)
    else:
        return render_template('users/signup.html', form=user_form)

@users_blueprint.route('/login', methods=["GET", "POST"])
@prevent_login_signup
def login_users():

    login_form = LoginForm(request.form)

    if request.method == "POST" and login_form.validate():
        authenticated_user = User.authenticate(login_form.data['username'], login_form.data['password'])
        if authenticated_user:
            login_user(authenticated_user)
            flash("You've successfully logged in!")
            return redirect(url_for('users.index_users'))
        flash("Invalid credentials. Please try again.")
    return render_template('users/login.html', form=login_form)

@users_blueprint.route('/logout')
@login_required
def logout_users():

    logout_user()
    flash('Logged out!')
    return redirect(url_for('users.login_users'))

