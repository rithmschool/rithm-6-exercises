from flask import redirect, render_template, request, url_for, flash, Blueprint, session, g
from project.tags.forms import TagForm, DeleteForm
from project.models import Tag, Message, User
from project import db

tags_blueprint = Blueprint('tags', __name__, template_folder='templates')

################### Tags View Functions #########################

@tags_blueprint.before_request
def current_user():
    if session.get('user_id'):
        g.current_user = User.query.get(session['user_id'])
    else:
        g.current_user = None

@tags_blueprint.route('/', methods=['GET', 'POST'])
def index_tags():
    '''Display all tags'''

    if request.method == 'POST':
        tag_form = TagForm(request.form)
        tag_form.set_choices()

        if tag_form.validate():
            new_tag = Tag(request.form['content'])
            for message in tag_form.messages.data:
                new_tag.messages.append(Message.query.get(message))

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
    tag_form.set_choices()
    return render_template('tags/new.html', form=tag_form)

@tags_blueprint.route('/<int:tag_id>', methods=['GET', 'PATCH', 'DELETE'])
def show_tags(tag_id):
    ''''''

    found_tag = Tag.query.get_or_404(tag_id)
    delete_form = DeleteForm()

    if request.method == b'PATCH':
        tag_form = TagForm(request.form)
        tag_form.set_choices()
        if tag_form.validate():
            found_tag.content = tag_form.content.data
            found_tag.messages = [Message.query.get(message) for message in tag_form.messages.data]
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

    tag_messages = [message.content for message in found_tag.messages]
    return render_template('tags/show.html', tag=found_tag, messages=tag_messages, delete_form=delete_form)

@tags_blueprint.route('/<int:tag_id>/edit')
def edit_tags(tag_id):
    ''''''

    found_tag = Tag.query.get_or_404(tag_id)
    delete_form = DeleteForm()

    messages = [message.id for message in found_tag.messages]
    tag_form = TagForm(content=found_tag.content, messages=messages)
    tag_form.set_choices()
    return render_template('tags/edit.html', tag=found_tag, form=tag_form, delete_form=delete_form)


