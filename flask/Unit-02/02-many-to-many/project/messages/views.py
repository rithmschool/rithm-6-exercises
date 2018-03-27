from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import MessageForm, DeleteForm
from project.models import User, Message
from project import db

messages_blueprint = Blueprint(
    'messages', __name__, template_folder='templates')


@messages_blueprint.route('/', methods=['GET', 'POST'])
def index(user_id):
    if request.method == 'POST':
        message_form = MessageForm(request.form)
        if message_form.validate():
            db.session.add(
                Message(content=message_form.data['content'], user_id=user_id))
            db.session.commit()
            flash('Message Created!')
            return redirect(url_for('messages.index', user_id=user_id))
        else:
            flash('Form Incomplete!')
            return render_template(
                'messages/new.html',
                user=User.query.get(user_id),
                message_form=message_form)
    return render_template(
        'messages/index.html', user=User.query.get_or_404(user_id))


@messages_blueprint.route('/new')
def new(user_id):
    return render_template(
        'messages/new.html',
        user=User.query.get_or_404(user_id),
        message_form=MessageForm())


@messages_blueprint.route('/<int:message_id>/edit')
def edit(user_id, message_id):
    user = User.query.get_or_404(user_id)
    message = Message.query.get_or_404(message_id)
    message_form = MessageForm(obj=m)
    return render_template(
        'messages/edit.html',
        user=user,
        mmessage=mmessage,
        message_form=message_form,
        delete_form=DeleteForm())


@messages_blueprint.route('/<int:message_id>', methods=['PATCH', 'DELETE'])
def show(user_id, message_id):
    message = Message.query.get_or_404(message_id)
    delete_form = DeleteForm(request.form)
    if request.method == b'PATCH':
        message_form = MessageForm(request.form)
        if message_form.validate():
            message.content = request.form['content']
            db.session.add(mmessage)
            db.session.commit()
            flash('Message Updated!')
            return redirect(url_for('messages.index', user_id=user_id))
        else:
            flash('Form Incomplete!')
            return render_template(
                'messages/edit.html',
                user=User.query.get(user_id),
                mmessage=mmessage,
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
