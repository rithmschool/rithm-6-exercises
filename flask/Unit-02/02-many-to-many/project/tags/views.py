from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.tags.forms import DeleteForm, NewTagForm
from project.models import Message, User, Tag
from project import db

tags_blueprint = Blueprint(
    'tags',
    __name__,
    template_folder='templates'
)

@tags_blueprint.route('/', methods=["POST"])
def index():
    if request.method == 'POST':
        form = NewTagForm(request.form)
        if form.validate():
            content = request.form.get('content')
            new_message = Tag(content)
            db.session.add(new_message)
            db.session.commit()
            flash('Tag added')
            return redirect(url_for('users.index'))
        else:
            return render_template('./tags/new.html', form=form)

@tags_blueprint.route('/new')
def new():
    new_tag_form = NewTagForm()
    new_tag_form.set_choices()
    return render_template('./tags/new.html', form=new_tag_form)

@tags_blueprint.route('/tags/<int:tag_id>', methods=["PATCH", "DELETE"])
def show(tag_id):
    target_tag = Tag.query.get(tag_id)
    if request.method == b'PATCH':
        form = NewTagForm(request.form)
        if form.validate():
            target_tag.content = request.form.get('content')
            db.session.add(target_tag)
            db.session.commit()
            flash('Tag edited')
            return redirect(url_for('users.index'))
        else:
            return render_template('/tags/edit.html', tag=target_tag, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(target_tag)
            db.session.commit()
            flash('Tag Deleted')
            return redirect(url_for('users.index'))

@tags_blueprint.route('/tags/<int:tag_id>/edit')
def edit(tag_id):
    target_tag = Tag.query.get(tag_id)
    new_tag_form = NewTagForm(obj=target_tag)
    new_tag_form.set_choices()
    return render_template('/tags/edit.html', delete_form=DeleteForm(), tag=target_tag, form=new_tag_form)
