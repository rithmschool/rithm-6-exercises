from flask import redirect, render_template, request, url_for, Blueprint
from project.tags.forms import TagForm
from project.models import Tag
from project import db

tags_blueprint = BluePrint(
    'tags',
    __name__,
    template_folder = 'templates'
)


@tags_blueprint.route('/', methods = ['GET', 'POST'])
def index():
    if request.method == 'POST':
        form = TagForm(request.form)
        if form.validate():
            new_tag = Tag(form.subject.data)
            db.session.add(new_tag)
            db.session.commit()
            flash('New Tag Created')
            return redirect(url_for('tags.index'))
        else:
            return render_template('new.html', form = form)
    return render_template('/tags/index.html', tags = Tag.query.all())

@tags.blueprint.route('/new', methods = ['GET'])
def new():
    form = TagForm()
    return render_template('/tags/new.html', form = form)

@tags.blueprint.route('/<int:tag_id>', methods = ['GET', 'PATCH', 'DELETE'])
def show(id):
    form = TagForm()
    found_tag = Tag.query.get(id)
    if request.method == b'PATCH'
        found_tag.subject = request.form['Tag-subject']
        db.session.add(found_tag)
        db.session.commit()
        return redirect(url_for('tags.index'))
    elif request.methods == b'DELETE':
        db.session.delete(found_tag)
        db.session.commit()
        return redirect(url_for('tags.index'))    
    return render_template('/tags/show.html',tag = found_tag. form = form)

@tags_blueprint.route('/<int:tag_id>/edit', methods = ['GET'])
def edit(id):

    found_tag = Tag.query.get(id)
    return render_template('/tags/edit.html', tag = found_tag)


        
    