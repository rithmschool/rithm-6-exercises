from flask import Blueprint, Flask, request, url_for, render_template, redirect, flash, session, g
from project.models import User
from project.users.forms import UserForm, DeleteForm
from project import db, bcrypt, login_manager
from functools import wraps
from flask_login import LoginManager, login_user, logout_user, login_required
from sqlalchemy.exc import IntegrityError

users_blueprint = Blueprint('users', __name__, template_folder='templates')
login_manager.login_view = 'users.login'


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(id))


def ensure_logged_in(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if not session.get('user_id'):
            flash("Please log in first")
            return redirect(url_for('users.login'))
        return fn(*args, **kwargs)

    return wrapper


def ensure_correct_user(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if kwargs.get('id') != session.get('user_id'):
            flash("Not Authorized")
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)

    return wrapper


@users_blueprint.route("/", methods=['GET', 'POST'])
def index():
    form = UserForm(request.form)
    return render_template('users/index.html', users=User.query.all())


@users_blueprint.route("/logout", methods=['GET'])
def logout():
    session.pop('user_id', None)
    flash('You have been signed out.')
    return render_template('users/index.html', users=User.query.all())


@users_blueprint.route('/signup', methods=["GET", "POST"])
def signup():
    form = UserForm(request.form)
    if request.method == "POST" and form.validate():
        try:
            new_user = User(form.data['first_name'], form.data['last_name'],
                            form.data['password'])
            db.session.add(new_user)
            db.session.commit()
        except IntegrityError as e:
            flash("Invalid submission. Please try again.")
            return render_template('signup.html', form=form)
        return redirect(url_for('users.login'))
    return render_template('users/signup.html', form=form)


@users_blueprint.route('/login', methods=["GET", "POST"])
def login():
    form = UserForm(request.form)
    if request.method == "POST" and form.validate():
        user = User.authenticate(form.data['first_name'],
                                 form.data['last_name'], form.data['password'])
        if user:
            flash(f"Welcome {user.first_name} {user.last_name}")
            login_user(new_user)
            session['user_name'] = user.first_name
            return redirect(url_for('users.index'))
        flash("Invalid credentials. Please try again.")
    return render_template('users/login.html', form=form)


@users_blueprint.route("/<int:id>/edit")
@ensure_logged_in
@ensure_correct_user
def edit(id):
    found_user = User.query.get(id)
    form = UserForm(obj=found_user)
    delete_form = DeleteForm(request.form)
    return render_template(
        'users/edit.html',
        user=User.query.get(id),
        form=form,
        delete_form=delete_form)


@users_blueprint.route("/<int:id>", methods=['GET', 'DELETE', 'PATCH'])
@ensure_logged_in
@ensure_correct_user
def show(id):
    found_user = User.query.get(id)
    delete_form = DeleteForm(request.form)
    if found_user is None:
        return render_template('404.html')

    if request.method == b'PATCH':
        form = UserForm(request.form)
        if form.validate():
            flash('User Updated!')
            found_user.first_name = form.data['first_name']
            found_user.last_name = form.data['last_name']
            session['user_name'] = form.data['first_name']
            db.session.add(found_user)
            db.session.commit()
            return redirect(url_for('users.index'))
        else:
            return render_template('users/edit.html', form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            flash('User Deleted!')
            session.clear()
            db.session.delete(found_user)
            db.session.commit()
            return redirect(url_for('users.index'))
    return render_template(
        'users/show.html', delete_form=delete_form, user=found_user)
