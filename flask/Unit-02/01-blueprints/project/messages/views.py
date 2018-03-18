from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import DeleteForm, MessageForm
from project.models import Message, User
from project import db

messages_blueprint = Blueprint(
    'messages',
    __name__,
    template_folder = 'templates'
)

@messages_blueprint.route('/', methods=["GET", "POST"])
def index(id):
    found_user = User.query.get_or_404(id)
    form = MessageForm(request.form)
    if request.method == "POST":
        if form.validate():
            new_message = Message(content=form.data['content'], user_id=id)
            db.session.add(new_message)
            db.session.commit()
            flash('Message Created!')
            return redirect(url_for('messages.index', id=id))
        return render_template('messages/new.html', id=id, form=form)
    return render_template('messages/index.html', form=form, user=found_user)


@messages_blueprint.route('/new')
def new(id):
    form = MessageForm()
    return render_template('messages/new.html', id=id, form=form)


@messages_blueprint.route('/<int:message_id>/edit')
def edit(id, message_id):
    found_user = User.query.get_or_404(id)
    found_message = Message.query.get(message_id)
    form = MessageForm(obj=found_message)
    delete_form = DeleteForm(request.form)
    return render_template(
        'messages/edit.html',
        id=id,
        message_id=message_id,
        form=form,
        message=found_message,
        user=found_user,
        delete_form=delete_form)


@messages_blueprint.route(
    '/<int:message_id>',
    methods=["GET", "PATCH", "DELETE"])
def show(id, message_id):
    found_user = User.query.get_or_404(id)
    found_message = Message.query.get(message_id)
    delete_form = DeleteForm(request.form)
    form = MessageForm(request.form)
    if request.method == b"PATCH":
        if form.validate():
            found_message.content = form.content.data
            db.session.add(found_message)
            db.session.commit()
            flash('Message Updated!')
            return redirect(
                url_for('messages.index', id=id, message_id=message_id))
        return render_template(
            'messages/edit.html',
            id=id,
            message_id=message_id,
            message=found_message,
            user=found_user,
            form=form,
            delete_form=delete_form)
    if request.method == b"DELETE":
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            flash('Message Deleted!', 'error')
            return redirect(url_for('messages.index', id=id))
        return render_template(
            'messages/edit.html',
            message=found_message,
            form=form,
            delete_form=delete_form)
    return render_template(
        'messages/show.html', user=found_user, message=found_message)
