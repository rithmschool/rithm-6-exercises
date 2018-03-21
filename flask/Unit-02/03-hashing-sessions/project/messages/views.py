from flask import Blueprint, redirect, render_template, request, url_for, flash, session
from project.messages.models import Message
from project.users.models import User
from project.tags.models import Tag
from project.messages.forms import MessageForm, DeleteForm
from project import db
from functools import wraps

messages_blueprint = Blueprint('messages', __name__, template_folder = 'templates')

def ensure_logged_in(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if not session.get('user_id'):
            flash('please sign up or log in!')
            return redirect(url_for('welcome'))
        return fn(*args, **kwargs)
    return wrapper

@messages_blueprint.route('/', methods=['GET', 'POST'])
@ensure_logged_in
def index(id):
    if request.method == 'POST':
        form = MessageForm()
        form.set_choices()
        if form.validate():
            content = form.data['content']
            new_message = Message(content = content, user_id = id)
            for tag in form.tags.data:
                new_message.tags.append(Tag.query.get(tag))
            db.session.add(new_message)
            db.session.commit()
            flash('Message Created!')
            return redirect(url_for('messages.index', id = id))
        return render_template('messages/new.html', id = id, form = form)
    return render_template('messages/index.html', user = User.query.get_or_404(id))

@messages_blueprint.route('/new')
@ensure_logged_in
def new(id):
    form = MessageForm()
    form.set_choices()
    return render_template('messages/new.html', id = id, form = form, tags = Tag.query.all())

@messages_blueprint.route('/<int:message_id>/edit')
@ensure_logged_in
def edit(id, message_id):
    message = Message.query.get_or_404(message_id)
    tags = [ tag.id for tag in message.tags ]
    message_form = MessageForm(content=message.content, tags=tags)
    message_form.set_choices()
    delete_form = DeleteForm(obj = Message.query.get_or_404(message_id))
    return render_template('messages/edit.html', id = id, message = Message.query.get_or_404(message_id), message_form = message_form, delete_form = delete_form)

@messages_blueprint.route('/<int:message_id>', methods=['GET', 'PATCH', 'DELETE'])
@ensure_logged_in
def show(id, message_id):
    found_user = User.query.get_or_404(id)
    found_message = Message.query.get_or_404(message_id)
    if request.method == b'PATCH':
        form = MessageForm(request.form)
        form.set_choices()
        if form.validate():
            found_message.content = form.data['content']
            found_message.tags = []
            for tag in form.tags.data:
                found_message.tags.append(Tag.query.get(tag))
            db.session.add(found_message)
            db.session.commit()
            flash('Message Updated!')
            return redirect(url_for('messages.show', id = id, message_id = message_id))
        return render_template('messages/edit.html', id = id, message = found_message, form = form)
    if request.method == b'DELETE':
        message_form = MessageForm(obj = request.form)
        message_form.set_choices()
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            flash('Message Deleted!')
            return redirect(url_for('messages.index', id = id))
    return render_template('messages/show.html', user = found_user, message = found_message)