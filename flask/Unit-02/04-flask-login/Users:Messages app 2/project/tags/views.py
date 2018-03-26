from flask import Blueprint, Flask, request, url_for, render_template, redirect, flash
from project.models import Tag
from project.tags.forms import TagForm, DeleteForm
from project import db

tags_blueprint = Blueprint('tags', __name__, template_folder='templates')


@tags_blueprint.route("/", methods=['GET', 'POST'])
def index():
    form = TagForm(request.form)
    if request.method == 'POST':
        if form.validate():
            flash('Tag Created!')
            name = form.name['name']
            new_tag = Tag(name)
            db.session.add(new_tag)
            db.session.commit()
            return redirect(url_for('tags.index'))
        else:
            return render_template('tags/new.html', form=form)

    return render_template('tags/index.html', tags=Tag.query.all())


@tags_blueprint.route("/new")
def new():
    form = TagForm()
    return render_template('tags/new.html', form=form)


@tags_blueprint.route("/<int:id>/edit")
def edit(id):
    found_tag = Tag.query.get(id)
    form = TagForm(obj=found_tag)
    delete_form = DeleteForm(request.form)
    return render_template(
        'tags/edit.html',
        tag=Tag.query.get(id),
        form=form,
        delete_form=delete_form)


@tags_blueprint.route("/<int:id>", methods=['GET', 'DELETE', 'PATCH'])
def show(id):
    found_tag = Tag.query.get(id)
    delete_form = DeleteForm(request.form)
    if found_tag is None:
        return render_template('404.html')

    if request.method == b'PATCH':
        form = TagForm(request.form)
        if form.validate():
            flash('Tag Updated!')
            found_tag.name = form.data['name']
            db.session.add(found_tag)
            db.session.commit()
            return redirect(url_for('tags.index'))
        else:
            return render_template('tags/edit.html', form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            flash('User Deleted!')
            db.session.delete(found_tag)
            db.session.commit()
            return redirect(url_for('tags.index'))
    return render_template(
        'tags/show.html', delete_form=delete_form, tag=found_tag)
