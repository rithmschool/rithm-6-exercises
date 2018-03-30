################### Imports #########################

from IPython import embed
from flask import Flask, request, redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/flask_sql_alchmey_db2"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.url_map.strict_slashes = False
modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

################### Classes #########################

class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    image_url = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', lazy='dynamic', cascade='all, delete')

    def __init__(self, first_name, last_name, image_url):
        self.first_name = first_name
        self.last_name = last_name
        self.image_url = image_url

class Message(db.Model):

    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __init__(self, content, users_id):
        self.content = content
        self.users_id = users_id

################### Root View Functions #########################

@app.route('/')
def root():
    return redirect(url_for('index_users'))

################### Users View Functions #########################

@app.route('/users', methods=['GET', 'POST'])
def index_users():
    if request.method == 'POST':
        new_user = User(request.form['first_name'], request.form['last_name'], request.form['image_url'])
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('index_users'))
    return render_template('users/index.html', users=User.query.all())

@app.route('/users/new')
def new_users():
    return render_template('users/new.html')

@app.route('/users/<int:user_id>', methods=['GET', 'PATCH', 'DELETE'])
def show_users(user_id):
    found_user = User.query.get(user_id)
    if found_user == None:
        return render_template("404.html")

    if request.method == b'PATCH':
        found_user.first_name = request.form['first_name']
        found_user.last_name = request.form['last_name']
        found_user.image_url = request.form['image_url']
        db.session.add(found_user)
        db.session.commit()
        return redirect(url_for('index_users'))

    if request.method == b'DELETE':
        db.session.delete(found_user)
        db.session.commit()
        return redirect(url_for('index_users'))

    return render_template('users/show.html', user=found_user)

@app.route('/users/<int:user_id>/edit')
def edit_users(user_id):
    found_user = User.query.get(user_id)
    if found_user == None:
        return render_template("404.html")

    return render_template('users/edit.html', user=found_user)

################### Messages View Functions #########################

@app.route('/users/<int:user_id>/messages', methods=['GET', 'POST'])
def index_messages(user_id):
    found_user = User.query.get(user_id)
    if found_user == None:
        return render_template("404.html")

    if request.method == 'POST':
        new_message = Message(request.form['content'], users_id=user_id)
        db.session.add(new_message)
        db.session.commit()
        return redirect(url_for('index_messages', user_id=user_id))
    return render_template('messages/index.html', user=found_user)

@app.route('/users/<int:user_id>/messages/new')
def new_messages(user_id):
    found_user = User.query.get(user_id)
    if found_user == None:
        return render_template("404.html")

    return render_template('messages/new.html', user=found_user)

@app.route('/users/<int:user_id>/messages/<int:message_id>', methods=['GET', 'PATCH', 'DELETE'])
def show_messages(user_id, message_id):
    found_user = User.query.get(user_id)
    found_message = Message.query.get(message_id)
    if found_user == None or found_message == None:
        return render_template("404.html")

    if request.method == b'PATCH':
        found_message.content = request.form['content']
        db.session.add(found_message)
        db.session.commit()
        return redirect(url_for('index_messages', user_id=user_id))

    if request.method == b'DELETE':
        db.session.delete(found_message)
        db.session.commit()
        return redirect(url_for('index_messages', user_id=user_id))

    return render_template('messages/show.html', user=found_user, message=found_message)

@app.route('/users/<int:user_id>/messages/<int:message_id>/edit')
def edit_messages(user_id, message_id):
    found_user = User.query.get(user_id)
    found_message = Message.query.get(message_id)
    if found_user == None or found_message == None:
        return render_template("404.html")

    return render_template('messages/edit.html', user=found_user, message=found_message)

################### 404 View Functions #########################

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True, port=3000)
