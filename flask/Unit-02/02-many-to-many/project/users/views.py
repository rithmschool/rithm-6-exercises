from flask import request, redirect, url_for, render_template, flash, Blueprint, session, g
from project import db, bcrypt
from project.decorators import require_login, prevent_login_signup, ensure_correct_user
from project.users.forms import UserForm, LoginForm, DeleteForm
from project.models import User
from sqlalchemy.exc import IntegrityError

users_blueprint = Blueprint('users', __name__, template_folder='templates')


@users_blueprint.route('/')
def index():
    return render_template('users/index.html', users=User.query.all())


@users_blueprint.route('/', methods=['POST'])
@prevent_login_signup
def signup():
    form = UserForm(request.form)
    if form.validate():
        try:
            username = form.username.data
            first_name = form.first_name.data
            last_name = form.last_name.data
            about_me = form.about_me.data
            img_url = form.img_url.data
            password = form.password.data
            new_user = User.register(username, first_name, last_name, about_me,
                                     img_url, password)
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id
            flash('User Created!')
            return redirect(url_for('users.index'))
        except IntegrityError:
            flash('Username already taken!')
            return render_template('users/new.html', form=form)
    return render_template('users/new.html', form=form)


@users_blueprint.route('/new')
@prevent_login_signup
@require_login
def new():
    form = UserForm()
    return render_template('users/new.html', form=form)


@users_blueprint.route('/login', methods=['GET', 'POST'])
@prevent_login_signup
def login():
    form = LoginForm(request.form)
    if request.method == 'POST':
        if form.validate():
            user = User.authenticate(form.username.data, form.password.data)
            if user:
                session['user_id'] = user.id
                flash("Success! You logged in :)!")
                return redirect(url_for('users.index'))
        flash("Login failed")
        redirect(url_for('users.login'))
    return render_template('users/login.html', form=form)


@users_blueprint.route('/logout')
@require_login
def logout():
    del session["user_id"]
    flash('You have been signed out.')
    return redirect(url_for('users.login'))


@users_blueprint.route('/<int:user_id>/edit')
@require_login
@ensure_correct_user
def edit(user_id):
    found_user = User.query.get_or_404(user_id)
    form = UserForm(obj=found_user)
    return render_template('users/edit.html', user=found_user, form=form)


@users_blueprint.route('/<int:user_id>', methods=['GET', 'PATCH', 'DELETE'])
def show(user_id):
    found_user = User.query.get_or_404(user_id)
    delete_form = DeleteForm()
    if request.method == b'PATCH':
        form = UserForm(request.form)
        if form.validate() and bcrypt.check_password_hash(
                found_user.password, form.password.data):
            found_user.username = form.username.data
            found_user.first_name = form.first_name.data
            found_user.last_name = form.last_name.data
            found_user.about_me = form.about_me.data
            found_user.img_url = form.img_url.data
            db.session.add(found_user)
            db.session.commit()
            flash('User Updated!')
            return redirect(url_for('users.show', user_id=user_id))
        flash('Password Incorrect')
        return render_template('users/edit.html', user=found_user, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
            del session["user_id"]
            flash('User Deleted!')
            return redirect(url_for('users.login'))
    return render_template(
        'users/show.html', user=found_user, delete_form=delete_form)
