from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import DeleteForm, MessageForm
from project.models import Message, User
from project import db
messages_blueprint = Blueprint(
    'messages', __name__, template_folder='templates')

# ROUTES FOR MESSAGES NESTED INSIDE USER
# /users/<int:user_id>/messages

# see all messages for a specfic user


@messages_blueprint.route('/')
def messages_index(user_id):
    # find user
    return render_template('messages/index.html', user=User.query.get(user_id))


# new message for a user render template


@messages_blueprint.route('/new')
def messages_new(user_id):
    message_form = MessageForm()
    return render_template(
        'messages/new.html', user=User.query.get(user_id), form=message_form)


#create a specific message for a specfic user


@messages_blueprint.route('/', methods=["POST"])
def messages_create(user_id):
    message_form = MessageForm(request.form)
    if message_form.validate():
        new_message = Message(
            message=request.form.get('message'), user_id=user_id)
        db.session.add(new_message)
        db.session.commit()
        flash('Creating a New Message!')
        return redirect(url_for('messages.messages_index', user_id=user_id))
    else:
        return render_template(
            'messages/new.html',
            user=User.query.get(user_id),
            form=message_form)


#edit a specific message for a specfic user render template
@messages_blueprint.route('/<int:message_id>/edit')
def messages_edit(user_id, message_id):
    found_message = Message.query.get(message_id)
    found_user = User.query.get(user_id)
    message_form = MessageForm(obj=found_message)
    return render_template(
        'messages/edit.html',
        #don't name varibales same name as parameters dumbo Mark
        user=found_user,
        message=found_message,
        form=message_form)


#show message
@messages_blueprint.route('/<int:message_id>', methods=["GET"])
def messages_show(user_id, message_id):
    return render_template(
        'messages/show.html',
        user=User.query.get(user_id),
        message=Message.query.get(message_id))


#update message on submit after edit
@messages_blueprint.route('/<int:message_id>', methods=["PATCH"])
def messages_update(user_id, message_id):
    message_form = MessageForm(request.form)
    #NEED TO PASS IN FOR THE REDIRECT
    found_user = User.query.get(user_id)
    found_message = Message.query.get(message_id)
    if message_form.validate():
        update_message = Message.query.get(message_id)
        update_message.message = request.form.get('message')
        db.session.add(update_message)
        db.session.commit()
        flash('Updating a Message')
        return redirect(url_for('messages.messages_index', user_id=user_id))
    else:
        return render_template(
            'messages/edit.html',
            user=found_user,
            message=found_message,
            form=message_form)


#delete a specific message for a specfic user
@messages_blueprint.route('/<int:message_id>', methods=["DELETE"])
def messages_destroy(user_id, message_id):
    getMessage = Message.query.get(message_id)
    db.session.delete(getMessage)
    db.session.commit()
    flash('Deleting a Message')
    return redirect(url_for('messages.messages_index', user_id=user_id))
