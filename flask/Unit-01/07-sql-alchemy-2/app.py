from flask import Flask, request,redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from forms import UserForm, MessageForm
import os
app = Flask(__name__)
app.config[
    'SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/usersdb"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    messages = db.relationship('Message', backref = 'user', lazy = 'dynamic')

    def __init__(self,first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
    
class Message(db.Model):
    __tablename__ = "messages"

    
    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))


@app.route("/")
def root():
    return redirect(url_for("index"))


@app.route("/users", methods = ["GET", "POST"])
def index():
    if request.method == "POST":
        form = UserForm(request.form)
        if form.validate():
            new_user = User(request.form['first_name'],
                              request.form['last_name'])
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('index'))
        else:
            return render_template("/users/new.html", form = form)
    return render_template("users/index.html", users = User.query.all())

@app.route("/users/new")
def users_new():
    user_form = UserForm()
    return render_template("users/new.html", form = user_form)

@app.route("/users/<int:id>", methods = ["GET", "PATCH","DELETE"])
def users_show(id):
    form = UserForm()
    found_user = User.query.get(id)
    if request.method == b'PATCH':
        found_user.first_name = request.form['first_name']
        found_user.last_name = request.form['last_name']
        db.session.add(found_user)
        db.session.commit()
        return redirect(url_for('index'))
    elif request.method == b"DELETE":
        db.session.delete(found_user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template("users/show.html", user = found_user, form = form)

@app.route("/users/<int:id>/edit", methods = ["GET"])
def users_edit(id):
    found_user = User.query.get(id)
    
    return render_template("users/edit.html", user = found_user)



@app.route("/users/<int:id>/messages", methods = ["GET", "POST"])
def messages_index(id):
    found_user = User.query.get(id)

    if request.method == "POST":
        form = MessageForm(request.form)
        if form.validate():
            new_message = Message(content = request.form["content"],user_id = id)
            db.session.add(new_message)
            db.session.commit()
            return redirect(url_for("messages_index", id = id))
        else:
            return render_template("messages/new.html", form = form)
    return render_template("/messages/index.html", user = found_user)

@app.route("/users/<int:id>/messages/new")
def messages_new(id):
    form = MessageForm()
    return render_template("messages/new.html", id = id, form = form)

@app.route("/users/<int:id>/messages/<int:message_id>", methods = ["GET", "PATCH", "DELETE"])
def message_show(id,message_id):
    found_message = Message.query.get(message_id)
    form = MessageForm()
    if request.method == b"DELETE":
        db.session.delete(found_message)
        db.session.commit()
        return redirect(url_for('messages_index', id = id))
    elif request.method == b"PATCH":
        found_message.content = request.form["content"] 
        db.session.add(found_message)
        db.session.commit()
        return redirect(url_for("messages_index", id = id))
    return render_template("messages/show.html",message = found_message, form = form)

@app.route("/users/<int:id>/messages/<int:message_id>/edit", methods = ["GET"])
def message_edit(id,message_id):
    found_user = User.query.get(id)
    found_message = Message.query.get(message_id)
    message_list = Message.query.all()
    form = MessageForm(obj = found_message)
    return render_template("messages/edit.html",user = found_user,message = found_message, form = form)