from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import MessageForm
from project.models import Message, User
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
        if form.validate():
            new_message = Message(content = request.form["content"],user_id = id)
            db.session.add(new_message)
            db.session.commit()
            flash('Message Created')
            return redirect(url_for("messages.index", id = id))
        else:
            return render_template("/messages/new.html", form = form)
    return render_template("/messages/index.html", user = found_user)

@messages_blueprint.route("/new")
def new(id):
    form = MessageForm()
    return render_template("messages/new.html", id = id, form = form)

@messages_blueprint.route("/<int:message_id>", methods = ["GET", "PATCH", "DELETE"])
def show(id,message_id):
    found_message = Message.query.get(message_id)
    form = MessageForm()
    if request.method == b"DELETE":
        db.session.delete(found_message)
        db.session.commit()
        return redirect(url_for('messages.index', id = id))
    elif request.method == b"PATCH":
        found_message.content = request.form["content"] 
        db.session.add(found_message)
        db.session.commit()
        return redirect(url_for("messages.index", id = id))
    return render_template("messages/show.html",message = found_message, form = form)

@messages_blueprint.route("/<int:message_id>/edit", methods = ["GET"])
def edit(id,message_id):
    found_user = User.query.get(id)
    found_message = Message.query.get(message_id)
    message_list = Message.query.all()
    form = MessageForm(obj = found_message)
    return render_template("/edit.html",user = found_user,message = found_message, form = form)
