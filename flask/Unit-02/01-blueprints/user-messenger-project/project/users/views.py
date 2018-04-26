from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.users.forms import UserForm, UserLogin, DeleteForm
from project import db
from project.models import Message, User

users_blueprint = Blueprint(
    'users',
    __name__,
    template_folder = 'templates'
)



@users_blueprint.route("/welcome")
def welcome():
    return render_template("/users/welcome.html")

@users_blueprint.route("/signup", methods = ["GET", "POST"])
def signup():
    form = UserForm(request.form)
    login_form = UserLogin(request.form)
    if request.method == "POST" and form.validate():
        first_name = request.form.get("first_name")
        last_name = request.form.get("last_name")
        password = request.form.get("password")
        User.register(first_name, last_name, password)
        return redirect(url_for('users.login'))
    else:
        return render_template("/users/register.html", form = form)

@users_blueprint.route("/login", methods = ["POST", "GET"])
def login():
    form = UserLogin(request.form)
    if request.method == "POST" and form.validate():
        first_name = request.form.get("first_name")
        last_name =  request.form.get("last_name")
        password = request.form.get("password")
        user = User.authenticate(first_name, last_name, password)
        delete_form = DeleteForm(request.form)
        return render_template("/users/show.html", user = user, delete_form = delete_form)
    else:
        return render_template("/users/login.html", form = form)




@users_blueprint.route("/", methods = ["GET", "POST"])
def index():
    if request.method == "POST":
        form = UserForm(request.form)
        if form.validate():
            new_user = User(request.form['first_name'],
                              request.form['last_name'])
            db.session.add(new_user)
            db.session.commit()
            flash('User Created!')
            return redirect(url_for('users.index'))
        else:
            return render_template("users/new.html", form = form)
    return render_template("users/index.html", users = User.query.all())

@users_blueprint.route("/new")
def new():
    user_form = UserForm()
    return render_template("/users/new.html", form = user_form)

@users_blueprint.route("/<int:id>", methods = ["GET", "PATCH","DELETE"])
def show(id):
    form = UserForm()
    delete_form = DeleteForm(request.form)

    found_user = User.query.get(id)
    if request.method == b'PATCH':
        if form.validate():
            found_user.first_name = request.form['first_name']
            found_user.last_name = request.form['last_name']
            db.session.add(found_user)
            db.session.commit()
            return redirect(url_for('users.index'))
        return render_template('/users/edit.html', user = found_user, form = form)

    if request.method == b"DELETE":
        db.session.delete(found_user)
        db.session.commit()
        return redirect(url_for('users.welcome'))
    return render_template("users/show.html", user = found_user, delete_form = delete_form)

@users_blueprint.route("/<int:id>/edit", methods = ["GET"])
def edit(id):
    found_user = User.query.get(id)
    form = UserForm(obj = found_user)
    return render_template("/users/edit.html", user = found_user, form = form)