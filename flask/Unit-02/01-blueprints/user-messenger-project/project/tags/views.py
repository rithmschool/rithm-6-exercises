from flask import redirect, render_template, request, url_for,flash, Blueprint
from project.tags.forms import TagForm
from project.models import Tag, Message
from project import db

tags_blueprint = Blueprint(
    'tags',
    __name__,
    template_folder = 'templates'
)


@tags_blueprint.route('/', methods = ['GET', 'POST'])
def index():
    if request.method == 'POST':
        form = TagForm(request.form)
        form.set_choices()
        if form.validate():
            new_tag = Tag(subject = form.subject.data)
            for message in form.messages.data:
                tag.messages.append(Message.query.get(message))
            db.session.add(new_tag)
            db.session.commit()
            flash('New Tag Created')
            return redirect(url_for('tags.index'))
        else:
            return redirect(url_for('tags.new.html', form = form))
    return render_template('tags/index.html', tags = Tag.query.all())

@tags_blueprint.route('/new', methods = ['GET'])
def new():
    form = TagForm()
    form.set_choices()
    return render_template('tags/new.html', form = form)

@tags_blueprint.route('/<int:tag_id>', methods = ['GET', 'PATCH', 'DELETE'])
def show(tag_id):
    form = TagForm()
    found_tag = Tag.query.get(tag_id)
    if request.method == b'PATCH':
        form.set_choices()
        if form.validate():
            found_tag.subject = request.form['Tag-subject']
            found_tag.messages = []
            for message in form.messages.data:
                tag.messages.append(Message.query.get(message))
            db.session.add(found_tag)
            db.session.commit()
            return redirect(url_for('tags.index'))
        else:
            return render_template('tags/edit.html',tag= found_tag, form = form)
    if request.method == b'DELETE':
        db.session.delete(found_tag)
        db.session.commit()
        return redirect(url_for('tags.index'))    
    return render_template('/tags/show.html',tag = found_tag,form = form)

@tags_blueprint.route('/<int:tag_id>/edit', methods = ['GET'])
def edit(tag_id):
    found_tag = Tag.query.get(tag_id)
    messages = [message.id for message in tag.messages]
    form = TagForm(messages = messages)
    form.set.choices()
    return render_template('/tags/edit.html', tag = found_tag, form = form)


        
    