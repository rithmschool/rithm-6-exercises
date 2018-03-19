from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.users.forms import UserForm, DeleteForm
from project.models import User
from project import db

users_blueprint = Blueprint(
    'users',
    __name__,
    template_folder='templates'
)


@users_blueprint.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        form = UserForm(request.form)
        if form.validate():
            new_user = User(
                first_name=form.data["first_name"],
                last_name=form.data["last_name"])
            db.session.add(new_user)
            db.session.commit()
            flash("User Created!")
            return redirect(url_for("users.index", form=form))
        return render_template("users/new.html", form=form)
    return render_template("users/index.html", users=User.query.all())


@users_blueprint.route("/new")
def new():
    user_form = UserForm()
    return render_template("users/new.html", form=user_form)


@users_blueprint.route("/<int:id>", methods=["GET", "PATCH", "DELETE"])
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
def edit(id):
    found_user = User.query.get(id)
    form = UserForm(request.form)
    delete_form = DeleteForm()
    return render_template("users/edit.html", user=found_user, form=form, delete_form=delete_form)
