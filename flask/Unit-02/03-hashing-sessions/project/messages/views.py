from flask import redirect, render_template, request, url_for, Blueprint, flash, session, g
from project.messages.forms import DeleteForm, MessageForm
from project.models import Message, User, Tag
from project import db
from functools import wraps

messages_blueprint = Blueprint(
    'messages', __name__, template_folder='templates')


def ensure_logged_in(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if not session.get('user_id'):
            flash('Please log in or sign up first')
            return redirect(url_for('welcome'))
        return fn(*args, **kwargs)

    return wrapper


@messages_blueprint.route('/', methods=['GET', 'POST'])
@ensure_logged_in
def index(user_id):
    delete_form = DeleteForm()
    if request.method == "POST":
        form = MessageForm(request.form)
        form.set_choices()
        if form.validate():
            new_message = Message(
                content=form.data['content'], user_id=user_id)
            tag_ids = form.tags.data  # [1,2,3]
            tags = [Tag.query.get(tid)
                    for tid in tag_ids]  # [<Tag 1>, <Tag 2>, <Tag 3>]
            print("*** TAGS", tags)
            new_message.tags.extend(tags)
            db.session.add(new_message)
            db.session.commit()
            flash('Message Created!')
            return redirect(url_for('messages.index', user_id=user_id))
        return render_template('messages/new.html', form=form, user_id=user_id)
    return render_template(
        'messages/index.html',
        user=User.query.get(user_id),
        delete_form=delete_form)


@messages_blueprint.route('/new/')
@ensure_logged_in
def new(user_id):
    form = MessageForm()
    form.set_choices()
    return render_template('messages/new.html', user_id=user_id, form=form)


@messages_blueprint.route('/<int:message_id>/edit')
@ensure_logged_in
def edit(message_id, user_id):
    found_message = Message.query.get_or_404(message_id)
    form = MessageForm(
        content=found_message.content,
        tags=[tag.id for tag in found_message.tags])
    form.set_choices()
    return render_template(
        'messages/edit.html', message=found_message, form=form)


@messages_blueprint.route(
    '//<int:message_id>', methods=['GET', 'PATCH', 'DELETE'])
def show(user_id, message_id):

    found_message = Message.query.get_or_404(message_id)
    if request.method == b'PATCH':
        form = MessageForm(request.form)
        form.set_choices()
        if form.validate():
            found_message.content = form.content.data

            # tags = []
            # for tag_id in form.getlist('tags')
            # tags.append(Tag.query.get_or_404(tag_id))
            # endfor
            found_message.tags.clear()
            tag_ids = form.tags.data  # [1,2,3]
            tags = [Tag.query.get(tid)
                    for tid in tag_ids]  # [<Tag 1>, <Tag 2>, <Tag 3>]
            print("*** TAGS", tags)
            found_message.tags.extend(tags)
            # found_message.tags = [tags]
            # db.sess   ion.add(found_message)
            db.session.commit()
            flash('Message updated!')
            return redirect(url_for('messages.index', user_id=user_id))
        return render_template(
            'messages/edit.html', message=found_message, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            flash('Message deleteed!')
            return redirect(url_for('messages.index', user_id=user_id))
    return redirect(url_for('messages.index', user_id=user_id))