from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.tags.forms import DeleteForm, TagForm
from project.models import Message, User, Tag
from project import db

tags_blueprint = Blueprint('tags', __name__, template_folder='templates')


@tags_blueprint.route('/', methods=['GET', 'POST'])
def index(id):
    found_message = Message.query.get(id)
    found_user = found_message.user_id
    delete_form = DeleteForm(request.form)
    if request.method == "POST":
        form = TagForm(request.form)
        new_tag = Tag(label=request.form['label'])
        if form.validate():
            new_tag.messages = []
            for message in form.messages.data:
                new_tag.messages.append(Message.query.get(message))
            db.session.add(new_tag)
            found_message.tags.append(new_tag)
            db.session.commit()
            flash('Tag Created!')
            return redirect(
                url_for('messages.show', id=id, user_id=found_user))
        return render_template(
            '/tags/new.html', id=id, message=found_message, form=form)
    return render_template(
        '/tags/index.html',
        id=id,
        tags=Tag.query.all(),
        delete_form=delete_form)


@tags_blueprint.route('/new')
def new(id):
    tag_form = TagForm()
    tag_form.set_choices()
    return render_template('/tags/new.html', id=id, form=tag_form)


@tags_blueprint.route('/<int:tag_id>/edit')
def edit(id, tag_id):
    found_tag = Tag.query.get(tag_id)
    messages = [message.id for message in found_tag.messages]
    form = TagForm(label=found_tag.label, messages=messages)
    form.set_choices()
    return render_template('/tags/edit.html', id=id, tag_id=tag_id, form=form)


@tags_blueprint.route('/<int:tag_id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id, tag_id):
    found_tag = Tag.query.get(tag_id)
    found_message = Message.query.get(id)
    found_user = found_message.user_id
    delete_form = DeleteForm(request.form)
    if request.method == b"PATCH":
        form = TagForm(request.form)
        if form.validate():
            found_tag.label = request.form["label"]
            found_tag.messages = []
            for message in form.messages.data:
                found_tag.messages.append(Message.query.get(message))
            db.session.add(found_tag)
            db.session.commit()
            flash('Tag Updated!')
            return redirect(
                url_for('messages.index', user_id=found_message.user_id))
        else:
            return render_template(
                '/tags/edit.html',
                form=form,
                id=id,
                user_id=found_message.user_id)
    if request.method == b"DELETE":
        if delete_form.validate():
            db.session.delete(found_tag)
            db.session.commit()
            flash('Tag Deleted!')
            return redirect(
                url_for('messages.show', user_id=found_user, id=id))
    return render_template('/tags/show.html', tag=found_tag)
