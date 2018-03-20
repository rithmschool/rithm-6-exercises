from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.users.forms import AddForm, DeleteForm, LogInForm
from project.models import User, Tag
from project import db, bcrypt
from sqlalchemy.exc import IntegrityError

users_blueprint = Blueprint(
    'users',
    __name__,
    template_folder='templates'
)

@users_blueprint.route('/')
def index():
    return render_template('./users/index.html', users=User.query.all(), tags=Tag.query.all(), form=DeleteForm())

@users_blueprint.route('/signup', methods = ["GET", "POST"])
def signup():
    form = AddForm(request.form)
    if request.method == "POST" and form.validate():
        try:
            new_user = User(form.data.get('first_name'), form.data.get('last_name'), form.data.get('password'))
            db.session.add(new_user)
            db.session.commit()
        except IntegrityError as error:
            return render_template('users/signup.html', form=form, error="username_taken")
        return redirect(url_for('users.index'))
    return render_template('users/signup.html', form=form)


@users_blueprint.route('/login', methods = ["GET", "POST"])
def login():
    form = LogInForm(request.form)
    if request.method == "POST" and form.validate():
        found_user = User.query.filter_by(last_name = form.data['last_name']).first()
        if found_user:
            authenticated_user = bcrypt.check_password_hash(found_user.password, form.data['password'])
            if authenticated_user:
                return redirect(url_for('users.index'))
            else:
                return render_template('users/login.html', form=form, error="password_incorrect")
        else:
            return render_template('users/login.html', form=form, error="username_incorrect")
    return render_template('users/login.html', form=form)

@users_blueprint.route('/<int:user_id>', methods=["GET", "PATCH", "DELETE"])
def show(user_id):
    target_user = User.query.get(user_id)
    if request.method == b'PATCH':
        form = AddForm(request.form)
        if form.validate():
            target_user.first_name = request.form.get('first_name')
            target_user.last_name = request.form.get('last_name')
            db.session.add(target_user)
            db.session.commit()
            flash('User Updated')
            return redirect(url_for('users.index'))
        else:
            return render_template('.users/edit.html', user=target_user, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(target_user)
            db.session.commit()
            flash('User Deleted')
            return redirect(url_for('users.index'))
    return render_template('/users/show.html', user=target_user)

@users_blueprint.route('/<int:user_id>/edit')
def edit(user_id):
    target_user = User.query.get(user_id)
    return render_template('/users/edit.html', user=target_user, form=AddForm(obj=target_user))
