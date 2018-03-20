from flask import request, redirect, url_for, render_template, flash, Blueprint
from project.messages.forms import MessageForm, DeleteForm
from project.models import User, Message
from project.decorators import ensure_correct_user, require_login
from project import db

messages_blueprint = Blueprint(
    'messages', __name__, template_folder='templates')


@messages_blueprint.route('/', methods=['GET', 'POST'])
def index(user_id):
    delete_form = DeleteForm()
    if request.method == "POST":
        form = MessageForm(request.form)
        form.set_choices()
        if form.validate():
            new_message = Message(
                content=form.data['content'], user_id=user_id)
            db.session.add(new_message)
            db.session.commit()
            flash('Message Created')
            return redirect(url_for('messages.index', user_id=user_id))
        return render_template('messages/new.html', form=form, user_id=user_id)
    return render_template(
        'messages/index.html',
        user=User.query.get(user_id),
        delete_form=delete_form)


@messages_blueprint.route('/new')
@require_login
@ensure_correct_user
def new(user_id):
    form = MessageForm()
    form.set_choices()
    return render_template('messages/new.html', user_id=user_id, form=form)


@messages_blueprint.route('/<int:message_id>/edit')
@require_login
@ensure_correct_user
def edit(message_id, user_id):
    found_message = Message.query.get_or_404(message_id)
    form = MessageForm(obj=found_message)
    form.set_choices()
    return render_template(
        'messages/edit.html', message=found_message, form=form)


@messages_blueprint.route(
    '/<int:message_id>', methods=['GET', 'PATCH', 'DELETE'])
def show(user_id, message_id):
    found_message = Message.query.get_or_404(message_id)
    if request.method == b'PATCH':
        form = MessageForm(request.form)
        form.set_choices()
        if form.validate():
            found_message.content = form.content.data
            flash(form.tags.data)
            db.session.add(found_message)
            db.session.commit()
            flash('Message Updated')
            return redirect(url_for('messages.index', user_id=user_id))
        return render_template(
            'messages/edit.html', message=found_message, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            flash('Message Deleted')
            return redirect(url_for('messages.index', user_id=user_id))
    return redirect(url_for('messages.index', user_id=user_id))
