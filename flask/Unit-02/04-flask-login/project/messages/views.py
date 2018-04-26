from flask import redirect, render_template, request, url_for, flash, Blueprint
from flask_login import current_user, login_required
from project.messages.forms import MessageForm, DeleteForm
from project.models import User, Message, Tag
from project import db

messages_blueprint = Blueprint('messages', __name__, template_folder='templates')


@messages_blueprint.route('/', methods=['GET', 'POST'])
@login_required
def index(user_id):
    if request.method == 'POST':
        message_form = MessageForm(request.form)
        message_form.set_choices()
        if message_form.validate():
            new_message = Message(content=message_form.data['content'], user_id=user_id)
            new_message.tags = []
            for tag in message_form.tags.data:
                new_message.tags.append(Tag.query.get(tag))
            db.session.add(new_message)
            db.session.commit()
            flash('Message Created!')
            return redirect(url_for('messages.index', user_id=user_id))
        else:
            return render_template(
                'messages/new.html', user=User.query.get(user_id), message_form=message_form)
    return render_template(
        'messages/index.html', user=User.query.get_or_404(user_id))


@messages_blueprint.route('/new')
@login_required
def new(user_id):
    message_form = MessageForm()
    message_form.set_choices()
    return render_template(
        'messages/new.html', user=User.query.get_or_404(user_id), message_form=message_form)


@messages_blueprint.route('/<int:message_id>/edit')
@login_required
def edit(user_id, message_id):
    user = User.query.get_or_404(user_id)
    message = Message.query.get_or_404(message_id)
    message_form = MessageForm(obj=message)
    message_form.set_choices()
    return render_template(
        'messages/edit.html', user=user, message=message, message_form=message_form, delete_form=DeleteForm())


@messages_blueprint.route('/<int:message_id>', methods=['PATCH', 'DELETE'])
@login_required
def show(user_id, message_id):
    message = Message.query.get_or_404(message_id)
    delete_form = DeleteForm(request.form)
    if request.method == "GET" or current_user.is_anonymous or current_user.get_id() != str(id):
        return render_template('messages/index.html', user_id=user_id)
    if request.method == b'PATCH':
        message_form = MessageForm(request.form)
        message_form.set_choices()
        if message_form.validate():
            message.content = request.form['content']
            message.tags = []
            for tag in message_form.tags.data:
                message.tags.append(Tag.query.get(tag))
            db.session.add(message)
            db.session.commit()
            flash('Message Updated!')
            return redirect(url_for('messages.index', user_id=user_id))
        else:
            return render_template(
                'messages/edit.html',
                user=User.query.get(user_id),
                message=message,
                message_form=message_form,
                delete_form=DeleteForm())
    if request.method == b'DELETE':
        if delete_form.validate():
            db.session.delete(message)
            db.session.commit()
            flash('Message Deleted!')
            return redirect(url_for('messages.index', user_id=user_id))
        flash('Delete Request Denied!')
        return redirect(url_for('messages.index', user_id=user_id))
