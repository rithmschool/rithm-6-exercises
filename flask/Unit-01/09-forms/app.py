################### Imports #########################

from IPython import embed
from flask import Flask, request, redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from forms import UserForm, MessageForm, DeleteForm
from os import environ

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/flask_sql_alchmey_db2"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = environ.get('SECRET_KEY')
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
    '''Returns listing of all users.'''

    return redirect(url_for('index_users'))

################### Users View Functions #########################

@app.route('/users', methods=['GET', 'POST'])
def index_users():
    ''''''

    if request.method == 'POST':
        user_form = UserForm(request.form)
        if user_form.validate():
            new_user = User(request.form['first_name'], request.form['last_name'], request.form['image_url'])
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('index_users'))
        else:
            return render_template('users/new.html', form=user_form)

    delete_form = DeleteForm()
    return render_template('users/index.html', users=User.query.all(), delete_form=delete_form)

@app.route('/users/new')
def new_users():
    '''Creates a new user'''

    user_form = UserForm()
    return render_template('users/new.html', form=user_form)

@app.route('/users/<int:user_id>', methods=['GET', 'PATCH', 'DELETE'])
def show_users(user_id):
    ''''''

    found_user = User.query.get(user_id)
    if found_user == None:
        return render_template("404.html")

    delete_form = DeleteForm()

    if request.method == b'PATCH':
        user_form = UserForm(request.form)
        if user_form.validate():
            found_user.first_name = user_form.first_name.data
            found_user.last_name = user_form.last_name.data
            found_user.image_url = user_form.image_url.data
            db.session.add(found_user)
            db.session.commit()
            return redirect(url_for('index_users'))
        return render_template('users/edit.html', user=found_user, form=user_form, delete_form=delete_form)

    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
        return redirect(url_for('index_users'))

    return render_template('users/show.html', user=found_user, delete_form=delete_form)

@app.route('/users/<int:user_id>/edit')
def edit_users(user_id):
    ''''''

    found_user = User.query.get(user_id)
    if found_user == None:
        return render_template("404.html")

    delete_form = DeleteForm()
    user_form = UserForm(obj=found_user)
    return render_template('users/edit.html', user=found_user, form=user_form, delete_form=delete_form)

################### Messages View Functions #########################

@app.route('/users/<int:user_id>/messages', methods=['GET', 'POST'])
def index_messages(user_id):
    '''Create a new message'''

    found_user = User.query.get(user_id)
    if found_user == None:
        return render_template("404.html")

    if request.method == 'POST':
        message_form = MessageForm(request.form)
        if message_form.validate():
            new_message = Message(request.form['content'], users_id=user_id)
            db.session.add(new_message)
            db.session.commit()
            return redirect(url_for('index_messages', user_id=user_id))
        else:
            return render_template('messages/new.html', user=found_user, form=message_form)

    delete_form = DeleteForm()
    return render_template('messages/index.html', user=found_user, delete_form=delete_form)

@app.route('/users/<int:user_id>/messages/new')
def new_messages(user_id):
    '''Creates a new message'''

    found_user = User.query.get(user_id)
    if found_user == None:
        return render_template("404.html")

    message_form = MessageForm()
    return render_template('messages/new.html', user=found_user, form=message_form)

@app.route('/users/<int:user_id>/messages/<int:message_id>', methods=['GET', 'PATCH', 'DELETE'])
def show_messages(user_id, message_id):
    ''''''

    found_user = User.query.get(user_id)
    found_message = Message.query.get(message_id)
    if found_user == None or found_message == None:
        return render_template("404.html")

    delete_form = DeleteForm()

    if request.method == b'PATCH':
        message_form = MessageForm(request.form)
        if message_form.validate():
            found_message.content = message_form.content.data
            db.session.add(found_message)
            db.session.commit()
            return redirect(url_for('index_messages', user_id=user_id))
        return render_template('messages/edit.html', user=found_user, message=found_message, form=message_form, delete_form=delete_form)

    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
        return redirect(url_for('index_messages', user_id=user_id))

    return render_template('messages/show.html', user=found_user, message=found_message, delete_form=delete_form)

@app.route('/users/<int:user_id>/messages/<int:message_id>/edit')
def edit_messages(user_id, message_id):
    ''''''

    found_user = User.query.get(user_id)
    found_message = Message.query.get(message_id)
    if found_user == None or found_message == None:
        return render_template("404.html")

    delete_form = DeleteForm()
    message_form = MessageForm(obj=found_message)
    return render_template('messages/edit.html', user=found_user, message=found_message, form=message_form, delete_form=delete_form)

################### 404 View Functions #########################

@app.errorhandler(404)
def page_not_found(e):
    '''400 Error Page'''

    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True, port=3000)
