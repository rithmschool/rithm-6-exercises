from flask import render_template, redirect, request, url_for, flash, Blueprint, session
from project.users.forms import UserForm, DeleteForm, LoginForm
from project.models import User
from project import db, bcrypt
from sqlalchemy.exc import IntegrityError
from project.decorators import ensure_correct_user
from flask_login import login_user, logout_user, login_required

users_blueprint = Blueprint('users', __name__, template_folder='templates')


@users_blueprint.route('/signup')
def signup():
    form = UserForm()
    return render_template('users/signup.html', form=form)


@users_blueprint.route('/signup', methods=['POST'])
def create():
    form = UserForm(request.form)
    if form.validate():
        try:
            first_name = form.data['first_name']
            last_name = form.data['last_name']
            username = form.data['username']
            password = form.data['password']
            user = User.register(first_name, last_name, username, password)
            db.session.add(user)
            db.session.commit()
            login_user(user)
            flash('User Created!')
            return redirect(url_for('users.index'))
        except IntegrityError:
            flash("Username already taken")
            return render_template('users/signup.html', form=form)
    return render_template('users/signup.html', form=form)


@users_blueprint.route('/')
@login_required
def index():
    if request.method == 'POST':
        form = UserForm(request.form)
        if form.validate():
            try:
                first_name = form.data['first_name']
                last_name = form.data['last_name']
                username = form.data['username']
                password = form.data['password']
                user = User.register(first_name, last_name, username, password)
                db.session.add(user)
                db.session.commit()
                login_user(user)
                flash('User Created!')
                return redirect(url_for('users.index'))
            except IntegrityError:
                flash("Username already taken!")
                return render_template('users/signup.html', form=form)
        return render_template('users/signup.html', form=form)
    if "user_id" not in session:
        flash("Must be logged in!")
        return redirect(url_for('users.login', form=LoginForm()))
    return render_template('users/index.html', users=User.query.all())


# NEW FOR BCRYPT
@users_blueprint.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        form = LoginForm(request.form)
        if form.validate():
            username = form.data['username']
            password = form.data['password']
            user = User.authenticate(username, password)
            if user:
                login_user(user)
                flash("You are now logged in!")
                return redirect(url_for('users.index'))
            else:
                flash("Invalid Credentials")
                return render_template('users/login.html', form=LoginForm())
    return render_template('users/login.html', form=LoginForm())


@users_blueprint.route('/<int:id>/edit')
@login_required
@ensure_correct_user
def edit(id):
    user = User.query.get(id)
    form = UserForm(obj=user)
    return render_template('users/edit.html', user=user, form=form)


@users_blueprint.route('/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@login_required
@ensure_correct_user
def show(id):
    user = User.query.get(id)
    if request.method == b"PATCH":
        form = UserForm(request.form)
        if form.validate():
            user.first_name = form.data['first_name']
            user.last_name = form.data['last_name']
            user.username = form.data['username']
            hashed = bcrypt.generate_password_hash(form.data['password'])
            user.password = hashed.decode('utf8')
            db.session.add(user)
            db.session.commit()
            flash("User Updated!")
            return redirect(url_for('users.index'))
        return render_template('users/edit.html', user=user, form=form)
    if request.method == b"DELETE":
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(user)
            db.session.commit()
            logout_user()
            flash("User Deleted!")
            return redirect(url_for('users.index'))
    delete_form = DeleteForm()
    return render_template(
        'users/show.html', user=user, delete_form=delete_form)


@users_blueprint.route('/logout')
@login_required
def logout():
    logout_user()
    flash('Logged Out!')
    return redirect(url_for('users.login'))
