from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import DeleteForm, MessagesForm
from project.models import Message, User
from project import db

messages_blueprint = Blueprint(
    'messages',
    __name__,
    template_folder='templates'
)


@messages_blueprint.route('/', methods=['GET', 'POST'])
def index(user_id):
    delete_form = DeleteForm()
    form = MessagesForm()
    if request.method == "POST":
        if form.validate():
            new_message = Message(
                content=request.form['content'], user_id=user_id)
            db.session.add(new_message)
            db.session.commit()
            flash('Message Created!')
            return redirect(url_for('messages.index', user_id=user_id))
        return render_template('/messages/new.html', form=form, user_id=user_id)
    return render_template('/messages/index.html', user=User.query.get(user_id),
                           delete_form=delete_form
                           )


@messages_blueprint.route('/new')
def new(user_id):
    form = MessagesForm()
    found_user = User.query.get_or_404(user_id)
    return render_template('/messages/new.html', user_id=user_id, form=form)


@messages_blueprint.route('/<int:message_id>/edit')
def edit(message_id, user_id):
    found_message = Message.query.get_or_404(message_id)
    found_user = User.query.get_or_404(user_id)
    form = MessagesForm(obj=found_message)
    return render_template('/messages/edit.html', message=found_message, user=found_user, form=form)


@messages_blueprint.route(
    '/<int:message_id>',
    methods=['GET', 'PATCH', 'DELETE'])
def show(user_id, message_id):
    delete_form = DeleteForm()
    found_message = Message.query.get_or_404(message_id)
    found_user = User.query.get_or_404(user_id)
    if request.method == b'PATCH':
        form = MessagesForm(request.form)
        if form.validate():
            found_message.content = request.form['content']
            db.session.add(found_message)
            db.session.commit()
            flash('Message Updated')
            return redirect(url_for('messages.index', user_id=user_id))
        return render_template('/messages/edit.html', message=found_message, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            flash('Message Deleted')
            return redirect(url_for('users.index'))
    return render_template('/messages/show.html', message_id=found_message.id, user=found_user, found_message=found_message, delete_form=delete_form)
