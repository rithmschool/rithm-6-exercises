from flask import request, redirect, url_for, render_template, flash, Blueprint
from project.tags.forms import TagForm, DeleteForm
from project.models import Tag
from project import db
from flask_login import login_user, logout_user, login_required, current_user

tags_blueprint = Blueprint('tags', __name__, template_folder='templates')


@tags_blueprint.route('/', methods=['GET', 'POST'])
@login_required
def index():
    delete_form = DeleteForm()
    alltags = [m.tags for m in current_user.messages]
    tags = [tag for sublist in alltags for tag in sublist]
    tags = set(tags)
    if request.method == "POST":
        form = TagForm(request.form)
        if form.validate():
            new_tag = Tag(name=form.name.data)
            db.session.add(new_tag)
            db.session.commit()
            flash('Tag Created')
            return redirect(url_for('tags.index'))
        return render_template('tags/new.html', form=form)
    return render_template(
        'tags/index.html', tags=tags, delete_form=delete_form)


@tags_blueprint.route('/new')
@login_required
def new():
    form = TagForm()
    return render_template('tags/new.html', form=form)


@tags_blueprint.route('/<int:tag_id>/edit')
def edit(tag_id):
    found_tag = Tag.query.get_or_404(tag_id)
    form = TagForm(obj=found_tag)
    return render_template('tags/edit.html', tag=found_tag, form=form)


@tags_blueprint.route('/<int:tag_id>', methods=['GET', 'PATCH', 'DELETE'])
@login_required
def show(tag_id):
    found_tag = Tag.query.get_or_404(tag_id)
    if request.method == b'PATCH':
        form = TagForm(request.form)
        if form.validate():
            found_tag.name = form.name.data
            db.session.add(found_tag)
            db.session.commit()
            flash('Tag Updated')
            return redirect(url_for('tags.index'))
        return render_template('tags/edit.html', tag=found_tag, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_tag)
            db.session.commit()
            flash('Tag Deleted')
    return redirect(url_for('tags.index'))
