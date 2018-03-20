from flask import redirect, render_template, request, url_for, flash, Blueprint, session
from project.tags.forms import UserForm, DeleteForm, TagForm
from project.models import Message, User, Tag
from project import db, bcrypt

tags_blueprint = Blueprint(
    'tags',
    __name__,
    template_folder = 'templates'
)

@tags_blueprint.route('/', methods=["GET", "POST"])
def index(id):
    found_message = Message.query.get_or_404(id)
    form = TagForm(request.form)
    if request.method == "POST":
        if form.validate():
            new_tag = Tag(content=form.data['tag'], user_id=id)
            db.session.add(new_tag)
            db.session.commit()
            flash('Tag Created!')
            return redirect(url_for('tags.index', id=id))
        return render_template('tags/new.html', id=id, form=form)
    return render_template('tags/index.html', form=form, message=found_message)


@tags_blueprint.route('/new')
def new(id):
    form = TagForm()
    return render_template('tags/new.html', id=id, form=form)


@tags_blueprint.route('/<int:tag_id>/edit')
def edit(id, tag_id):
    found_tag = Tag.query.get_or_404(id)
    found_message = Message.query.get(message_id)
    form = TagForm(obj=found_tag)
    delete_form = DeleteForm(request.form)
    return render_template(
        'tags/edit.html',
        id=id,
        message_id=message_id,
        form=form,
        message=found_message,
        tag=found_tag,
        delete_form=delete_form)


@tags_blueprint.route(
    '/<int:tag_id>',
    methods=["GET", "PATCH", "DELETE"])
def show(id, message_id):
    found_tag = Tag.query.get_or_404(id)
    found_message = Message.query.get(message_id)
    delete_form = DeleteForm(request.form)
    form = TagForm(request.form)
    if request.method == b"PATCH":
        if form.validate():
            found_message.content = form.content.data
            db.session.add(found_tag)
            db.session.commit()
            flash('Tag Updated!')
            return redirect(
                url_for('tags.index', id=id, tag_id=tag_id))
        return render_template(
            'tags/edit.html',
            id=id,
            message_id=message_id,
            message=found_message,
            tag=found_tag,
            form=form,
            delete_form=delete_form)
    if request.method == b"DELETE":
        if delete_form.validate():
            db.session.delete(found_tag)
            db.session.commit()
            flash('Tag Deleted!', 'error')
            return redirect(url_for('tags.index', id=id))
        return render_template(
            'tags/edit.html',
            message=found_message,
            form=form,
            delete_form=delete_form)
    return render_template(
        'tags/show.html', tag=found_tag, message=found_message)
