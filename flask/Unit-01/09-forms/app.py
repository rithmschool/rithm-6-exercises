from flask import Flask, url_for, redirect, request, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from forms import UserForm, MessageForm, DeleteForm
import os

app = Flask(__name__)
app.config[
    'SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/07-sql-alchemy"
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.url_map.strict_slashes = False

modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', lazy='dynamic', cascade='all,delete')

class Message(db.Model):

    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

@app.route('/')
def root():
    return redirect(url_for('index'))

# ############## #
#   USER ROUTES  #
# ############## #

@app.route('/users', methods=["GET", "POST"])
def index():
    delete_form = DeleteForm()
    if request.method == "POST":
        form = UserForm(request.form)
        if form.validate():
            new_user = User(first_name=form.data['first_name'], last_name=form.data['last_name'])
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('index'))
        return render_template('users/new.html', form=form)
    return render_template('users/index.html', users=User.query.all(), delete_form=delete_form)


@app.route('/users/new')
def new():
    form = UserForm()
    return render_template('users/new.html', form=form)


@app.route('/users/<int:id>/edit')
def edit(id):
    found_user = User.query.get_or_404(id)
    form = UserForm(obj=found_user)
    delete_form = DeleteForm(request.form)
    return render_template('users/edit.html', user=found_user, form=form, delete_form=delete_form)


@app.route('/users/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    found_user = User.query.get_or_404(id)
    delete_form = DeleteForm(request.form)
    form = UserForm(request.form)
    if request.method == b"PATCH":
        if form.validate():
            found_user.first_name = form.first_name.data
            found_user.last_name = form.last_name.data
            db.session.add(found_user)
            db.session.commit()
            return redirect(url_for('index'))
        return render_template('users/edit.html', user=found_user, form=form, delete_form=delete_form)
    if request.method == b"DELETE":
        if delete_form.validate():
            db.session.delete(found_user)
            db.session.commit()
            return redirect(url_for('index'))
        return render_template('users/edit.html', user=found_user,form=form,delete_form=delete_form)
    return render_template('users/show.html', user=found_user)

# ############## #
# MESSAGE ROUTES #
# ############## #

@app.route('/users/<int:id>/messages', methods=["GET", "POST"])
def index_message(id):
    found_user = User.query.get_or_404(id)
    form = MessageForm(request.form)
    if request.method == "POST":
        if form.validate():
            new_message = Message(content=form.data['content'], user_id=id)
            db.session.add(new_message)
            db.session.commit()
            return redirect(url_for('index_message', id=id))
        return render_template('messages/new.html', id=id, form=form)
    return render_template('messages/index.html', form=form, user=found_user)


@app.route('/users/<int:id>/messages/new')
def new_message(id):
    form = MessageForm()
    return render_template('messages/new.html', id=id, form=form)


@app.route('/users/<int:id>/messages/<int:message_id>/edit')
def edit_message(id, message_id):
    found_user = User.query.get_or_404(id)
    found_message = Message.query.get(message_id)
    form = MessageForm(obj=found_message)
    delete_form = DeleteForm(request.form)
    return render_template('messages/edit.html', id=id, message_id=message_id, form=form, message=found_message, user=found_user, delete_form=delete_form)


@app.route('/users/<int:id>/messages/<int:message_id>', methods=["GET", "PATCH", "DELETE"])
def show_message(id, message_id):
    found_user = User.query.get_or_404(id)
    found_message = Message.query.get(message_id)
    delete_form = DeleteForm(request.form)
    form = MessageForm(request.form)
    if request.method == b"PATCH":
        if form.validate():
            found_message.content = form.content.data
            db.session.add(found_message)
            db.session.commit()
            return redirect(url_for('index_message', id=id, message_id=message_id))
        return render_template('messages/edit.html', id=id, message_id=message_id, message=found_message, user=found_user, form=form, delete_form=delete_form)
    if request.method == b"DELETE":
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            return redirect(url_for('index_message', id=id))
        return render_template('messages/edit.html', message=found_message, form=form, delete_form=delete_form)
    return render_template('messages/show.html', user=found_user, message=found_message)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
