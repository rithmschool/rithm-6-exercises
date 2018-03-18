from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.models import User, Message
from project.messages.forms import MessageForm, DeleteForm
from project import db

messages_blueprint = Blueprint(
    'messages', __name__, template_folder="templates")


@messages_blueprint.route('/', methods=['GET', 'POST'])
def index(id):
    user = User.query.get(id)
    if request.method == 'POST':
        form = MessageForm(request.form)
        if form.validate():
            content = form.data['content']
            msg = Message(content, id)
            db.session.add(msg)
            db.session.commit()
            flash('Message Created!')
            return redirect(url_for('messages.index', id=id))
        return render_template('messages/new.html', user=user, form=form)
    return render_template('messages/index.html', user=user)


@messages_blueprint.route('/new')
def new(id):
    user = User.query.get(id)
    form = MessageForm()
    return render_template('messages/new.html', user=user, form=form)


@messages_blueprint.route('/<int:msg_id>/edit')
def edit(id, msg_id):
    message = Message.query.get(msg_id)
    form = MessageForm(obj=message)
    return render_template('messages/edit.html', message=message, form=form)


@messages_blueprint.route('/<int:msg_id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id, msg_id):
    message = Message.query.get(msg_id)
    if request.method == b"PATCH":
        form = MessageForm(request.form)
        message.content = form.data['content']
        db.session.add(message)
        db.session.commit()
        flash('Message Updated!')
        return redirect(url_for('messages.index', id=id))
    if request.method == b"DELETE":
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(message)
            db.session.commit()
            flash('Message Deleted!')
            return redirect(url_for('messages.index', id=id))
    delete_form = DeleteForm()
    return render_template(
        'messages/show.html', message=message, delete_form=delete_form)
