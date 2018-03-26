from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import MessageForm, DeleteForm
from project.models import Message, User, Tag
from project import db

messages_blueprint = Blueprint(
    'messages',
    __name__,
    template_folder='templates'
)


@messages_blueprint.route("/", methods=["GET", "POST"])
def index(id):
    found_user = User.query.get(id)
    if request.method == "POST":
        form = MessageForm(request.form)
        form.set_choices()
        if form.validate():
            new_message = Message(content=form.data["content"],
                                  message_id=id)
            new_message.tags = []
            for tag in form.tags.data:
                new_message.tags.append(
                    Tag.query.get(tag))
            db.session.add(new_message)
            db.session.commit()
            flash("Message created!")
            return redirect(url_for("messages.index", id=found_user.id, form=form))
        return render_template("messages/new.html", id=found_user.id, form=form)
    return render_template("messages/index.html", user=found_user)


@messages_blueprint.route("/new")
def new(id):
    form = MessageForm(request.form)
    form.set_choices()
    return render_template("messages/new.html", id=id, form=form)


@messages_blueprint.route("/<int:message_id>", methods=["GET", "PATCH", "DELETE"])
def show(id, message_id):
    found_user = User.query.get(id)
    found_message = Message.query.get(message_id)
    tags = [tag for tag in found_message.tags]
    form = MessageForm(request.form)
    form.set_choices()
    delete_form = DeleteForm(request.form)
    if request.method == b"PATCH":
        if form.validate():
            found_message.content = form.data["content"]
            found_message.tags = []
            for tag in form.tags.data:
                found_message.tags.append(
                    Tag.query.get(tag))
            db.session.add(found_message)
            db.session.commit()
            flash("Message updated!")
            return redirect(url_for("messages.edit", id=found_user.id, message_id=found_message.id))
        return render_template("messages/edit.html", user=found_user, message=found_message, form=form, delete_form=delete_form)
    if request.method == b"DELETE":
        if delete_form.validate():
            db.session.delete(found_message)
            db.session.commit()
            flash("Message deleted!")
            return redirect(url_for("messages.index", id=found_user.id))
        return render_template("messages/edit.html", message=found_message, user=User.query.get(id), form=form, delete_form=delete_form)
    return render_template("messages/show.html", user=found_user, message=found_message, tags=tags)


@messages_blueprint.route("/<int:message_id>/edit")
def edit(id, message_id):
    found_user = User.query.get(id)
    found_message = Message.query.get(message_id)
    tags = [tag.id for tag in found_message.tags]
    form = MessageForm(tags=tags)
    form.set_choices()
    delete_form = DeleteForm()
    return render_template("messages/edit.html", message=found_message, user=User.query.get(id), form=form, delete_form=delete_form)
