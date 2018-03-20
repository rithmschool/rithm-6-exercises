from flask import request, url_for, render_template, redirect, flash, Blueprint, session
from project.models import User
from project.users.forms import UserForm, DeleteForm, LoginForm
from project import db, bcrypt
users_blueprint = Blueprint('users', __name__, template_folder='templates')


@users_blueprint.route("/", methods=['GET', 'POST'])
def index():
    form = UserForm(request.form)
    if request.method == 'POST':
        if form.validate():
            first_name = form.data['first_name']
            last_name = form.data['last_name']
            username = form.data['username']
            password = form.data['password']
            image_url = form.data['image_url']
            new_user = User.register(first_name, last_name, username, password,
                                     image_url)
            db.session.add(new_user)
            db.session.commit()
            flash("SUCCESS! You have added this user")
            return redirect(url_for('users.index'))
        else:
            return render_template('users/new.html', form=form)

    return render_template('users/index.html', users=User.query.all())


@users_blueprint.route("/new")
def new():
    form = UserForm()
    return render_template('users/new.html', form=form)


@users_blueprint.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        form = LoginForm(request.form)
        if form.validate():
            username = form.data['username']
            password = form.data['password']
            found_user = User.authenticate(username, password)
            if found_user:
                session['user_id'] = found_user.id
                flash("SUCCESS! You Have Logged in!")
                return redirect(
                    url_for('messages.index', user_id=found_user.id))
            else:
                flash(
                    "Login Failed! There's No Username or Password That Matches"
                )
                return render_template('users/login.html', form=form)
        else:
            flash("Please make sure all fields are filled in")
            return render_template('users/login.html', form=form)
    form = LoginForm()
    return render_template('users/login.html', form=form)


@users_blueprint.route("/<int:id>/edit")
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
def show(id):
    found_user = User.query.get_or_404(id)
    delete_form = DeleteForm(request.form)
    if request.method == b'PATCH':
        form = UserForm(request.form)
        if form.validate():
            hashed = bcrypt.generate_password_hash(form.data['password'])
            hashed_utf8 = hashed.decode("utf8")
            found_user.first_name = form.data['first_name']
            found_user.last_name = form.data['last_name']
            found_user.username = form.data['username']
            found_user.password = hashed_utf8
            found_user.image_url = form.data['image_url']
            db.session.add(found_user)
            db.session.commit()
            flash("SUCCESS! Your Update Has Been Added!")
            return redirect(url_for('users.show', id=id))
        else:
            return render_template('users/edit.html', form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
            flash("User Deleted")
            return redirect(url_for('users.index'))

    return render_template(
        'users/show.html', delete_form=delete_form, user=found_user)
