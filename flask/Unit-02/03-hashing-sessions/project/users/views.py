from flask import Flask, redirect, render_template, request, url_for, flash, Blueprint, session, g
from sqlalchemy.exc import IntegrityError
from project.users.forms import UserForm, DeleteForm, LoginForm, EditForm
from project.models import Message, User
from project import db, bcrypt
from project.decorators import ensure_authenticated, prevent_multiple_login_signup, ensure_authorized

users_blueprint = Blueprint(
    'users',
    __name__,
    template_folder = 'templates'
)


@users_blueprint.before_request
def current_user():
    if session.get('user_id'):
        g.current_user = User.query.get(session['user_id'])
    else:
        g.current_user = None


@users_blueprint.route('/')
@ensure_authenticated
def index():
    delete_form = DeleteForm()
    return render_template('users/index.html', users=User.query.all(), delete_form=delete_form)


@users_blueprint.route('/', methods=["GET", "POST"])
@prevent_multiple_login_signup
def signup():
    if request.method == "POST":
        form = UserForm(request.form)
        if form.validate():
            try:
                hashed = bcrypt.generate_password_hash(form.data['password'])
                hashed_utf8 = hashed.decode('utf8')
                new_user = User(
                    first_name=form.data['first_name'],
                    last_name=form.data['last_name'],
                    username=form.data['username'],
                    password=hashed_utf8)
                db.session.add(new_user)
                db.session.commit()
                session['user_id'] = new_user.id
                flash('User Created!')
                return redirect(url_for('users.index'))
            except IntegrityError as error:
                return render_template('users/new.html', form=form, error='username_error')
        return render_template('users/new.html', form=form)


@users_blueprint.route('/new')
@prevent_multiple_login_signup
def new():
    form = UserForm()
    return render_template('users/new.html', form=form)


@users_blueprint.route('/<int:id>/edit')
@ensure_authenticated
@ensure_authorized
def edit(id):
    found_user = User.query.get_or_404(id)
    form = EditForm(obj=found_user)
    delete_form = DeleteForm(request.form)
    return render_template(
        'users/edit.html', user=found_user, form=form, delete_form=delete_form)


@users_blueprint.route('/<int:id>', methods=["GET", "PATCH", "DELETE"])
@ensure_authenticated
def show(id):
    found_user = User.query.get_or_404(id)
    delete_form = DeleteForm(request.form)
    form = EditForm(request.form)
    if request.method == b"PATCH":
        if form.validate():
            found_user.first_name = form.first_name.data
            found_user.last_name = form.last_name.data
            db.session.add(found_user)
            db.session.commit()
            flash('User Updated!')
            return redirect(url_for('users.index'))
        return render_template(
            'users/edit.html',
            user=found_user,
            form=form,
            delete_form=delete_form)
    if request.method == b"DELETE":
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
            flash('User Deleted!', 'error')
            return redirect(url_for('users.index'))
        return render_template(
            'users/edit.html',
            user=found_user,
            form=form,
            delete_form=delete_form)
    return render_template('users/show.html', user=found_user)


@users_blueprint.route('/auth', methods=["GET", "POST"])
@prevent_multiple_login_signup
def login():
    login_form = LoginForm(request.form)
    if request.method == "POST":
        if login_form.validate():
            authenticated_user = User.authenticate(login_form.username.data, login_form.password.data)
            if authenticated_user:
                session['user_id'] = authenticated_user.id
                flash('Successfully logged in!')
                return redirect(url_for('users.index'))
            else:
                flash('Invalid credentials')
                return redirect(url_for('users.login'))
    return render_template('users/login.html', login_form=login_form)


@users_blueprint.route('/logout')
def logout():
    session.pop('user_id', None)
    flash('Successfully logged out')
    return redirect(url_for('users.login'))
