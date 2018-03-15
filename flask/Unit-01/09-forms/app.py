from flask import Flask, request, redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from form import UserForm, MessageForm, DeleteForm
import os

app = Flask(__name__)
app.config[
    'SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/users-db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = os.environ.get("SECRET_KEY")
print(os.environ.get('SECRET_KEY'))
modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)


class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    message = db.relationship("Message", backref="user", lazy="dynamic")

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


class Message(db.Model):

    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    message_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    def __init__(self, content, message_id):
        self.content = content
        self.message_id = message_id


@app.route("/")
def root():
    return redirect(url_for("index"))


@app.route("/users", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        form = UserForm(request.form)
        if form.validate():
            new_user = User(
                first_name=form.data["first_name"],
                last_name=form.data["last_name"])
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for("index", form=form))
        return render_template("users/new.html", form=form)
    return render_template("users/index.html", users=User.query.all())


@app.route("/users/new")
def new():
    user_form = UserForm()
    return render_template("users/new.html", form=user_form)


@app.route("/users/<int:id>", methods=["GET", "PATCH", "DELETE"])
def show(id):
    found_user = User.query.get(id)
    form = UserForm(obj=found_user)
    if request.method == b"PATCH":
        if form.validate():
            found_user.first_name = form.data["first_name"]
            found_user.last_name = form.data["last_name"]
            db.session.add(found_user)
            db.session.commit()
            return redirect(url_for("edit", id=found_user.id, form=form))
        return render_template("users/edit.html", user=found_user, form=form, delete_form=delete_form)
    if request.method == b"DELETE":
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
            return redirect(url_for("index"))
        return render_template("users/edit.html", user=found_user, form=form, delete_form=delete_form)
    return render_template("users/show.html", user=found_user)


@app.route("/users/<int:id>/edit")
def edit(id):
    found_user = User.query.get(id)
    form = UserForm(obj=found_user)
    delete_form = DeleteForm()
    return render_template("users/edit.html", user=found_user, form=form, delete_form=delete_form)

#################################################################### messages ########################################


@app.route("/users/<int:id>/messages", methods=["GET", "POST"])
def index_messages(id):
    found_user = User.query.get(id)
    if request.method == "POST":
        form = MessageForm(request.form)
        if form.validate():
            new_message = Message(content=form.data["content"],
                                  message_id=id)
            db.session.add(new_message)
            db.session.commit()
            return redirect(url_for("index_messages", id=found_user.id, form=form))
        return render_template("messages/new.html", id=found_user.id, form=form)
    return render_template("messages/index.html", user=found_user)


@app.route("/users/<int:id>/messages/new")
def new_message(id):
    form = MessageForm(request.form)
    return render_template("messages/new.html", id=id, form=form)


@app.route("/users/<int:id>/messages/<int:message_id>", methods=["GET", "PATCH", "DELETE"])
def show_message(id, message_id):
    found_user = User.query.get(id)
    found_message = Message.query.get(message_id)
    form = MessageForm(obj=found_message)
    if request.method == b"PATCH":
        if form.validate():
            found_message.content = form.data["content"]
            db.session.add(found_message)
            db.session.commit()
            return redirect(url_for("edit_message", id=found_user.id, message_id=found_message.id))
        return render_template("messages/edit.html", user=found_user, message=found_message, form=form)
    if request.method == b"DELETE":
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            return redirect(url_for("index_messages", id=found_user.id))
        return render_template("messages/edit.html", message=found_message, user=User.query.get(id), form=form, delete_form=delete_form)
    return render_template("messages/show.html", user=found_user, message=found_message)


@app.route("/users/<int:id>/messages/<int:message_id>/edit")
def edit_message(id, message_id):
    found_user = User.query.get(id)
    found_message = Message.query.get(message_id)
    form = MessageForm(obj=found_message)
    delete_form = DeleteForm()
    return render_template("messages/edit.html", message=found_message, user=User.query.get(id), form=form, delete_form=delete_form)
