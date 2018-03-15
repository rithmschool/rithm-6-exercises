from flask import request, url_for, render_template, redirect, Blueprint
from project.models import User
from project.users.forms import UserForm, DeleteForm
from project import db
users_blueprint = Blueprint('users', __name__, template_folder='templates')


@users_blueprint.route("/", methods=['GET', 'POST'])
def index():
    form = UserForm(request.form)
    if request.method == 'POST':
        if form.validate():
            first_name = form.data['first_name']
            last_name = form.data['last_name']
            image_url = form.data['image_url']
            new_user = User(
                first_name=first_name,
                last_name=last_name,
                image_url=image_url)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('users.index'))
        else:
            return render_template('users/new.html', form=form)

    return render_template('users/index.html', users=User.query.all())


@users_blueprint.route("/new")
def new():
    form = UserForm()
    return render_template('users/new.html', form=form)


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
    found_user = User.query.get(id)
    delete_form = DeleteForm(request.form)
    if found_user is None:
        return render_template('404.html')

    if request.method == b'PATCH':
        form = UserForm(request.form)
        if form.validate():
            found_user.first_name = form.data['first_name']
            found_user.last_name = form.data['last_name']
            found_user.image_url = form.data['image_url']
            db.session.add(found_user)
            db.session.commit()
            return redirect(url_for('users.show', id=id))
        else:
            return render_template('users/edit.html', form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
            return redirect(url_for('users.index'))

    return render_template(
        'users/show.html', delete_form=delete_form, user=found_user)
