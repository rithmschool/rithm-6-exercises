from flask import Flask, url_for, redirect, request, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from forms import UserForm, MessageForm, DeleteForm
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/07-sql-alchemy'
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

class User(db.Model):
    
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    image_url = db.Column(db.Text)
    messages = db.relationship('Message', backref = 'user', lazy = 'dynamic', cascade='all, delete')

class Message(db.Model):

    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.errorhandler(404)
def error(e):
    return render_template('404.html'), 404

#  USER ROUTES
@app.route('/users', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        form = UserForm(request.form)
        if form.validate():
            first_name = form.data['first_name']
            last_name = form.data['last_name']
            image_url = form.data['image_url']
            new_user = User(first_name = first_name, last_name = last_name, image_url = image_url)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('index'))
        return render_template('users/new.html', form = form)
    return render_template('users/index.html', users = User.query.all())

@app.route('/users/new')
def new():
    form = UserForm()
    return render_template('users/new.html', form = form)

@app.route('/users/<int:id>/edit')
def edit(id):
    user_form = UserForm(obj = User.query.get_or_404(id))
    delete_form = DeleteForm(obj = User.query.get_or_404(id))
    return render_template('users/edit.html', user = User.query.get_or_404(id), user_form = user_form, delete_form = delete_form)

@app.route('/users/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id):
    found_user = User.query.get_or_404(id)
    if request.method == b'PATCH':
        form = UserForm(request.form)
        if form.validate():
            found_user.first_name = request.form.get('first_name')
            found_user.last_name = request.form.get('last_name')
            found_user.image_url = request.form.get('image_url')
            db.session.add(found_user)
            db.session.commit()
            return redirect(url_for('show', id = id))
        return render_template('users/edit.html', user = User.query.get_or_404(id), form = form)
    if request.method == b'DELETE':
        form = DeleteForm(request.form)
        if form.validate():
            db.session.delete(found_user)
            db.session.commit()
            return redirect(url_for('index'))
    return render_template('users/show.html', user = found_user)

#  MESSAGE ROUTES
@app.route('/users/<int:id>/messages', methods=['GET', 'POST'])
def index_messages(id):
    if request.method == 'POST':
        form = MessageForm()
        if form.validate():
            content = form.data['content']
            new_message = Message(content = content, user_id = id)
            db.session.add(new_message)
            db.session.commit()
            return redirect(url_for('index_messages', id = id))
        return render_template('messages/new.html', id = id, form = form)
    return render_template('messages/index.html', user = User.query.get_or_404(id))

@app.route('/users/<int:id>/messages/new')
def new_messages(id):
    form = MessageForm()
    return render_template('messages/new.html', id = id, form = form)

@app.route('/users/<int:id>/messages/<int:message_id>/edit')
def edit_messages(id, message_id):
    message_form = MessageForm(obj = Message.query.get_or_404(message_id))
    delete_form = DeleteForm(obj = Message.query.get_or_404(message_id))
    return render_template('messages/edit.html', id = id, message = Message.query.get_or_404(message_id), message_form = message_form, delete_form = delete_form)

@app.route('/users/<int:id>/messages/<int:message_id>', methods=['GET', 'PATCH', 'DELETE'])
def show_messages(id, message_id):
    found_user = User.query.get_or_404(id)
    found_message = Message.query.get_or_404(message_id)
    if request.method == b'PATCH':
        form = MessageForm(request.form)
        if form.validate():
            found_message.content = form.data['content']
            db.session.add(found_message)
            db.session.commit()
            return redirect(url_for('show_messages', id = id, message_id = message_id))
        return render_template('messages/edit.html', id = id, message = found_message, form = form)
    if request.method == b'DELETE':
        message_form = MessageForm(obj = request.form)
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            return redirect(url_for('index_messages', id = id))
    return render_template('messages/show.html', user = found_user, message = found_message)