from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import DeleteForm, AddMessage
from project.tags.forms import NewTagForm
from project.models import Message, User, Tag
from project import db

messages_blueprint = Blueprint(
    'messages',
    __name__,
    template_folder='templates'
)

@messages_blueprint.route('/', methods=["POST"])
def index(user_id):
    if request.method == 'POST':
        form = AddMessage(request.form)
        if form.validate():
            content = request.form.get('content')
            new_message = Message(content, user_id)
            db.session.add(new_message)
            db.session.commit()
            flash('Message added')
            return redirect(url_for('users.show', user_id=user_id))
        else:
            return render_template('./messages/new.html', form=form)

@messages_blueprint.route('/new')
def new(user_id):
    form = AddMessage()
    form.set_choices()
    return render_template('messages/new.html', user_id=user_id, form=form)

@messages_blueprint.route('/messages/<int:message_id>', methods=["PATCH", "DELETE"])
def show(message_id, user_id):
    target_message = Message.query.get(message_id)
    if request.method == b'PATCH':
        form = AddMessage(request.form)
        if form.validate():
            target_message.content = request.form.get('content')
            db.session.add(target_message)
            db.session.commit()
            flash('Message edited')
            return redirect(url_for('users.show', user_id=user_id))
        else:
            return render_template('/messages/edit.html', user_id=user_id, message=target_message, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(target_message)
            db.session.commit()
            flash('Message Deleted')
            return redirect(url_for('users.show', user_id=target_message.user_id))

@messages_blueprint.route('/messages/<int:message_id>/edit')
def edit(message_id, user_id):
    target_message = Message.query.get(message_id)
    form = AddMessage(obj=target_message)
    form.set_choices()
    return render_template('/messages/edit.html', user_id=user_id, delete_form=DeleteForm(), message=target_message, form=form)
