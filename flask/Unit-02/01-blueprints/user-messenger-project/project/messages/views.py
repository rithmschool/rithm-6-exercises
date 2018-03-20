from flask import redirect, render_template, request, url_for, flash, Blueprint, session
from project.messages.forms import MessageForm
from project.models import Message, User, Tag
from project import db

messages_blueprint = Blueprint(
    'messages',
    __name__,
    template_folder= 'templates'
    )


@messages_blueprint.route("/", methods = ["GET", "POST"])
def index(id):
    found_user = User.query.get(id)

    if request.method == "POST":
        form = MessageForm(request.form)
        form.set_choices()
        if form.validate():
            new_message = Message(content = request.form["content"],user_id = id)
            for tag in form.tags.data:
                new_message.tags.append(Tag.query.get(tag))
            db.session.add(new_message)
            db.session.commit()
            flash('Message Created')
            return redirect(url_for("messages.index", id = id))
        else:
            return render_template("messages/new.html", form = form, user = found_user)
    return render_template("messages/index.html", user = found_user)

@messages_blueprint.route("/new")
def new(id):
    form = MessageForm()
    form.set_choices()
    return render_template("messages/new.html", user = User.query.get(id), form = form)

@messages_blueprint.route("/<int:message_id>", methods = ["GET", "PATCH", "DELETE"])
def show(id,message_id):
    found_message = Message.query.get(message_id)
    form = MessageForm()
    if request.method == b"DELETE":
        db.session.delete(found_message)
        db.session.commit()
        return redirect(url_for('messages.index', user_id = id))
    elif request.method == b"PATCH":
        form = MessageForm(request.form)
        form.set_choices()
        if form.validate():
            found_message.content = request.form["content"]
            found_message.tags = []
            for tag in form.tags.data:
                found_message.tags.append(Tag.query.get(tag)) 
            db.session.add(found_message)
            db.session.commit()
            return redirect(url_for("messages.index",id = id))
        else:

            return render_template("messages/show.html",message = found_message, form = form)
    
    return render_template("messages/show.html", message = found_message, form = form, tags = found_message.tags)



@messages_blueprint.route("/<int:message_id>/edit", methods = ["GET"])
def edit(id,message_id):
    found_user = User.query.get(id)
    found_message = Message.query.get(message_id)
    tags = [tag.id for tag in found_message.tags]
    message_list = Message.query.all()
    form = MessageForm(obj = found_message, tags = tags)
    form.set_choices()
    return render_template("messages/edit.html",user = found_user,message = found_message, form = form)
