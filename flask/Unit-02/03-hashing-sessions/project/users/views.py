from flask import redirect, render_template, request, url_for, flash, Blueprint, session
from sqlalchemy.exc import IntegrityError, InvalidRequestError
from project.users.forms import UForm, DForm, LoginForm, EditForm
from project.models import User
from project import db, bcrypt
from functools import wraps
from IPython import embed

ubp = Blueprint('u', __name__, template_folder='templates')


@ubp.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        u_form = UForm(request.form)
        if u_form.validate():
            hashed = bcrypt.generate_password_hash(password=u_form.data['password'])
            hashed_utf8 = hashed.decode('utf-8')
            u = User(first_name=u_form.data['first_name'], last_name=u_form.data['last_name'], username=u_form.data['username'], password=hashed_utf8, image_url=u_form.data['image_url'])
            try:
                db.session.add(u)
                db.session.commit()
                flash('User Created!')
                return redirect(url_for('u.index'))
            except IntegrityError as error:
                return render_template('users/new.html', u_form=u_form, error='username unavailable')
        flash('Form Incomplete!')
        return render_template('users/new.html', u_form=u_form)
    return render_template('users/index.html', users=User.query.all())

@ubp.route('/auth', methods=['GET','POST'])
def login():
    login_form = LoginForm(request.form)
    if request.method == 'POST':

        if login_form.validate():
            user = User.authenticate(login_form.data['username'], login_form.data['password'])
            if user:
                session['user_id'] = user.id

                flash('Login Successful!')
                return redirect(url_for('u.index'))
        flash('Invalid Username/Password')
    return render_template('users/login.html', login_form=login_form)

@ubp.route('/logout')
def logout():
    session.pop('user_id', None)
    flash('You have been signed out.')
    return redirect(url_for('u.login'))


@ubp.route('/new')
def new():
    return render_template('users/new.html', u_form=UForm())


@ubp.route('/<int:u_id>/edit')
def edit(u_id):
    u = User.query.get_or_404(u_id)
    edit_form = EditForm(obj=u)
    return render_template(
        'users/edit.html', u=u, edit_form=edit_form, d_form=DForm())


@ubp.route('/<int:u_id>', methods=['GET', 'PATCH', 'DELETE'])
def show(u_id):
    u = User.query.get_or_404(u_id)
    d_form = DForm(request.form)
    if request.method == b'PATCH':
        edit_form = EditForm(request.form)
        if edit_form.validate():
            u.first_name = edit_form.data['first_name']
            u.last_name = edit_form.data['last_name']
            u.username = edit_form.data['username']
            u.image_url = edit_form.data['image_url']
            try:
                db.session.add(u)
                db.session.commit()
                flash('User Updated!')
                return redirect(url_for('m.index', u_id=u_id))
            except IntegrityError as error:
                return render_template('users/edit.html', u=u, edit_form=edit_form, d_form=DForm(), error='username unavailable')
        flash('Form Incomplete!')
        return render_template(
            'users/edit.html', u=u, edit_form=edit_form, d_form=DForm())
    if request.method == b'DELETE':
        if d_form.validate():
            db.session.delete(u)
            db.session.commit()
            flash('User Deleted!')
            return redirect(url_for('u.index'))
        flash('Delete Request Denied!')
        return redirect(url_for('u.index'))

# @ubp.before_request
# def current_user():
#     if session.get('user_id'):
#         g.current_user = User.query.get(session['user_id'])
    # else:
    #     g.current_user = None
