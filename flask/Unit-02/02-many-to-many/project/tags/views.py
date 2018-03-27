from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.models import User, Tag
from project.tags.forms import TagForm, DeleteForm
from project import db
from project.decorators import ensure_correct_user
from flask_login import login_required

tags_blueprint = Blueprint('tags', __name__, template_folder="templates")


@tags_blueprint.route('/', methods=['GET', 'POST'])
@login_required
@ensure_correct_user
def index(id):
    user = User.query.get(id)
    if request.method == 'POST':
        form = TagForm(request.form)
        # M:M: form.set_choices() so we can have latest list of tag options
        form.set_choices()  # Why do we need this???
        if form.validate():
            name = form.data['name']
            tag = Tag(name)
            tag.messages.extend(
                form.data['messages'])  # writing to the join table
            db.session.add(tag)
            db.session.commit()
            flash('Tag Created!')
            return redirect(url_for('tags.index', id=id))
        return render_template('tags/new.html', user=user, form=form)
    tags = Tag.query.all()
    return render_template('tags/index.html', user=user, tags=tags)


@tags_blueprint.route('/new')
@login_required
@ensure_correct_user
def new(id):
    user = User.query.get(id)
    form = TagForm()
    form.set_choices()
    return render_template('tags/new.html', user=user, form=form)


@tags_blueprint.route('/<int:tag_id>/edit')
@login_required
@ensure_correct_user
def edit(id, tag_id):
    tag = Tag.query.get(tag_id)
    form = TagForm(obj=tag)
    form.set_choices()
    return render_template('tags/edit.html', tag=tag, form=form, user_id=id)


@tags_blueprint.route('/<int:tag_id>', methods=['GET', 'PATCH', 'DELETE'])
@login_required
@ensure_correct_user
def show(id, tag_id):
    user = User.query.get(id)
    tag = Tag.query.get(tag_id)
    if request.method == b"PATCH":
        form = TagForm(request.form)
        tag.name = form.data['name']
        tag.messages = []
        # for msg_id in form.data['messages']:
        #     tag.messages.append(Message.query.get(msg_id))
        # Try to do with a list comprehension instead
        tag.messages = [
            Message.query.get(msg_id) for msg_id in form.data['messages']
        ]
        db.session.add(tag)
        db.session.commit()
        flash('Tag Updated!')
        return redirect(url_for('tags.index', id=id))
    if request.method == b"DELETE":
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(tag)
            db.session.commit()
            flash('Tag Deleted!')
            return redirect(url_for('tags.index', id=id))
    delete_form = DeleteForm()
    return render_template(
        'tags/show.html', user=user, tag=tag, delete_form=delete_form)
