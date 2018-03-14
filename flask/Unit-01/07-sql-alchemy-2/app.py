from flask import Flask, request, url_for, render_template, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
from flask_migrate import Migrate

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/users-db"
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
    messages = db.relationship('Message', backref='user', lazy='dynamic')


class Message(db.Model):
    __tablename__ = "messages"
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))


@app.route("/")
def root():
    return redirect(url_for('index'))


@app.route("/users", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        new_user = User(first_name=first_name, last_name=last_name)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('index'))

    return render_template('users/index.html', users=User.query.all())


@app.route("/users/<int:user_id>/messages", methods=['GET', 'POST'])
def messages_index(user_id):
    if request.method == 'POST':
        content = request.form['content']
        new_message = Message(content=content, user_id=user_id)
        db.session.add(new_message)
        db.session.commit()
        return redirect(url_for('messages_index', user_id=user_id))

    return render_template('messages/index.html', user=User.query.get(user_id))


@app.route("/users/new")
def new():
    return render_template('users/new.html')


@app.route("/users/<int:user_id>/messages/new")
def message_new(user_id):
    return render_template('messages/new.html', user=User.query.get(user_id))


@app.route("/users/<int:id>/edit")
def edit(id):
    return render_template('users/edit.html', user=User.query.get(id))


@app.route("/users/<int:user_id>/messages/<int:id>/edit")
def message_edit(user_id, id):
    found_message = Message.query.get(id)
    return render_template('messages/edit.html', messages=found_message)


@app.route("/users/<int:id>", methods=['GET', 'DELETE', 'PATCH'])
def show(id):
    found_user = User.query.get(id)
    if found_user is None:
        return render_template('404.html')
    if request.method == b'PATCH':
        found_user.first_name = request.form['first_name']
        found_user.last_name = request.form['last_name']
        db.session.add(found_user)
        db.session.commit()
        return redirect(url_for('index'))
    if request.method == b'DELETE':
        db.session.delete(found_user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('users/show.html', user=found_user)


@app.route(
    "/users/<int:user_id>/messages/<int:id>",
    methods=['GET', 'DELETE', 'PATCH'])
def message_show(user_id, id):
    found_message = Message.query.get(id)
    if found_message is None:
        return render_template('404.html')
    if request.method == b'PATCH':
        found_message.content = request.form['content']
        db.session.add(found_message)
        db.session.commit()
        return redirect(url_for('messages_index', user_id=user_id))
    if request.method == b'DELETE':
        db.session.delete(found_message)
        db.session.commit()
        return redirect(url_for('messages_index', user_id=user_id))
    return render_template('messages/show.html', messages=found_message)
