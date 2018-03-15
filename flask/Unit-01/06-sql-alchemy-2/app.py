from flask import Flask, request, redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from forms import UserForm, MessageForm, DeleteForm
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/troll'
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
    # db.relationship allows association from one Model to another
    messages = db.relationship('Message', backref='user', lazy='dynamic')

    # find a specific user
    # access that users messages by user.messages - One user can write many messages
    # find a specific message
    # access message.user - One message can only belong to one user


class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.Text)
    #users refers to table users and we want to get id
    #foreign key refer to a table and a column in that table hence user table column id
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))


#user routes
@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/users')
def index():
    return render_template('user/index.html', users=User.query.all())


@app.route('/users/new')
def new():
    user_form = UserForm()
    return render_template('user/new.html', form=user_form)


@app.route('/users', methods=['POST'])
def create():
    user_form = UserForm(request.form)
    #if form is validate commit if not take info and render template
    if user_form.validate():
        user = User(
            first_name=request.form.get('first_name'),
            last_name=request.form.get('last_name'))
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('index'))
    else:
        return render_template('user/new.html', form=user_form)


@app.route('/users/<int:id>')
def show(id):
    delete_form = DeleteForm()
    found_user = User.query.get(id)
    return render_template('user/show.html', user=found_user, delete_form=delete_form)


@app.route('/users/<int:id>/edit')
def edit(id):
    found_user = User.query.get(id)
    #obj=found_user prepopulates the edit form
    user_form = UserForm(obj=found_user)
    return render_template('user/edit.html', user=found_user, form=user_form)


@app.route('/users/<int:id>', methods=['PATCH'])
def update(id):
    user_form = UserForm(request.form)
    if user_form.validate():
        found_user = User.query.get(id)
        found_user.first_name = request.form.get('first_name')
        found_user.last_name = request.form.get('last_name')
        db.session.add(found_user)
        db.session.commit()
        return redirect(url_for('index'))
    else:
        return render_template('user/edit.html', user=found_user, form=user_form)

@app.route('/users/<int:id>', methods=['DELETE'])
def destroy(id):
    delete_form = DeleteForm(request.form)
    if delete_form.validate():
        found_user = User.query.get(id)
        db.session.delete(found_user)
        db.session.commit()
        return redirect(url_for('index'))
    else:
        return render_template('user/show.html', user=found_user, delete_form=delete_form)


# ROUTES FOR MESSAGES NESTED INSIDE USER
# /users/<int:user_id>/messages

# see all messages for a specfic user


@app.route('/users/<int:user_id>/messages')
def messages_index(user_id):
    # find user
    return render_template('message/index.html', user=User.query.get(user_id))


# new message for a user render template


@app.route('/users/<int:user_id>/messages/new')
def messages_new(user_id):
    message_form = MessageForm()
    return render_template('message/new.html', user=User.query.get(user_id), form=message_form)


#create a specific message for a specfic user


@app.route('/users/<int:user_id>/messages', methods=["POST"])
def messages_create(user_id):
    message_form = MessageForm(request.form)
    if message_form.validate():
        new_message = Message(message=request.form.get('message'), user_id=user_id)
        db.session.add(new_message)
        db.session.commit()
        return redirect(url_for('messages_index', user_id=user_id))
    else:
        return render_template('message/new.html', user=User.query.get(user_id), form=message_form)


#edit a specific message for a specfic user render template
@app.route('/users/<int:user_id>/messages/<int:message_id>/edit')
def messages_edit(user_id, message_id):
    found_message = Message.query.get(message_id)
    found_user = User.query.get(user_id)
    message_form = MessageForm(obj=found_message)
    return render_template(
        'message/edit.html',
        #don't name varibales same name as parameters dumbo Mark
        user=found_user,
        message=found_message, form=message_form)


#show message
@app.route('/users/<int:user_id>/messages/<int:message_id>', methods=["GET"])
def messages_show(user_id, message_id):
    return render_template('message/show.html', user=User.query.get(user_id), message=Message.query.get(message_id))

#update message on submit after edit
@app.route('/users/<int:user_id>/messages/<int:message_id>', methods=["PATCH"])
def messages_update(user_id, message_id):
    message_form=MessageForm(request.form)
    #NEED TO PASS IN FOR THE REDIRECT
    found_user = User.query.get(user_id)
    found_message = Message.query.get(message_id)
    if message_form.validate():
        update_message = Message.query.get(message_id)
        update_message.message = request.form.get('message')
        db.session.add(update_message)
        db.session.commit()
        return redirect(url_for('messages_index', user_id=user_id))
    else:
        return render_template('message/edit.html', user=found_user, message=found_message, form=message_form)

#delete a specific message for a specfic user
@app.route('/users/<int:user_id>/messages/<int:message_id>', methods=["DELETE"])
def messages_destroy(user_id, message_id):
    getMessage = Message.query.get(message_id)
    db.session.delete(getMessage)
    db.session.commit()
    return redirect(url_for('messages_index', user_id=user_id))


@app.errorhandler(404)
def page_not_found(e):
    return render_template('user/404.html'), 404

# Mistakes
# dont name variables the same name as parameters or things will be undefined
# dont forget redirect or render_template after return

