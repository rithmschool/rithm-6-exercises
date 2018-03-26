from flask import redirect, render_template, request, url_for, flash, Blueprint, session, g
from project.users.forms import UserForm, LoginForm, DeleteForm
from project.models import User
from project import db
from sqlalchemy.exc import IntegrityError
from project.decorators import ensure_authenticated, prevent_login_signup, ensure_correct_user

users_blueprint = Blueprint(
    'users',
    __name__,
    template_folder='templates'
)


@users_blueprint.before_request
def current_user():
    if session.get("user_id"):
        g.current_user = User.query.get(session["user_id"])
    else:
        g.current_user = None


@users_blueprint.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        form = UserForm(request.form)
        if form.validate():
            try:
                new_user = User(
                    first_name=form.first_name.data,
                    last_name=form.last_name.data,
                    username=form.username.data,
                    password=form.password.data)
                db.session.add(new_user)
                db.session.commit()
                session['user_id'] = new_user.id
                flash("User Created!")
                return redirect(url_for("users.index", form=form))
            except IntegrityError:
                flash("Username already taken!")
                return render_template("users/new.html", form=form)
        return render_template("users/new.html", form=form)
    return render_template("users/index.html", users=User.query.all())


@users_blueprint.route("/new")
@prevent_login_signup
def new():
    user_form = UserForm()
    return render_template("users/new.html", form=user_form)


@users_blueprint.route("/<int:id>", methods=["GET", "PATCH", "DELETE"])
@ensure_authenticated
@ensure_correct_user
def show(id):
    found_user = User.query.get(id)
    form = UserForm(request.form)
    delete_form = DeleteForm(request.form)
    if request.method == b"PATCH":
        if form.validate():
            found_user.first_name = form.data["first_name"]
            found_user.last_name = form.data["last_name"]
            db.session.add(found_user)
            db.session.commit()
            flash("User Edited!")
            return redirect(url_for("users.edit", id=found_user.id, form=form))
        return render_template("users/edit.html", user=found_user, form=form, delete_form=delete_form)
    if request.method == b"DELETE":
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
            flash("User Deleted")
            return redirect(url_for("users.index"))
        return render_template("users/edit.html", user=found_user, form=form, delete_form=delete_form)
    return render_template("users/show.html", user=found_user)


@users_blueprint.route("/<int:id>/edit")
@ensure_authenticated
@ensure_correct_user
def edit(id):
    found_user = User.query.get(id)
    form = UserForm(request.form)
    delete_form = DeleteForm()
    return render_template("users/edit.html", user=found_user, form=form, delete_form=delete_form)


@users_blueprint.route('/signup', methods=["GET", "POST"])
@prevent_login_signup
def signup():
    form = UserForm(request.form)
    if request.method == "POST" and form.validate():
        try:
            new_user = User(form.data['username'], form.data['password'])
            # add a check to see if user already exists?
            db.session.add(new_user)
            db.session.commit()
        except IntegrityError as e:
            # failed registration results in going back to the signup page
            return render_template('signup.html', form=form)
        # the users is prompted to login if a successful registration has occurred
        return redirect(url_for('users.login'))
    return render_template('users/signup.html', form=form)


@users_blueprint.route('/login', methods=["GET", "POST"])
@prevent_login_signup
def login():
    form = LoginForm(request.form)
    if request.method == "POST" and form.validate():
        user = User.authenticate(form.data['username'], form.data['password'])
        if user:
            session['user_id'] = user.id
            flash("You've successfully logged in!")
            return redirect(url_for('users.show', id=user.id))
        flash("Invalid credentials. Please try again.")
    return render_template('users/login.html', form=form)


@users_blueprint.route('/logout')
@ensure_authenticated
def logout():
    session.pop('user_id', None)
    flash('You have been signed out.')
    return redirect(url_for('users.login'))


@users_blueprint.route('/welcome')
def welcome():
    return render_template('users/welcome.html')
