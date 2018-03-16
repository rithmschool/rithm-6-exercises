from flask import Blueprint, redirect, render_template, request, url_for, flash
from project.messages.models import Message
from project.users.models import User
from project.messages.forms import MessageForm, DeleteForm
from project import db

messages_blueprint = Blueprint('messages', __name__, template_folder = 'templates')

@messages_blueprint.route('/', methods=['GET', 'POST'])
def index(id):
    if request.method == 'POST':
        form = MessageForm()
        if form.validate():
            content = form.data['content']
            new_message = Message(content = content, user_id = id)
            db.session.add(new_message)
            db.session.commit()
            flash('Message Created!')
            return redirect(url_for('messages.index', id = id))
        return render_template('messages/new.html', id = id, form = form)
    return render_template('messages/index.html', user = User.query.get_or_404(id))

@messages_blueprint.route('/new')
def new(id):
    form = MessageForm()
    return render_template('messages/new.html', id = id, form = form)

@messages_blueprint.route('/<int:message_id>/edit')
def edit(id, message_id):
    message_form = MessageForm(obj = Message.query.get_or_404(message_id))
    delete_form = DeleteForm(obj = Message.query.get_or_404(message_id))
    return render_template('messages/edit.html', id = id, message = Message.query.get_or_404(message_id), message_form = message_form, delete_form = delete_form)

@messages_blueprint.route('/<int:message_id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id, message_id):
    found_user = User.query.get_or_404(id)
    found_message = Message.query.get_or_404(message_id)
    if request.method == b'PATCH':
        form = MessageForm(request.form)
        if form.validate():
            found_message.content = form.data['content']
            db.session.add(found_message)
            db.session.commit()
            flash('Message Updated!')
            return redirect(url_for('messages.show', id = id, message_id = message_id))
        return render_template('messages/edit.html', id = id, message = found_message, form = form)
    if request.method == b'DELETE':
        message_form = MessageForm(obj = request.form)
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            flash('Message Deleted!')
            return redirect(url_for('messages.index', id = id))
    return render_template('messages/show.html', user = found_user, message = found_message)