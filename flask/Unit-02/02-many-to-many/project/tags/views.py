from flask import request, url_for, render_template, redirect, flash, Blueprint
from project.models import Tag
from project.messages.forms import DeleteForm, MessageForm
from project.tags.forms import TagForm
from project import db
tags_blueprint = Blueprint('tags', __name__, template_folder='templates')


@tags_blueprint.route('/', methods=['GET', 'POST'])
def index():
    pass


@tags_blueprint.route('/new')
def new():
    form = TagForm()
    return render_template(
        'tags/new.html', user=User.query.get(user_id), form=form)
