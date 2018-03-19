from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.users.forms import AddForm, DeleteForm
from project.models import User, Tag
from project import db, bcrypt

users_blueprint = Blueprint(
    'users',
    __name__,
    template_folder='templates'
)

@users_blueprint.route('/', methods=["GET", "POST"])
def index():
    if request.method == 'POST':
        form = AddForm(request.form)
    # I can refactor this to use a try/except block
        if form.validate():
            first_name = request.form.get('first_name')
            last_name = request.form.get('last_name')
            password = request.form.get('password')
            new_user = User(first_name, last_name, password)
            db.session.add(new_user)
            db.session.commit()
            flash('User Created')
            return redirect(url_for('users.index'))
        else:
            return render_template('./users/new.html', form=form)
    return render_template('./users/index.html', users=User.query.all(), tags=Tag.query.all(), form=DeleteForm())

@users_blueprint.route('/signup', methods = ["GET", "POST"])
def signup():
    form = AddForm(request.form)
    if request.method == "POST" and form.validate():
        try:
            new_user = User(form.data.get('first_name'),
             request.form.get('last_name'),
             form.data.get('password'))
            db.session.add(new_user)
            db.session.commit()
        except IntegrityError as error:
            return render_template('signup.html', form=form)
        return redirect(url_for('users.login'))
    return render_template('signup.html', form=form)


@users_blueprint.route('/login', methods = ["GET", "POST"])
def login():
    form = AddForm(request.form)
    if request.method == "POST" and form.validate():
# this whole bit can be refactored and put this logic into a metod in our model
# make a class called authenticate which accepts a username and password and implements this
# logic internally
        found_user = User.query.filter_by(last_name = form.data['last_name']).first()
        if found_user:
            authenticated_user = bcrypt.check_password_hash(found_user.password, form.data['password'])
            if authenticated_user:
                return redirect(url_for('users.welcome'))
    return render_template('login.html', form=form)

@users_blueprint.route('/welcome')
def welcome():
    return render_template('welcome.html')

@users_blueprint.route('/new')
def new():
    return render_template('users/new.html', form=AddForm())

@users_blueprint.route('/<int:user_id>', methods=["GET", "PATCH", "DELETE"])
def show(user_id):
    target_user = User.query.get(user_id)
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

@users_blueprint.route('/<int:user_id>/edit')
def edit(user_id):
    target_user = User.query.get(user_id)
    return render_template('/users/edit.html', user=target_user, form=AddForm(obj=target_user))
