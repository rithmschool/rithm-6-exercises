from flask import redirect, render_template, request, url_for, flash, Blueprint, session, g
from project.users.forms import UserForm, DeleteForm
from project.models import User
from project import db, bcrypt
from functools import wraps
from sqlalchemy.exc import IntegrityError

users_blueprint = Blueprint('users', __name__, template_folder='templates')


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
            return redirect(url_for('users.welcome'))
        return fn(*args, **kwargs)

    return wrapper


@users_blueprint.before_request
def current_user():
    if session.get('user_id'):
        g.current_user = User.query.get(session['user_id'])
    else:
        g.current_user = None


@users_blueprint.route('/', methods=['GET', 'POST'])
def index():
    delete_form = DeleteForm()
    if request.method == "POST":
        form = UserForm(request.form)
        if form.validate():
            new_user = User(
                first_name=request.form['first_name'],
                last_name=request.form['last_name'],
                username=request.form['username'],
                password=request.form['password'])
            db.session.add(new_user)
            db.session.commit()
            flash('User Created!')
            return redirect(url_for('users.index'))
        else:
            return render_template('users/new.html', form=form)
    return render_template(
        '/users/index.html', users=User.query.all(), delete_form=delete_form)


@users_blueprint.route('/welcome')
@ensure_logged_in
def welcome():
    return render_template('users/welcome.html')


@users_blueprint.route('/new')
def new():
    form = UserForm(request.form)
    if request.method == "POST" and form.validate():
        try:
            new_user = User(form.data['username'], form.data['password'],
                            form.data['username'], form.data['password'])
            db.session.add(new_user)
            db.session.commit()
        except IntegrityError as e:
            flash("Invalid submission. Try another username?")
            return render_template('signup.html', form=form)
        return redirect(url_for('users.login'))
    return render_template('users/new.html', form=form)


@users_blueprint.route('/login', methods=["GET", "POST"])
def login():
    form = UserForm(request.form)
    if request.method == "POST" and form.validate():
        user = User.authenticate(form.data['username'], form.data['password'])
        if user:
            session['user_id'] = user.id
            flash("Success!")
            return redirect(url_for('users.welcome'))
        flash("Invalid credentials.")
    return render_template('users/login.html', form=form)


@users_blueprint.route('/<int:id>/edit')
def edit(id):
    delete_form = DeleteForm()
    user_form = UserForm(obj=User.query.get(id))
    return render_template(
        '/users/edit.html',
        user=User.query.get(id),
        form=user_form,
        delete_form=delete_form)


@users_blueprint.route('/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id):
    delete_form = DeleteForm(request.form)
    found_user = User.query.get(id)
    form = UserForm(request.form)
    if request.method == b'PATCH':
        if form.validate():
            found_user.first_name = request.form['first_name']
            found_user.last_name = request.form['last_name']
            db.session.add(found_user)
            db.session.commit()
            flash('User Updated!')
            return redirect(url_for('users.index'))
        else:
            return render_template(
                '/users/edit.html',
                user=found_user,
                form=form,
                delete_form=delete_form)
    if request.method == b'DELETE':
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
            flash('User Deleted!')
        return redirect(url_for('users.index'))
    return render_template('/users/show.html', user=found_user)
