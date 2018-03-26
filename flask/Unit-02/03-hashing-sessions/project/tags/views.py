from flask import redirect, render_template, request, url_for, Blueprint, flash, session, g
from project.tags.forms import TagForm, DeleteForm
from project.models import Message, User, Tag
from functools import wraps
from project import db

tags_blueprint = Blueprint('tags', __name__, template_folder='templates')


def ensure_logged_in(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if not session.get('user_id'):
            flash('Please log in or sign up first')
            return redirect(url_for('welcome'))
        return fn(*args, **kwargs)

    return wrapper


@tags_blueprint.route('/', methods=['GET', 'POST'])
@ensure_logged_in
def index():
    if request.method == "POST":
        form = TagForm(request.form)
        form.set_choices()
        if form.validate():
            new_tag = Tag(name=form.data['name'])
            messages_ids = form.messages.data
            messages = [Message.query.get(tid) for tid in messages_ids]
            print("*** MESSAGES", messages)
            new_tag.messages.extend(messages)
            db.session.add(new_tag)
            db.session.commit()
            flash('Tag Created!')
            return redirect(url_for('tags.index'))
        return render_template('tags/new.html', form=form)
    return render_template('tags/index.html', tags=Tag.query.all())


@tags_blueprint.route('/new')
@ensure_logged_in
def new():
    form = TagForm()
    form.set_choices()
    return render_template('tags/new.html', form=form)


@tags_blueprint.route('/<int:tag_id>/edit')
@ensure_logged_in
def edit(tag_id):
    found_tag = Tag.query.get_or_404(tag_id)
    form = TagForm(
        name=found_tag.name,
        messages=[message.id for message in found_tag.messages])
    form.set_choices()
    return render_template('tags/edit.html', tag=found_tag, form=form)


@tags_blueprint.route('/<int:tag_id>', methods=['GET', 'PATCH', 'DELETE'])
@ensure_logged_in
def show(tag_id):
    found_tag = Tag.query.get_or_404(tag_id)
    delete_form = DeleteForm()
    if request.method == b'PATCH':
        form = TagForm(request.form)
        form.set_choices()
        if form.validate():
            found_tag.name = form.name.data
            found_tag.messages.clear()
            message_ids = form.messages.data
            messages = [Message.query.get(tid) for tid in message_ids]
            print("*** MESSAGES", messages)
            found_tag.messages.extend(messages)
            # db.session.add()
            db.session.commit()
            flash('Tag Updated!')
            return redirect(url_for('tags.index'))
        return render_template('tags/edit.html', tag=found_tag, form=form)
    if request.method == b'DELETE':
        delete_tag = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(delete_tag)
            db.session.commit()
            flash('Tag Deleted!')
            return redirect(url_for('tags.index'))
    return render_template(
        'tags/show.html', tag=found_tag, delete_form=delete_form)
