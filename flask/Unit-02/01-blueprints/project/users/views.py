from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.users.forms import UserForm, DeleteForm
from project.models import User
from project import db

users_blueprint = Blueprint(
    'users', __name__, template_folder='templates'
)


@users_blueprint.route('/')
def index():
    delete_form = DeleteForm()
    return render_template('users/index.html', users=User.query.all(), delete_form=delete_form)


@users_blueprint.route('/new')
def new():
    user_form = NewUser()
    return render_template('users/new.html', form=user_form)


@users_blueprint.route('/<int:id>')
def show(id):
    return render_template('users/show.html', user=User.query.get(id))


@users_blueprint.route('/<int:id>/edit')
def edit(id):
    # this piece of code looks into the database and returns the user
    found_user = User.query.get(id)
    # this code provides the user to the NewUser instance so it can be displayed
    user_form = NewUser(obj=found_user)
    return render_template('users/edit.html', user=User.query.get(id), form=user_form)

# CREATE NEW USER --------------------------------------


@users_blueprint.route('', methods=['POST'])
def create():
    user_form = NewUser(request.form)
    if user_form.validate():
        form = NewUser(request.form)
        new_user = User(form.data['first_name'],
                        form.data['last_name'])
        db.session.add(new_user)
        db.session.commit()
        flash('User created!')
    else:
        return render_template('users/new.html', form=user_form)
    return redirect(url_for('index'))
# ----------------------------------------------------------------------------


@users_blueprint.route('/<int:id>', methods=['GET', 'PATCH'])
def update(id):
    found_user = User.query.get(id)
    form = NewUser(request.form)
    if request.method == b'PATCH':
        from IPython import embed
        embed()
        if form.validate():
            found_user.first_name = form.data['first_name']
            found_user.last_name = form.data['last_name']
            db.session.add(found_user)
            db.session.commit()
            flash('User updated!')
            return redirect(url_for('index'))
        return render_template('users/edit.html', user=found_user, form=form)
    return render_template('users/edit.html', user=found_user, form=form)


@app.route('/<int:id>', methods=['DELETE'])
def destroy(id):
    delete_form = DeleteForm(request.form)
    user = User.query.get(id)
    print('we try to delete')
    if delete_form.validate():
        print('we are deleting')
        db.session.delete(user)
        db.session.commit()
        flash('User deleted!')
        return redirect(url_for('index'))
    return redirect(url_for('index'))
