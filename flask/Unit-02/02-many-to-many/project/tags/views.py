from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.tags.forms import TagForm, DeleteForm
from project.models import Tag, Message
from project import db

tags_blueprint = Blueprint(
    'tags',
    __name__,
    template_folder='templates'
)


@tags_blueprint.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        form = TagForm(request.form)
        form.set_choices()
        if form.validate():
            new_tag = Tag(
                name=form.data["name"])
            db.session.add(new_tag)
            db.session.commit()
            flash("tag Created!")
            return redirect(url_for("tags.index", form=form))
        return render_template("tags/new.html", form=form)
    return render_template("tags/index.html", tags=Tag.query.all())


@tags_blueprint.route("/new")
def new():
    form = TagForm()
    form.set_choices()
    return render_template("tags/new.html", form=tag_form)


@tags_blueprint.route("/<int:id>", methods=["GET", "PATCH", "DELETE"])
def show(id):
    found_tag = Tag.query.get(id)
    form = TagForm(request.form)
    form.set_choices()
    delete_form = DeleteForm(request.form)
    if request.method == b"PATCH":
        if form.validate():
            found_tag.name = form.data["name"]
            db.session.add(found_tag)
            db.session.commit()
            flash("tag Edited!")
            return redirect(url_for("tags.edit", id=found_tag.id, form=form))
        return render_template("tags/edit.html", tag=found_tag, form=form, delete_form=delete_form)
    if request.method == b"DELETE":
        if delete_form.validate():
            db.session.delete(found_tag)
            db.session.commit()
            flash("tag Deleted")
            return redirect(url_for("tags.index"))
        return render_template("tags/edit.html", tag=found_tag, form=form, delete_form=delete_form)
    return render_template("tags/show.html", tag=found_tag, form=form)


@tags_blueprint.route("/<int:id>/edit")
def edit(id):
    found_tag = Tag.query.get(id)
    form = TagForm(request.form)
    delete_form = DeleteForm()
    form.set_choices()
    return render_template("tags/edit.html", tag=found_tag, form=form, delete_form=delete_form)
