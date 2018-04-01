from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import MessageForm, DeleteForm
from project.models import Message, User, Tag
from project import db

messages_blueprint = Blueprint('messages', __name__, template_folder='templates')

################### Messages View Functions #########################

@messages_blueprint.route('/', methods=['GET', 'POST'])
def user_index_messages(user_id):
    '''Create a new message'''

    found_user = User.query.get_or_404(user_id)

    if request.method == 'POST':
        message_form = MessageForm(request.form)
        message_form.set_choices()

        if message_form.validate():
            new_message = Message(request.form['content'], users_id=user_id)
            for tag in message_form.tags.data:
                new_message.tags.append(Tag.query.get(tag))

            db.session.add(new_message)
            db.session.commit()
            flash('Message Created!')
            return redirect(url_for('messages.user_index_messages', user_id=user_id))

        else:
            return render_template('messages/new.html', user=found_user, form=message_form)

    delete_form = DeleteForm()
    return render_template('messages/index.html', user=found_user, delete_form=delete_form)

@messages_blueprint.route('/new')
def new_messages(user_id):
    '''Creates a new message'''

    found_user = User.query.get_or_404(user_id)
    message_form = MessageForm()
    message_form.set_choices()
    return render_template('messages/new.html', user=found_user, form=message_form)

@messages_blueprint.route('/<int:message_id>', methods=['GET', 'PATCH', 'DELETE'])
def show_messages(user_id, message_id):
    ''''''

    found_user = User.query.get_or_404(user_id)
    found_message = Message.query.get_or_404(message_id)

    delete_form = DeleteForm()

    if request.method == b'PATCH':
        message_form = MessageForm(request.form)
        message_form.set_choices()

        if message_form.validate():
            found_message.content = message_form.content.data
            found_message.tags = [Tag.query.get(tag) for tag in message_form.tags.data]

            db.session.add(found_message)
            db.session.commit()
            flash('Message Updated!')
            return redirect(url_for('messages.user_index_messages', user_id=user_id))
        return render_template('messages/edit.html', user=found_user, message=found_message, form=message_form, delete_form=delete_form)

    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            flash('Message Deleted!')
        return redirect(url_for('messages.user_index_messages', user_id=user_id))

    message_tags = [tag.content for tag in found_message.tags]
    return render_template('messages/show.html', user=found_user, message=found_message, tags=message_tags, delete_form=delete_form)

@messages_blueprint.route('/<int:message_id>/edit')
def edit_messages(user_id, message_id):
    '''Edit Messages'''

    found_user = User.query.get_or_404(user_id)
    found_message = Message.query.get_or_404(message_id)
    delete_form = DeleteForm()

    tags = [tag.id for tag in found_message.tags]
    message_form = MessageForm(content=found_message.content, tags=tags)
    message_form.set_choices()
    return render_template('messages/edit.html', user=found_user, message=found_message, form=message_form, delete_form=delete_form)
