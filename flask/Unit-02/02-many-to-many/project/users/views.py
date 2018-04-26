from flask import redirect, render_template, request, url_for, flash, Blueprint, session, g
from sqlalchemy.exc import IntegrityError, InvalidRequestError
from project.users.forms import UserForm, DeleteForm, LoginForm, EditForm
from project.models import User
from project.decorators import verify_login, verify_user, prevent_duplicate_login
from project import db, bcrypt
from IPython import embed

users_blueprint = Blueprint('users', __name__, template_folder='templates')


@users_blueprint.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        user_form = UserForm(request.form)
        if user_form.validate():
            # hashed = bcrypt.generate_password_hash(
            #     password=user_form.data['password'])
            # hashed_utf8 = hashed.decode('utf-8')
            user = User(
                first_name=user_form.data['first_name'],
                last_name=user_form.data['last_name'],
                username=user_form.data['username'],
                # password=hashed_utf8,
                image_url=user_form.data['image_url'])
            try:
                db.session.add(user)
                db.session.commit()
                flash('User Created!')
                return redirect(url_for('users.index'))
            except IntegrityError as error:
                return render_template(
                    'users/new.html',
                    user_form=user_form,
                    error='username unavailable')
        flash('Form Incomplete!')
        return render_template('users/new.html', user_form=user_form)
    return render_template('users/index.html', users=User.query.all())


# @users_blueprint.route('/auth', methods=['GET', 'POST'])
# @prevent_duplicate_login
# def login():
#     login_form = LoginForm(request.form)
#     if request.method == 'POST':
#         if login_form.validate():
#             user = User.authenticate(login_form.data['username'],
#                                      login_form.data['password'])
#             if user:
#                 session['user_id'] = user.id
#                 flash('Login Successful!')
#                 return redirect(url_for('users.index'))
#         flash('Invalid Username/Password')
#     return render_template('users/login.html', login_form=login_form)


@users_blueprint.route('/logout')
def logout():
    session.pop('user_id', None)
    flash('You have been signed out')
    return redirect(url_for('users.login'))


@users_blueprint.route('/new')
def new():
    return render_template('users/new.html', user_form=UserForm())


@users_blueprint.route('/<int:user_id>/edit')
# @verify_login
# @verify_user
def edit(user_id):
    user = User.query.get_or_404(user_id)
    edit_form = EditForm(obj=user)
    return render_template(
        'users/edit.html',
        user=user,
        edit_form=edit_form,
        delete_form=DeleteForm())


@users_blueprint.route('/<int:user_id>', methods=['GET', 'PATCH', 'DELETE'])
# @verify_login
# @verify_user
def show(user_id):
    user = User.query.get_or_404(user_id)
    delete_form = DeleteForm(request.form)
    if request.method == b'PATCH':
        edit_form = EditForm(request.form)
        if edit_form.validate():
            user.first_name = edit_form.data['first_name']
            user.last_name = edit_form.data['last_name']
            user.username = edit_form.data['username']
            user.image_url = edit_form.data['image_url']
            try:
                db.session.add(user)
                db.session.commit()
                flash('User Updated!')
                return redirect(url_for('messages.index', user_id=user_id))
            except IntegrityError as error:
                return render_template(
                    'users/edit.html',
                    user=user,
                    edit_form=edit_form,
                    delete_form=DeleteForm(),
                    error='username unavailable')
        flash('Form Incomplete!')
        return render_template(
            'users/edit.html',
            user=user,
            edit_form=edit_form,
            delete_form=DeleteForm())
    if request.method == b'DELETE':
        if delete_form.validate():
            db.session.delete(user)
            db.session.commit()
            flash('User Deleted!')
            return redirect(url_for('users.index'))
        flash('Delete Request Denied!')
        return redirect(url_for('users.index'))


@users_blueprint.before_request
def current_user():
    if session.get('user_id'):
        g.current_user = User.query.get(session['user_id'])
    else:
        g.current_user = None
