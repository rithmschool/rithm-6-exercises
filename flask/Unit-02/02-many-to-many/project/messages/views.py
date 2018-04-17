from flask import redirect, render_template, request, url_for, flash, Blueprint, session, g
from project.messages.forms import DeleteForm, MessageForm
from project.tags.forms import NewTagForm
from project.models import Message, User, Tag
from project import db
from project.decorators import ensure_logged_in, prevent_login_signup, ensure_correct_user

messages_blueprint = Blueprint(
    'messages',
    __name__,
    template_folder='templates'
)

@messages_blueprint.route('/', methods=["POST"])
def index(user_id):
    if request.method == 'POST':
        message_form = MessageForm(request.form)
        import pdb; pdb.set_trace()
        if message_form.validate():
            content = message_form.content.data    # 'body of msg'
            import pdb; pdb.set_trace()
            # ugly_way_to_get_tags = request.message_form.getmultiple('tags')  # ['1', '2', '3']
            tag_ids = message_form.tags.data          # [1, 2, 3]   <- ids of tags
            import pdb; pdb.set_trace()
            new_message = Message(content, user_id)
            import pdb; pdb.set_trace()
            tags = [Tag.query.get(id) for id in tag_ids]  # [<Tag 1>, <Tag 2>]
            import pdb; pdb.set_trace()
            new_messages.tags.extend(tags)
            import pdb; pdb.set_trace()
#when you do this in edit, you need to clear the current tags first
            db.session.add(new_message)
            db.session.commit()
            flash('Message added')
            return redirect(url_for('users.show', user_id=user_id))
        else:
            return render_template('./messages/new.html', message_form=message_form)

@messages_blueprint.route('/new')
@ensure_correct_user
def new(user_id):
    message_form = MessageForm()
    message_form.set_choices()
    return render_template('messages/new.html', user_id=user_id, message_form=message_form)

@messages_blueprint.route('/messages/<int:message_id>', methods=["PATCH", "DELETE"])
@ensure_correct_user
def show(message_id, user_id):
    target_message = Message.query.get(message_id)
    if request.method == b'PATCH':
        message_form = MessageForm(request.message_form)
        if message_form.validate():
            target_message.content = request.message_form.get('content')
            db.session.add(target_message)
            db.session.commit()
            flash('Message edited')
            return redirect(url_for('users.show', user_id=user_id))
        else:
            return render_template('/messages/edit.html', user_id=user_id, message=target_message, message_form=message_form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.message_form)
        if delete_form.validate():
            db.session.delete(target_message)
            db.session.commit()
            flash('Message Deleted')
            return redirect(url_for('users.show', user_id=target_message.user_id))

@messages_blueprint.route('/messages/<int:message_id>/edit')
@ensure_correct_user
def edit(message_id, user_id):
    target_message = Message.query.get(message_id)
    message_form = MessageForm(obj=target_message)
    message_form.set_choices()
    return render_template('/messages/edit.html', user_id=user_id, delete_form=DeleteForm(), message=target_message, message_form=message_form)
