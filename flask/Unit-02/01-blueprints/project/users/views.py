from flask import redirect, render_template, request, url_for, flask, Blueprint, flash
from project.users.forms import UserForm, DeleteForm
from projectmodels import User
from project import db

users_blueprint = Blueprint('users', __name__, template_folder='templates')


@users_blueprint.route('/', methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        form = UserForm(request.form)
        if form.validate():
            new_user = User(
                first_name=form.data['first_name'],
                last_name=form.data['last_name'])
            db.session.add(new_user)
            db.session.commit()
            flash('User Created!')
            return redirect(url_for('index'))
        return render_template('users/new.html', form=form)
    return render_template('users/index.html', users=User.query.all())


@users_blueprint.route('/new')
def new():
    form = UserForm()
    return render_template('users/new.html', form=form)


@users_blueprint.route('/<int:user_id>/edit')
def edit(user_id):
    found_user = User.query.get_or_404(user_id)
    form = UserForm(obj=found_user)
    return render_template('users/edit.html', user=found_user, form=form)


@users_blueprint.route('/<int:user_id>', methods=['GET', 'PATCH', 'DELETE'])
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
            return redirect(url_for('index'))
        return render_template('users/edit.html', user=found_user, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
            flash('User Deleted!')
            return redirect(url_for('index'))
    return render_template(
        'users/show.html', user=found_user, delete_form=delete_form)
