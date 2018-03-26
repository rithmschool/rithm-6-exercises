from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.users.forms import AddForm, DeleteForm
from project.models import User
from project import db

users_blueprint = Blueprint(
    'users',
    __name__,
    template_folder='templates'
)

@users_blueprint.route('/', methods=["GET", "POST"])
def index():
    if request.method == 'POST':
        form = AddForm(request.form)
        if form.validate():
            first_name = request.form.get('first_name')
            last_name = request.form.get('last_name')
            new_user = User(first_name, last_name)
            db.session.add(new_user)
            db.session.commit()
            flash('User Created')
            return redirect(url_for('users.index'))
        else:
            return render_template('./users/new.html', form=form)
    return render_template('./users/index.html', users=User.query.all(), form=DeleteForm())

@users_blueprint.route('/new')
def new():
    return render_template('./users/new.html', form=AddForm())

@users_blueprint.route('/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    target_user = User.query.get(id)
    if request.method == b'PATCH':
        form = AddForm(request.form)
        if form.validate():
            target_user.first_name = request.form.get('first_name')
            target_user.last_name = request.form.get('last_name')
            db.session.add(target_user)
            db.session.commit()
            flash('User Updated')
            return redirect(url_for('users.index'))
        else:
            return render_template('.users/edit.html', user=target_user, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(target_user)
            db.session.commit()
            flash('User Deleted')
            return redirect(url_for('users.index'))
    return render_template('/users/show.html', user=target_user)

@users_blueprint.route('/<int:id>/edit')
def edit(id):
    target_user = User.query.get(id)
    return render_template('/users/edit.html', user=target_user, form=AddForm(obj=target_user))
