from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.users.forms import UserForm, DeleteForm, LoginForm
from project.models import User
from project import db

from sqlalchemy.exc import IntegrityError

users_blueprint = Blueprint('users', __name__, template_folder='templates')

@users_blueprint.route('/signup', methods=["GET", "POST"])
def signup():
    newUser = UserForm(request.form)
    if request.method == "POST" and newUser.validate():
        try:
            new_person = User.register(first_name=request.form.get('first_name'), last_name=request.form.get('last_name'), username=request.form.get('username'), password=request.form.get('password'))
            db.session.add(new_person)
            db.session.commit()
        except IntegrityError as e:
            return render_template('users/signup.html', form=newUser)
        return redirect(url_for('users.login'))
    return render_template('users/signup.html', form=newUser)

@users_blueprint.route('/login', methods=["GET", "POST"])
def login():
    userlogin = LoginForm(request.form)
    if request.method == "POST" and userlogin.validate():
        user = User.authenticate(username=request.form.get('username'), password=request.form.get('password'))
        return redirect(url_for('users.show', id=user.id))
    return render_template('users/login.html', form=userlogin)

@users_blueprint.route('/')
def index():
    return render_template('users/index.html', users=User.query.all())


@users_blueprint.route('/new')
def new():
    # user_form = UserForm()
    # return render_template('users/signup.html', form=user_form)
    return redirect(url_for('users.signup'))


@users_blueprint.route('/', methods=['POST'])
def create():
    user_form = UserForm(request.form)
    #if form is validate commit if not take info and render template
    if user_form.validate():
        user = User(request.form.get('first_name'), request.form.get('last_name'))
        db.session.add(user)
        db.session.commit()
        flash('User Created')
        return redirect(url_for('users.index'))
    else:
        return render_template('users/new.html', form=user_form)


@users_blueprint.route('/<int:id>')
def show(id):
    delete_form = DeleteForm()
    found_user = User.query.get(id)
    return render_template('users/show.html', user=found_user, delete_form=delete_form)


@users_blueprint.route('/<int:id>/edit')
def edit(id):
    found_user = User.query.get(id)
    #obj=found_user prepopulates the edit form
    user_form = UserForm(obj=found_user)
    return render_template('users/edit.html', user=found_user, form=user_form)


@users_blueprint.route('/<int:id>', methods=['PATCH'])
def update(id):
    user_form = UserForm(request.form)
    if user_form.validate():
        found_user = User.query.get(id)
        found_user.first_name = request.form.get('first_name')
        found_user.last_name = request.form.get('last_name')
        db.session.add(found_user)
        db.session.commit()
        flash('User Updated!')
        return redirect(url_for('users.index'))
    else:
        return render_template('users/edit.html', user=found_user, form=user_form)


@users_blueprint.route('/<int:id>', methods=['DELETE'])
def destroy(id):
    delete_form = DeleteForm(request.form)
    if delete_form.validate():
        found_user = User.query.get(id)
        db.session.delete(found_user)
        db.session.commit()
        flash('User Deleted')
        return redirect(url_for('users.index'))
    else:
        return render_template('users/show.html', user=found_user, delete_form=delete_form)
