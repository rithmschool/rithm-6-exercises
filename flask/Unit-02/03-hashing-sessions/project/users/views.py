from flask import redirect, render_template, request, url_for, Blueprint, flash, session, g
from project.users.forms import UserForm, DeleteForm, LoginForm
from project.models import User
from project import db
from functools import wraps

users_blueprint = Blueprint('users', __name__, template_folder='templates')


def ensure_correct_user(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if session.get('user_id') != kwargs['user_id']:
            flash('not authorized to access area!')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)

    return wrapper


@users_blueprint.route('/login', methods=["GET", "POST"])
def login():
    form = LoginForm(request.form)
    if request.method == "POST":
        if form.validate():
            username = form.data['username']
            password = form.data['password']
            if User.login_user(username=username, password=password):
                user = User.query.filter_by(username=username).first()
                session['user_id'] = user.id
                return redirect(url_for('users.index'))
            flash('Credentials denied')
        flash('try to login again')
        return render_template('users/login.html', form=form)
    return render_template('users/login.html', form=form)


@users_blueprint.route('/logout')
def logout():
    if "user_id" in session:
        del session['user_id']

    flash('logged out')
    return redirect(url_for('users.login'))


@users_blueprint.route('/', methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        form = UserForm(request.form)
        if form.validate():
            first_name = form.data['first_name']
            last_name = form.data['last_name']
            username = form.data['username']
            password = form.data['password']
            new_user = User.registered_user(
                first_name=first_name,
                last_name=last_name,
                username=username,
                password=password)

            db.session.add(new_user)
            db.session.commit()
            flash('User Created!')
            return redirect(url_for('users.login'))
        return render_template('users/new.html', form=form)
    return render_template('users/index.html', users=User.query.all())


@users_blueprint.route('/new')
def new():
    form = UserForm()
    return render_template('users/new.html', form=form)


@users_blueprint.route('/<int:user_id>/edit')
@ensure_correct_user
def edit(user_id):
    found_user = User.query.get_or_404(user_id)
    form = UserForm(obj=found_user)
    return render_template('users/edit.html', user=found_user, form=form)


@users_blueprint.route('/<int:user_id>', methods=['GET', 'PATCH', 'DELETE'])
@ensure_correct_user
def show(user_id):
    found_user = User.query.get_or_404(user_id)
    delete_form = DeleteForm()
    if request.method == b'PATCH':
        form = UserForm(request.form)
        if form.validate():
            found_user.first_name = form.first_name.data
            found_user.last_name = form.last_name.data
            db.session.add(found_user)
            db.session.commit()
            flash('User Updated!')
            return redirect(url_for('users.index'))
        return render_template('users/edit.html', user=found_user, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
            flash('User Deleted!')
            return redirect(url_for('users.index'))
    return render_template(
        'users/show.html', user=found_user, delete_form=delete_form)
