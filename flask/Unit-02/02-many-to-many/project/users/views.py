from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.users.forms import UserForm, DeleteForm
from project.models import Message, User
from project import db

users_blueprint = Blueprint(
    'users',
    __name__,
    template_folder = 'templates'
)

@users_blueprint.route('/', methods=["GET", "POST"])
def index():
    delete_form = DeleteForm()
    if request.method == "POST":
        form = UserForm(request.form)
        if form.validate():
            new_user = User(
                first_name=form.data['first_name'],
                last_name=form.data['last_name'])
            db.session.add(new_user)
            db.session.commit()
            flash('User Created!')
            return redirect(url_for('users.index'))
        return render_template('users/new.html', form=form)
    return render_template(
        'users/index.html', users=User.query.all(), delete_form=delete_form)


@users_blueprint.route('/new')
def new():
    form = UserForm()
    return render_template('users/new.html', form=form)


@users_blueprint.route('/<int:id>/edit')
def edit(id):
    found_user = User.query.get_or_404(id)
    form = UserForm(obj=found_user)
    delete_form = DeleteForm(request.form)
    return render_template(
        'users/edit.html', user=found_user, form=form, delete_form=delete_form)


@users_blueprint.route('/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    found_user = User.query.get_or_404(id)
    delete_form = DeleteForm(request.form)
    form = UserForm(request.form)
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
