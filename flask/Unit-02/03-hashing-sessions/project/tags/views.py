from flask import Blueprint, redirect, render_template, request, url_for, flash, session, g
from project.tags.models import Tag
from project.tags.forms import TagForm, DeleteForm
from project import db
from functools import wraps

tags_blueprint = Blueprint('tags', __name__, template_folder = 'templates')

def ensure_logged_in(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if not session.get('user_id'):
            flash('please sign up or log in!')
            return redirect(url_for('welcome'))
        return fn(*args, **kwargs)
    return wrapper

@tags_blueprint.route('/', methods=['GET', 'POST'])
@ensure_logged_in
def index():
    if request.method == 'POST':
        form = TagForm()
        if form.validate():
            content = form.data['content']
            new_tag = Tag(content = content)
            db.session.add(new_tag)
            db.session.commit()
            flash('tag created!')
            return redirect(url_for('tags.index'))
        return render_template('tags/new.html', form = form)
    return render_template('tags/index.html', tags = Tag.query.all())

@tags_blueprint.route('/new')
@ensure_logged_in
def new():
    form = TagForm()
    return render_template('tags/new.html', form = form)

@tags_blueprint.route('/<int:tag_id>/edit')
@ensure_logged_in
def edit(tag_id):
    tag_form = TagForm(obj = Tag.query.get_or_404(tag_id))
    delete_form = DeleteForm(obj = Tag.query.get_or_404(tag_id))
    return render_template('tags/edit.html', tag = Tag.query.get_or_404(tag_id), tag_form = tag_form, delete_form = delete_form)

@tags_blueprint.route('/<int:tag_id>', methods=['GET', 'PATCH', 'DELETE'])
@ensure_logged_in
def show(tag_id):
    found_tag = Tag.query.get_or_404(tag_id)
    if request.method == b'PATCH':
        form = TagForm(request.form)
        if form.validate():
            found_tag.content = form.data['content']
            db.session.add(found_tag)
            db.session.commit()
            flash('tag updated!')
            return redirect(url_for('tags.show', tag_id = tag_id))
        return render_template('tags/edit.html', tag = found_tag, form = form)
    if request.method == b'DELETE':
        tag_form = TagForm(obj = request.form)
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_tag)
            db.session.commit()
            flash('tag deleted!')
            return redirect(url_for('tags.index'))
    return render_template('tags/show.html', tag = found_tag)