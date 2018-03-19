from flask import Flask, request, redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators
from forms import UsersForm, MessagesForm, DeleteForm
import os


app = Flask(__name__)
if os.environ.get('ENV') == 'production':
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    app.config['DEBUG'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/user-messages'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_ECHO'] = True
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    messages = db.relationship('Message', backref='user',
                               lazy='dynamic')

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def __repr__(self):
        return f"User: {self.first_name} {self.last_name}"


class Message(db.Model):
    __tablename__ = "messages"
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __init__(self, content, user_id):
        self.content = content
        self.user_id = user_id


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/users', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        form = UsersForm(request.form)
        if form.validate():
            new_user = User(
                first_name=request.form['first_name'],
                last_name=request.form['last_name'])
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('index'))
        return render_template('users/new.html', form=form)
    return render_template('users/index.html', users=User.query.all())


@app.route('/users/<int:user_id>/messages', methods=['GET', 'POST'])
def message_index(user_id):
    delete_form = DeleteForm()
    form = MessagesForm()
    if request.method == "POST":
        if form.validate():
            new_message = Message(
                content=request.form['content'], user_id=user_id)
            db.session.add(new_message)
            db.session.commit()
            return redirect(url_for('message_index', user_id=user_id))
        return render_template('messages/new.html', form=form, user_id=user_id)
    return render_template('messages/index.html', user=User.query.get(user_id),
                           delete_form=delete_form
                           )


@app.route('/users/new')
def new():
    form = UsersForm()
    return render_template('users/new.html', form=form)


@app.route('/users/<int:user_id>/messages/new/')
def new_message(user_id):
    form = MessagesForm()
    found_user = User.query.get_or_404(user_id)
    return render_template('messages/new.html', user_id=user_id, form=form)


@app.route('/users/<int:user_id>', methods=["GET", "PATCH", "DELETE"])
def show(user_id):
    found_user = User.query.get(user_id)
    delete_form = DeleteForm()
    if request.method == b"PATCH":
        form = UsersForm(request.form)
        if form.validate():
            found_user.first_name = request.form['first_name']
            found_user.last_name = request.form['last_name']
            db.session.add(found_user)
            db.session.commit()
            return redirect(url_for('index'))
        return render_template('users/edit.html', user=found_user, form=form)
    if request.method == b"DELETE":
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
            return redirect(url_for('index'))
    return render_template('users/show.html', user=found_user,
                           delete_form=delete_form)


@app.route("/users/<int:user_id>/edit")
def edit(user_id):
    found_user = User.query.get_or_404(user_id)
    form = UsersForm(obj=found_user)
    return render_template("users/edit.html", user=found_user, form=form)


@app.route('/users/<int:user_id>/messages/<int:message_id>/edit')
def edit_message(message_id, user_id):
    found_message = Message.query.get_or_404(message_id)
    found_user = User.query.get_or_404(user_id)
    form = MessagesForm(obj=found_message)
    return render_template('messages/edit.html', message=found_message, user=found_user, form=form)


@app.route(
    '/users/<int:user_id>/messages/<int:message_id>',
    methods=['GET', 'PATCH', 'DELETE'])
def show_message(user_id, message_id):
    delete_form = DeleteForm()
    found_message = Message.query.get_or_404(message_id)
    found_user = User.query.get_or_404(user_id)
    if request.method == b'PATCH':
        form = MessagesForm(request.form)
        if form.validate():
            found_message.content = request.form['content']
            db.session.add(found_message)
            db.session.commit()
            return redirect(url_for('message_index', user_id=user_id))
        return render_template('messages/edit.html', message=found_message, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            return redirect(url_for('index'))
    return render_template('messages/show.html', message_id=found_message.id, user=found_user, found_message=found_message, delete_form=delete_form)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html')


if __name__ == '__main__':
    app.run(port=3000)
