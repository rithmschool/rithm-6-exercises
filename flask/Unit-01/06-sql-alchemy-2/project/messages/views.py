from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import DeleteForm, MessageForm
from project.models import Message, User, Tag
from project import db
from project.decorators import ensure_authentication, ensure_correct_user

messages_blueprint = Blueprint(
    'messages', __name__, template_folder='templates')

# ROUTES FOR MESSAGES NESTED INSIDE USER
# /users/<int:user_id>/messages

# see all messages for a specfic user


@messages_blueprint.route('/')
@ensure_authentication
def messages_index(user_id):
    # find user
    return render_template('messages/index.html', user=User.query.get(user_id))


# new message for a user render template


@messages_blueprint.route('/new')
@ensure_authentication
def messages_new(user_id):
    message_form = MessageForm()
    message_form.set_choices()
    return render_template(
        'messages/new.html', user=User.query.get(user_id), form=message_form)


#create a specific message for a specfic user


@messages_blueprint.route('/', methods=["POST"])
@ensure_correct_user
def messages_create(user_id):
    get_user = User.query.get(user_id)
    message_form = MessageForm(request.form)
    message_form.set_choices()
    if message_form.validate():
        new_message = Message(message_form.message.data,
                              User.query.get(user_id).id)
        for tag in message_form.tags.data:
            new_message.tags.append(Tag.query.get(tag))
        db.session.add(new_message)
        db.session.commit()
        flash('Creating a New Message!')
        return redirect(
            url_for('messages.messages_index', user_id=get_user.id))
    else:
        return render_template(
            'messages/new.html',
            user=User.query.get(user_id),
            form=message_form)


#edit a specific message for a specfic user render template
@messages_blueprint.route('/<int:message_id>/edit')
@ensure_authentication
def messages_edit(user_id, message_id):
    found_message = Message.query.get(message_id)
    tags = [tag.id for tag in found_message.tags]
    message_form = MessageForm(tags=tags)
    message_form.set_choices()
    message_form.message.data = found_message.message
    return render_template(
        'messages/edit.html',
        user=User.query.get(user_id),
        message=found_message,
        form=message_form)


#show message
@messages_blueprint.route('/<int:message_id>', methods=["GET"])
@ensure_authentication
@ensure_correct_user
def messages_show(user_id, message_id):
    found_message = Message.query.get(message_id)
    message_tags = [tag.text for tag in found_message.tags]
    return render_template(
        'messages/show.html',
        user=User.query.get(user_id),
        message=found_message,
        tags=message_tags)


#update message on submit after edit
@messages_blueprint.route('/<int:message_id>', methods=["PATCH"])
@ensure_authentication
@ensure_correct_user
def messages_update(user_id, message_id):
    message_form = MessageForm(request.form)
    message_form.set_choices()
    found_message = Message.query.get(message_id)
    if message_form.validate():
        found_message.message = request.form.get('message')
        found_message.tags = []
        for tag in message_form.tags.data:
            found_message.tags.append(Tag.query.get(tag))
        db.session.add(found_message)
        db.session.commit()
        flash('Updated a Message')
        return redirect(
            url_for('messages.messages_index', user_id=found_message.user.id))
    else:
        return render_template(
            'messages/edit.html',
            user=User.query.get(user_id),
            message=found_message,
            form=message_form)


#delete a specific message for a specfic user
@messages_blueprint.route('/<int:message_id>', methods=["DELETE"])
@ensure_authentication
@ensure_correct_user
def messages_destroy(user_id, message_id):
    message_delete = Message.query.get(message_id)
    delete_form = DeleteForm(request.form)
    db.session.delete(message_delete)
    db.session.commit()
    flash('Deleting a Message')
    return redirect(url_for('messages.messages_index', user_id=user_id))
