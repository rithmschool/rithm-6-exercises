from flask import Flask, request,redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config[
    'SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/usersdb"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
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
        new_user = User(request.form['first_name'],
                              request.form['last_name'])
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template("users/index.html", users = User.query.all())

@app.route("/users/new")
def users_new():
    return render_template("users/new.html")

@app.route("/users/<int:id>", methods = ["GET", "PATCH"])
def users_show(id):
    found_user = User.query.get(id)
    if request.method == b'PATCH':
        found_user.first_name = request.form['first_name']
        found_user.last_name = request.form['last_name']
        db.session.add(found_user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template("users/show.html", user = found_user)

@app.route("/users/<int:id>/edit", methods = ["GET", "DELETE"])
def users_edit(id):
    found_user = User.query.get(id)
    if request.method == b"DELETE":
        db.session.delete(found_user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template("users/edit.html", user = found_user)



@app.route("/users/<int:id>/messages", methods = ["GET", "POST"])
def messages_index(id):
    found_user = User.query.get(id)

    if request.method == "POST":
        new_message = Message(content = request.form["content"],user_id = id)
        from IPython import embed; embed()
        db.session.add(new_message)
        db.session.commit()
        return redirect(url_for("messages_index", id = id))
    return render_template("messages/index.html", user = found_user)

@app.route("/users/<int:id>/messages/new")
def messages_new(id):
    return render_template("messages/new.html", id = id)

@app.route("/users/<int:id>/messages/<int:message_id>")
def message_show(id,message_id):
    found_message = Message.query.get(message_id)
    return render_template("messages/show.html",message = found_message)

@app.route("/users/<int:id>/messages/<int:message_id>/edit", methods = ["GET", "PATCH", "DELETE"])
def message_edit(id,message_id):
    found_user = User.query.get(id)
    found_message = Message.query.get(message_id)
    message_list = Message.query.all()

    if request.method == b"DELETE":
        db.session.delete(found_message)
        db.session.commit()
        return redirect(url_for('messages_index', id = found_user.id))
    elif request.method == b"PATCH":
        found_message.content = request.form["content"] 
        db.session.add(found_message)
        db.session.commit()
        return redirect(url_for("messages_index", id = id))
    
    found_message = Message.query.get(message_id)
    return render_template("messages/edit.html",user = found_user,message = found_message)