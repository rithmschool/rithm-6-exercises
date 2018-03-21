from flask import Blueprint, redirect, render_template, request, url_for, flash, session, g
from project.users.models import User
from project.users.forms import UserForm, LoginForm, DeleteForm
from project import db
from functools import wraps

users_blueprint = Blueprint('users', __name__, template_folder = 'templates')

def ensure_correct_user(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if session.get('user_id') != kwargs['id']:
            flash('not authorized to access area!')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)
    return wrapper

def ensure_logged_in(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if not session.get('user_id'):
            flash('please sign up or log in!')
            return redirect(url_for('welcome'))
        return fn(*args, **kwargs)
    return wrapper

@users_blueprint.route('/login', methods = ['GET', 'POST'])
def login():
    form = LoginForm(request.form)
    if request.method == 'POST':
        if form.validate():
            username = form.data['username']
            password = form.data['password']
            if User.login_user(username = username, password = password):
                user = User.query.filter_by(username = username).first()
                session['user_id'] = user.id
                return redirect(url_for('users.index'))
            flash('credentials not recognized!') 
            return render_template('users/login.html', form = form)
        flash('something went wrong; try logging in again!')
        return render_template('users/login.html', form = form)
    return render_template('users/login.html', form = form)

@users_blueprint.route('/logout')
@ensure_logged_in
def logout():
    if 'user_id' in session:
        del session['user_id']

    flash('you logged out!')
    return redirect(url_for('welcome'))


@users_blueprint.route('/', methods=['GET', 'POST'])
@ensure_logged_in
def index():
    if request.method == 'POST':
        form = UserForm(request.form)
        if form.validate():
            first_name = form.data['first_name']
            last_name = form.data['last_name']
            username = form.data['username']
            password = form.data['password']
            image_url = form.data['image_url']
            new_user = User.register_user(first_name = first_name, last_name = last_name, username = username, password = password, image_url = image_url)
            db.session.add(new_user)
            db.session.commit()
            flash('User Created!')
            return redirect(url_for('users.login'))
        return render_template('users/new.html', form = form)
    return render_template('users/index.html', users = User.query.all())

@users_blueprint.route('/new')
def new():
    form = UserForm()
    return render_template('users/new.html', form = form)

@users_blueprint.route('/<int:id>/edit')
@ensure_correct_user
def edit(id):
    user_form = UserForm(obj = User.query.get_or_404(id))
    delete_form = DeleteForm(obj = User.query.get_or_404(id))
    return render_template('users/edit.html', user = User.query.get_or_404(id), user_form = user_form, delete_form = delete_form)

@users_blueprint.route('/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
@ensure_correct_user
def show(id):
    found_user = User.query.get_or_404(id)
    if request.method == b'PATCH':
        form = UserForm(request.form)
        if form.validate():
            found_user.first_name = request.form.get('first_name')
            found_user.last_name = request.form.get('last_name')
            found_user.image_url = request.form.get('image_url')
            db.session.add(found_user)
            db.session.commit()
            flash('User Updated!')
            return redirect(url_for('users.show', id = id))
        return render_template('users/edit.html', user = User.query.get_or_404(id), form = form)
    if request.method == b'DELETE':
        form = DeleteForm(request.form)
        if form.validate():
            db.session.delete(found_user)
            db.session.commit()
            flash('User Deleted!')
            return redirect(url_for('users.index'))
    return render_template('users/show.html', user = found_user)