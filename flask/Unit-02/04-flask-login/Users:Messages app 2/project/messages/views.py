from flask import Blueprint, Flask, request, url_for, render_template, redirect, flash, session
from project.models import User, Message
from project.messages.forms import MessageForm, DeleteForm
from project import db
from functools import wraps

messages_blueprint = Blueprint(
    'messages', __name__, template_folder='templates')


def ensure_logged_in(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if not session.get('user_id'):
            flash("Please log in first")
            return redirect(url_for('users.login'))
        return fn(*args, **kwargs)

    return wrapper


def ensure_correct_user(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if kwargs.get('id') != session.get('user_id'):
            flash("Not Authorized")
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)

    return wrapper


@messages_blueprint.route("/", methods=['GET', 'POST'])
def index(user_id):
    form = MessageForm(request.form)
    if request.method == 'POST':
        if form.validate():
            flash('Message Created!')
            content = form.data['content']
            new_message = Message(content, user_id)
            db.session.add(new_message)
            db.session.commit()
            return redirect(url_for('messages.index', user_id=user_id))
        else:
            return render_template(
                'messages/new.html', user=User.query.get(user_id), form=form)

    return render_template('messages/index.html', user=User.query.get(user_id))


@messages_blueprint.route("/new")
@ensure_logged_in
def new(user_id):
    form = MessageForm()
    return render_template(
        'messages/new.html', user=User.query.get(user_id), form=form)


@messages_blueprint.route("<int:id>/edit")
@ensure_logged_in
@ensure_correct_user
def edit(user_id, id):
    found_message = Message.query.get(id)
    form = MessageForm(obj=found_message)
    delete_form = DeleteForm(request.form)
    return render_template(
        'messages/edit.html',
        messages=found_message,
        form=form,
        delete_form=delete_form)


@messages_blueprint.route("/<int:id>", methods=['GET', 'DELETE', 'PATCH'])
@ensure_logged_in
def show(user_id, id):
    found_message = Message.query.get(id)
    delete_form = DeleteForm(request.form)
    if found_message is None:
        return render_template('404.html')
    if request.method == b'PATCH':
        form = MessageForm(request.form)
        if form.validate():
            flash('Message Updated!')
            found_message.content = form.data['content']
            db.session.add(found_message)
            db.session.commit()
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
            flash('Message Deleted!')
            db.session.delete(found_message)
            db.session.commit()
            return redirect(url_for('messages.index', user_id=user_id))
    return render_template(
        'messages/show.html',
        delete_form=delete_form,
        user_id=user_id,
        messages=found_message)
