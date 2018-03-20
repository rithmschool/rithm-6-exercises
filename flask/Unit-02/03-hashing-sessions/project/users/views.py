from flask import Blueprint, redirect, render_template, request, url_for, flash
from project.users.models import User
from project.users.forms import UserForm, DeleteForm
from project import db

users_blueprint = Blueprint('users', __name__, template_folder = 'templates')

@users_blueprint.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        form = UserForm(request.form)
        if form.validate():
            first_name = form.data['first_name']
            last_name = form.data['last_name']
            image_url = form.data['image_url']
            new_user = User(first_name = first_name, last_name = last_name, image_url = image_url)
            db.session.add(new_user)
            db.session.commit()
            flash('User Created!')
            return redirect(url_for('users.index'))
        return render_template('users/new.html', form = form)
    return render_template('users/index.html', users = User.query.all())

@users_blueprint.route('/new')
def new():
    form = UserForm()
    return render_template('users/new.html', form = form)

@users_blueprint.route('/<int:id>/edit')
def edit(id):
    user_form = UserForm(obj = User.query.get_or_404(id))
    delete_form = DeleteForm(obj = User.query.get_or_404(id))
    return render_template('users/edit.html', user = User.query.get_or_404(id), user_form = user_form, delete_form = delete_form)

@users_blueprint.route('/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
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