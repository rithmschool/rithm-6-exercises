from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import DeleteForm, AddMessage
from project.models import Message, User
from project import db

messages_blueprint = Blueprint(
    'messages',
    __name__,
    template_folder='templates'
)

@messages_blueprint.route('/', methods=["POST"])
def index_message(id):
    if request.method == 'POST':
        form = AddMessage(request.form)
        if form.validate():
            content = request.form.get('content')
            user_id = id
            new_message = Message(content, user_id)
            db.session.add(new_message)
            db.session.commit()
            flash('Message added')
            return redirect(url_for('users.show', id=id))
        else:
            return render_template('./users/message_new.html', form=form)

@messages_blueprint.route('/new')
def new_message(id):
    #is the request.form neccesary here?
    return render_template('./messages/message_new.html', user_id=id, form=AddMessage(request.form))

@messages_blueprint.route('/messages/<int:message_id>', methods=["PATCH", "DELETE"])
def show_message(message_id):
    target_message = Message.query.get(message_id)
    if request.method == b'PATCH':
        form = AddMessage(request.form)
        if form.validate():
            target_message.content = request.form.get('content')
            db.session.add(target_message)
            db.session.commit()
            flash('Message editted')
            return redirect(url_for('users.show', id=target_message.user_id))
        else:
            return render_template('/messages/message_edit.html', message=target_message, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(target_message)
            db.session.commit()
            flash('Message Deleted')
            return redirect(url_for('show', id=target_message.user_id))

@messages_blueprint.route('/messages/<int:message_id>/edit')
def edit_message(message_id):
    target_message = Message.query.get(message_id)
    return render_template('/messages/message_edit.html', message=target_message, form=AddMessage(obj=target_message))
