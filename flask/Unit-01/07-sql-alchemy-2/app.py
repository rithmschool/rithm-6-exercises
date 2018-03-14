from flask import Flask, request, redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config[
    'SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/users-db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
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

    def __init__(self, content):
        self.content = content


@app.route("/")
def root():
    return redirect(url_for("index"))


@app.route("/users", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        new_user = User(first_name=request.form.get("first_name"),
                        last_name=request.form.get("last_name"))
        db.session.add(new_user)
        db.session.commit()
        # return redirect(url_for("index"))
        return redirect(url_for("index"))
    return render_template("users/index.html", users=User.query.all())


@app.route("/users/new")
def new():
    return render_template("users/new.html")


@app.route("/users/<int:id>/edit", methods=["GET", "PATCH", "DELETE"])
def edit(id):
    found_user = User.query.get(id)
    if request.method == b"PATCH":
        found_user.first_name = request.form.get("first_name")
        found_user.last_name = request.form.get("last_name")
        db.session.add(found_user)
        db.session.commit()
        return redirect(url_for("edit", id=found_user.id))
    if request.method == b"DELETE":
        db.session.delete(found_user)
        db.session.commit()
        return redirect(url_for("index"))
    return render_template("users/edit.html", user=found_user)

#################################################################### messages ########################################


@app.route("/users/<int:id>/messages", methods=["GET", "POST"])
def index_messages(id):
    found_user = User.query.get(id)
    if request.method == "POST":
        new_message = Message(content=request.form.get("content"))
        db.session.add(new_message)
        db.session.commit()
        return redirect(url_for("index_messages", id=found_user.id))
    return render_template("messages/index.html", messages=Message.query.all(), user=found_user)


@app.route("/users/<int:id>/messages/new")
def new_message(id):
    return render_template("messages/new.html", user=User.query.get(id))


@app.route("/users/<int:id>/message/<int:message_id>/edit", methods=["GET", "PATCH", "DELETE"])
def edit_message(id, message_id):
    found_user = User.query.get(id)
    found_message = Message.query.get(message_id)
    if request.method == b"PATCH":
        found_message.content = request.form("content")
        db.session.add(found_message)
        db.session.commit()
        # return render_template("messages/index.html", messages=Message.query.all(), user=User.query.get(id))
        return redirect(url_for("edit_message", id=found_user.id, message_id=found_message.id))
    if request.method == b"DELETE":
        db.session.delete(found_message)
        db.session.commit()
        # return render_template("messages/index.html", messages=Message.query.all(), user=User.query.get(id))
        return redirect(url_for("index_messages", id=found_user.id))
    return render_template("messages/edit.html", messages=Message.query.all(), user=User.query.get(id))
