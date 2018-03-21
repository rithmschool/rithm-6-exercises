from flask import request, url_for, render_template, redirect, flash, Blueprint
from project.models import Message, User, Tag
from project.messages.forms import MessageForm, DeleteForm
from project import db
from flask_login import UserMixin, login_user, logout_user, current_user, login_required

messages_blueprint = Blueprint(
    'messages', __name__, template_folder='templates')


@messages_blueprint.route("/", methods=['GET', 'POST'])
@login_required
def index(user_id):
    form = MessageForm(request.form)
    if request.method == 'POST':
        if form.validate():
            content = form.data['content']
            new_message = Message(content=content, user_id=user_id)
            db.session.add(new_message)
            db.session.commit()
            flash("SUCCESS! You Have Created A New Message")
            return redirect(url_for('messages.index', user_id=user_id))
        else:
            return render_template(
                'messages/new.html', user=User.query.get(user_id), form=form)

    return render_template('messages/index.html', user=User.query.get(user_id))


@messages_blueprint.route("/new")
def new(user_id):
    form = MessageForm()
    form.set_choices()

    return render_template(
        'messages/new.html', user=User.query.get(user_id), form=form)


@messages_blueprint.route("/<int:id>/edit")
def edit(user_id, id):
    found_message = Message.query.get(id)
    form = MessageForm(obj=found_message)
    form.set_choices()
    delete_form = DeleteForm(request.form)
    return render_template(
        'messages/edit.html',
        messages=found_message,
        form=form,
        delete_form=delete_form)


@messages_blueprint.route("/<int:id>", methods=['GET', 'DELETE', 'PATCH'])
def show(user_id, id):
    found_message = Message.query.get_or_404(id)
    delete_form = DeleteForm(request.form)
    if request.method == b'PATCH':
        form = MessageForm(request.form)
        form.set_choices()
        if form.validate():
            found_message.content = form.data['content']
            found_message.tags = form.data['tags']
            found_message.append
            db.session.add(found_message)
            db.session.commit()
            flash("SUCCESS! You've Updated Your Message")
            return redirect(url_for('messages.index', user_id=user_id))
        else:
            return render_template(
                'messages/edit.html',
                user_id=user_id,
                messages=found_message,
                form=form,
                delete_form=delete_form)
    if request.method == b'DELETE':
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            flash("Message Deleted")
            return redirect(url_for('messages.index', user_id=user_id))
    return render_template(
        'messages/show.html',
        delete_form=delete_form,
        user_id=user_id,
        messages=found_message)
