from flask import redirect, render_template, request, url_for, flash, Blueprint
from flask_login import current_user, login_required
from project.tags.forms import TagForm, DeleteForm
from project.models import Tag, Message
from project import db

tags_blueprint = Blueprint('tags', __name__, template_folder='templates')

@tags_blueprint.route('/', methods=['GET', 'POST'])
@login_required
def index():
    if request.method == 'POST':
        tag_form = TagForm(request.form)
        tag_form.set_choices()
        if tag_form.validate():
            new_tag = Tag(name=tag_form.data['name'])
            new_tag.messages = []
            for message in tag_form.messages.data:
                new_tag.messages.append(Message.query.get(message))
            db.session.add(new_tag)
            db.session.commit()
            flash('Tag Created!')
            return redirect(url_for('tags.index'))
        else:
            flash('Form Incomplete!')
            return render_template('tags/new.html', tag_form=tag_form)
    return render_template('tags/index.html', tags=Tag.query.all())


@tags_blueprint.route('/new')
@login_required
def new():
    tag_form = TagForm()
    tag_form.set_choices()
    return render_template('tags/new.html', tag_form=tag_form)


@tags_blueprint.route('/<int:tag_id>/edit')
@login_required
def edit(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    tag_form = TagForm(obj=tag)
    tag_form.set_choices()
    return render_template(
        'tags/edit.html', tag=tag, tag_form=tag_form, delete_form=DeleteForm())


@tags_blueprint.route('/<int:tag_id>', methods=['GET', 'PATCH', 'DELETE'])
@login_required
def show(tag_id):
    tag = Tag.query.get_or_404(tag_id)
    delete_form = DeleteForm(request.form)
    if request.method == b'PATCH':
        tag_form = TagForm(request.form)
        tag_form.set_choices()
        if tag_form.validate():
            tag.name = tag_form.data['name']
            tag.messages = []
            for message in tag_form.messages.data:
                tag.messages.append(Message.query.get(message))
            db.session.add(tag)
            db.session.commit()
            flash('Tag Updated!')
            return redirect(url_for('tags.index', tag_id=tag_id))
        else:
            flash('Form Incomplete!')
            return render_template(
                'tags/edit.html', tag=tag, tag_form=tag_form, delete_form=DeleteForm())
    if request.method == b'DELETE':
        if delete_form.validate():
            db.session.delete(tag)
            db.session.commit()
            flash('Tag Deleted!')
            return redirect(url_for('tags.index'))
        flash('Delete Request Denied')
        return redirect(url_for('tags.index'))
    return render_template('tags/show.html', tag=tag)
