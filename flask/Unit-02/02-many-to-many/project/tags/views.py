from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.tags.forms import TagForm, DeleteForm
from project.models import Tag
from project import db

tags_blueprint = Blueprint('tags', __name__, template_folder='templates')

################### Tags View Functions #########################

@tags_blueprint.route('/', methods=['GET', 'POST'])
def index_tags(message_id):
    ''''''

    if request.method == 'POST':
        tag_form = TagForm(request.form)
        if tag_form.validate():
            new_tag = Tag(request.form['content'], messages_id=message_id)
            db.session.add(new_tag)
            db.session.commit()
            flash('Tag Created!')
            return redirect(url_for('tags.index_tags'))
        else:
            return render_template('tags/new.html', form=tag_form)

    delete_form = DeleteForm()
    return render_template('tags/index.html', tags=Tag.query.all(), delete_form=delete_form)

@tags_blueprint.route('/new')
def new_tags():
    '''Create's a new tag'''

    tag_form = TagForm()
    return render_template('tags/new.html', form=tag_form)

@tags_blueprint.route('/<int:tag_id>', methods=['GET', 'PATCH', 'DELETE'])
def show_tags(tag_id):
    ''''''

    found_tag = Tag.query.get(tag_id)
    if found_tag == None:
        return render_template("404.html")

    delete_form = DeleteForm()

    if request.method == b'PATCH':
        tag_form = TagForm(request.form)
        if tag_form.validate():
            found_tag.first_name = tag_form.content.data
            db.session.add(found_tag)
            db.session.commit()
            flash('Tag Updated!')
            return redirect(url_for('tags.index_tags'))
        return render_template('tags/edit.html', tag=found_tag, form=tag_form, delete_form=delete_form)

    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(found_tag)
            db.session.commit()
            flash('Tag Deleted!')
        return redirect(url_for('tags.index_tags'))

    return render_template('tags/show.html', tag=found_tag, delete_form=delete_form)

@tags_blueprint.route('/<int:tag_id>/edit')
def edit_tags(tag_id):
    ''''''

    found_tag = Tag.query.get(tag_id)
    if found_tag == None:
        return render_template("404.html")

    delete_form = DeleteForm()
    tag_form = TagForm(obj=found_tag)
    return render_template('tags/edit.html', tag=found_tag, form=tag_form, delete_form=delete_form)
