from flask import redirect, render_template, request, url_for, flash, Blueprint, session, g
from project.messages.forms import DeleteForm, MessageForm
from project.tags.forms import NewTagForm
from project.models import Message, User, Tag
from project import db
from project.decorators import ensure_logged_in, prevent_login_signup, ensure_correct_user

messages_blueprint = Blueprint(
    'messages', __name__, template_folder='templates')


@messages_blueprint.route('/', methods=["POST"])
def index(user_id):
    if request.method == 'POST':
        message_form = MessageForm(request.form)
        message_form.set_choices()
        if message_form.validate():
            content = message_form.content.data
            tag_ids = message_form.tags.data  # [1, 2, 3]   <- ids of tags
            new_message = Message(content, user_id)
            new_tags = [Tag.query.get(id)
                        for id in tag_ids]  # [<Tag 1>, <Tag 2>]
            new_message.tags.extend(new_tags)
            # when you do this in edit, you need to clear the current tags first
            db.session.add(new_message)
            db.session.commit()
            flash('Message added')
            return redirect(url_for('users.show', user_id=user_id))
        else:
            return render_template(
                './messages/new.html', message_form=message_form)


@messages_blueprint.route('/new')
@ensure_correct_user
def new(user_id):
    message_form = MessageForm()
    message_form.set_choices()
    return render_template(
        'messages/new.html', user_id=user_id, message_form=message_form)


@messages_blueprint.route(
    '/messages/<int:message_id>', methods=["PATCH", "DELETE"])
@ensure_correct_user
def show(message_id, user_id):
    target_message = Message.query.get(message_id)
    if request.method == b'PATCH':
        message_form = MessageForm(request.form)
        message_form.set_choices()
        if message_form.validate():
            target_message.content = request.form.get('content')
            tag_ids = message_form.tags.data  # [1, 2, 3]   <- ids of tags
            new_tags = [Tag.query.get(id)
                        for id in tag_ids]  # [<Tag 1>, <Tag 2>]
            target_message.tags = new_tags
            # target_message.tags.extend(new_tags)
            db.session.add(target_message)
            db.session.commit()
            flash('Message edited')
            return redirect(url_for('users.show', user_id=user_id))
        else:
            return render_template(
                '/messages/edit.html',
                user_id=user_id,
                message=target_message,
                message_form=message_form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(target_message)
            db.session.commit()
            flash('Message Deleted')
            return redirect(
                url_for('users.show', user_id=target_message.user_id))


@messages_blueprint.route('/messages/<int:message_id>/edit')
@ensure_correct_user
def edit(message_id, user_id):
    target_message = Message.query.get(message_id)
    tags = [t.id for t in target_message.tags]
    print(f"*** TAGS: {tags}")
    message_form = MessageForm(content=target_message.content, tags=tags)
    # get tags associated with target_message!
    # we will query based on tag id
    # we will query agains tthe message_tags table
    # from IPython import embed
    # embed()
    # pass tags to message_form and have the already selected tags show up in the view
    # new_tags = [Tag.query.get(id) for id in tag_ids]  # [<Tag 1>, <Tag 2>]
    message_form.set_choices()
    return render_template(
        '/messages/edit.html',
        user_id=user_id,
        delete_form=DeleteForm(),
        message=target_message,
        tags=Tag.query.all(),
        message_form=message_form)
