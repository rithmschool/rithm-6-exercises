from flask import redirect, render_template, request, url_for, flash, Blueprint, session
from sqlalchemy.exc import IntegrityError
from project.users.forms import UserForm, DeleteForm, LoginForm
from project.models import Message, User, Tag
from project import db, bcrypt
from project.decorators import ensure_authenticated

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
            try:
                hashed = bcrypt.generate_password_hash(form.data['password'])
                hashed_utf8 = hashed.decode('utf8')
                new_user = User(
                    first_name=form.data['first_name'],
                    last_name=form.data['last_name'],
                    username=form.data['username'],
                    password=hashed_utf8)
                db.session.add(new_user)
                db.session.commit()
                session['user_id'] = new_user.id
                flash('User Created!')
                return redirect(url_for('users.index'))
            except IntegrityError as error:
                return render_template('users/new.html', form=form, error='username_error')
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


@users_blueprint.route('/auth', methods=["GET", "POST"])
def login():
    login_form = LoginForm(request.form)
    if request.method == "POST":
        # username = request.form.get('username')
        # password = request.form.get('password')
        # user = User.query.filter_by(username=username).one()

        # if bcrypt.check_password_hash(user.password, password):
            if login_form.validate():
                authenticated_user = User.authenticate(login_form.username.data, login_form.password.data)
                if authenticated_user:
                    session['user_id'] = authenticated_user.id
                    flash('Successfully logged in!')
                    return redirect(url_for('users.index'))
                else:
                    flash('Invalid credentials')
                    return redirect(url_for('users.login'))
    return render_template('users/login.html', login_form=login_form)

