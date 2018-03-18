from flask import render_template, redirect, request, url_for, flash, Blueprint
from project.users.forms import UserForm, DeleteForm
from project.users.models import User
from project import db

users_blueprint = Blueprint('users', __name__, template_folder='templates')


@users_blueprint.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        form = UserForm(request.form)
        if form.validate():
            first_name = form.data['first_name']
            last_name = form.data['last_name']
            user = User(first_name, last_name)
            db.session.add(user)
            db.session.commit()
            flash('User Created!')
            return redirect(url_for('users.index'))
        return render_template('users/new.html', form=form)
    return render_template('users/index.html', users=User.query.all())


@users_blueprint.route('/new')
def new():
    form = UserForm()
    return render_template('users/new.html', form=form)


@users_blueprint.route('/<int:id>/edit')
def edit(id):
    user = User.query.get(id)
    form = UserForm(obj=user)
    return render_template('users/edit.html', user=user, form=form)


@users_blueprint.route('/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id):
    user = User.query.get(id)
    if request.method == b"PATCH":
        form = UserForm(request.form)
        if form.validate():
            user.first_name = form.data['first_name']
            user.last_name = form.data['last_name']
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
            flash("User Deleted!")
            return redirect(url_for('users.index'))
    delete_form = DeleteForm()
    return render_template(
        'users/show.html', user=user, delete_form=delete_form)
