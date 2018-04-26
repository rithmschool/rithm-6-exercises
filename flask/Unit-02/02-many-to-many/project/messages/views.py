from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.models import User, Message, Tag
from project.messages.forms import MessageForm, DeleteForm
from project import db
from project.decorators import ensure_correct_user
from flask_login import login_required

messages_blueprint = Blueprint(
    'messages', __name__, template_folder="templates")


@messages_blueprint.route('/', methods=['GET', 'POST'])
@login_required
@ensure_correct_user
def index(id):
    user = User.query.get(id)
    if request.method == 'POST':
        form = MessageForm(request.form)  # Daniel did not put in request.form
        form.set_choices()
        if form.validate():
            content = form.data['content']
            msg = Message(content, id)
            for tag_id in form.tags.data:
                msg.tags.append(Tag.query.get(tag_id))
            db.session.add(msg)
            db.session.commit()
            flash('Message Created!')
            return redirect(url_for('messages.index', id=id))
        return render_template('messages/new.html', user=user, form=form)
    return render_template('messages/index.html', user=user)


@messages_blueprint.route('/new')
@login_required
@ensure_correct_user
def new(id):
    user = User.query.get(id)
    form = MessageForm()
    form.set_choices()
    return render_template('messages/new.html', user=user, form=form)


@messages_blueprint.route('/<int:msg_id>/edit')
@login_required
@ensure_correct_user
def edit(id, msg_id):
    message = Message.query.get(msg_id)
    tags = [tag.id for tag in message.tags]
    form = MessageForm(content=message.content, tags=tags)
    form.set_choices()
    # Add a delete form here if you want.  Daniel did.
    return render_template('messages/edit.html', message=message, form=form)


@messages_blueprint.route('/<int:msg_id>', methods=['GET', 'PATCH', 'DELETE'])
@login_required
@ensure_correct_user
def show(id, msg_id):
    message = Message.query.get(msg_id)
    if request.method == b"PATCH":
        form = MessageForm(request.form)
        form.set_choices()
        if form.validate():
            message.content = form.data['content']
            message.tags = []
            for tag_id in form.tags.data:
                message.tags.append(Tag.query.get(tag_id))
            db.session.add(message)
            db.session.commit()
            flash('Message Updated!')
            return redirect(url_for('messages.index', id=id))
    if request.method == b"DELETE":
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(message)  # Daniel had extra stuff for delete
            db.session.commit()
            flash('Message Deleted!')
            return redirect(url_for('messages.index', id=id))
    delete_form = DeleteForm()
    return render_template(
        'messages/show.html', message=message, delete_form=delete_form)
