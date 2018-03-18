from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.tags.forms import DeleteForm, NewTagForm
from project.models import Message, User
from project import db

tags_blueprint = Blueprint(
    'tags',
    __name__,
    template_folder='templates'
)

@tags_blueprint.route('/', methods=["POST"])
#this view function has not been checked yet because of the bug
def index(id):
    if request.method == 'POST':
        form = AddMessage(request.form)
        if form.validate():
            content = request.form.get('content')
            user_id = id
            new_message = Message(content, user_id)
            db.session.add(new_message)
            db.session.commit()
            flash('Message added')
            return redirect(url_for('users.show', id=id))
        else:
            return render_template('./tags/new.html', form=form)
    return render_template('tags/index.html')

@tags_blueprint.route('/new')
def new(id):
    #is the request.form neccesary here?
    return render_template('./tags/new.html', user_id=id, form=AddMessage(request.form))

@tags_blueprint.route('/tags/<int:message_id>', methods=["PATCH", "DELETE"])
#this view function has not been tested because of the bug
def show(message_id):
    target_message = Message.query.get(message_id)
    if request.method == b'PATCH':
        form = AddMessage(request.form)
        if form.validate():
            target_message.content = request.form.get('content')
            db.session.add(target_message)
            db.session.commit()
            flash('Message editted')
            return redirect(url_for('users.show', id=target_message.user_id))
        else:
            return render_template('/tags/edit.html', message=target_message, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        #delete form isn't validating
        #why not?
        #I have temporarily removed validation, I will add it back once i debug
        # if delete_form.validate():
        db.session.delete(target_message)
        db.session.commit()
        flash('Message Deleted')
        return redirect(url_for('users.show', id=target_message.user_id))

@tags_blueprint.route('/tags/<int:message_id>/edit')
def edit(message_id):
    target_message = Message.query.get(message_id)
    return render_template('/tags/edit.html', message=target_message, form=AddMessage(obj=target_message))
