from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import DeleteForm, MessageForm
from project.models import Message, User
from project import db

messages_blueprint = Blueprint(
    'messages', __name__, template_folder='templates')


@messages_blueprint.route('/', methods=['GET', 'POST'])
def index(user_id):
    delete_form = DeleteForm(request.form)
    if request.method == 'POST':
        form = MessageForm(request.form)
        new_message = Message(content=request.form['content'], user_id=user_id)
        if form.validate():
            db.session.add(new_message)
            db.session.commit()
            flash('Message Created!')
            return redirect(url_for('messages.index', user_id=user_id))
        return render_template(
            '/messages/new.html', user_id=user_id, form=form)
    return render_template(
        '/messages/index.html',
        user=User.query.get(user_id),
        delete_form=delete_form)


@messages_blueprint.route('/new')
def new(user_id):
    message_form = MessageForm()
    return render_template(
        '/messages/new.html', user_id=user_id, form=message_form)


@messages_blueprint.route('/<int:id>/edit')
def edit(user_id, id):
    found_message = Message.query.get(id)
    form = MessageForm(obj=found_message)
    return render_template(
        '/messages/edit.html',
        user=User.query.get(user_id),
        message=found_message,
        form=form)


@messages_blueprint.route('/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(user_id, id):
    found_message = Message.query.get(id)
    delete_form = DeleteForm(request.form)
    if request.method == b"PATCH":
        form = MessageForm(request.form)
        if form.validate():
            found_message.content = request.form["content"]
            db.session.add(found_message)
            db.session.commit()
            flash('Message Updated!')
            return redirect(url_for('messages.index', user_id=user_id, id=id))
        else:
            return render_template(
                '/messages/edit.html',
                user_id=user_id,
                message=found_message,
                form=form)

        return redirect(url_for('messages.index', user_id=user_id, id=id))
    if request.method == b'DELETE':
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            flash('Message Deleted!')
        return redirect(
            url_for(
                'messages.index',
                user_id=user_id,
                delete_form=delete_form,
                id=id))
    return render_template(
        '/messages/show.html',
        message=found_message,
        user=user_id,
        delete_form=delete_form)