from flask import Blueprint, render_template, redirect, url_for, flash, request
from project.tags.forms import DeleteForm, TagForm
from project.models import Message, Tag
from project import db

tags_blueprint = Blueprint(
    'tags',
    __name__,
    template_folder='templates'
)


@tags_blueprint.route('/')
def tags_index():
    return render_template('tags/index.html', tags=Tag.query.all())

@tags_blueprint.route('/', methods=["POST"])
def tags_create():
    tag_form = TagForm(request.form)
    tag_form.set_choices()
    if tag_form.validate():
        new_tag = Tag(tag_form.text.data)
        for message in tag_form.messages.data:
            new_tag.messages.append(Message.query.get(message))
        db.session.add(new_tag)
        db.session.commit()
        flash('tag Created')
        return redirect(url_for('tags.tags_index'))
    else:
        return render_template(url_for('tags/new.html', form=tag_form))

@tags_blueprint.route('/new')
def tags_new():
    tag_form = TagForm()
    tag_form.set_choices()
    return render_template('tags/new.html' , form=tag_form)

@tags_blueprint.route('/<int:id>', methods=["GET"])
def tags_show(id):
    return render_template('tags/show.html', tag=Tag.query.get(id))


@tags_blueprint.route('/<int:id>', methods=["PATCH"])
def tags_update(id):
    tag_form = TagForm(request.form)
    tag_form.set_choices()
    found_tag = Tag.query.get(id)
    if tag_form.validate():
        found_tag.text = tag_form.text.data
        found_tag.messages = []
        for message in tag_form.messages.data:
            found_tag.messages.append(Message.query.get(message))
        db.session.add(found_tag)
        db.session.commit()
        flash('Tag has been updated')
        return redirect(url_for('tags.tags_index'))
    else:
        return render_template('tags/edit.html', tag=Tag.query.get(id), form=tag_form)

@tags_blueprint.route('/<int:id>', methods=["DELETE"])
def tags_destroy(id):
    found_tag = Tag.query.get(id)
    tag_delete = DeleteForm(request.form)
    if tag_delete.validate():
        db.session.delete(found_tag)
        db.session.commit()
        flash('Deleting Tag')
    return redirect(url_for('tags.tags_index'))

@tags_blueprint.route('/<int:id>/edit')
def tags_edit(id):
    tag = Tag.query.get(id)
    messages = [message.id for message in tag.messages]
    tag_form = TagForm(messages=messages)
    tag_form.set_choices()
    return render_template('tags/edit.html', tag=tag, form=tag_form)
