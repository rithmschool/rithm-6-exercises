from flask import request, url_for, render_template, redirect, flash, Blueprint
from project.models import Tag
from project.messages.forms import DeleteForm, MessageForm, TagForm
from project import db
tags_blueprint = Blueprint('tags', __name__, template_folder='templates')


@tags_blueprint.route('/', methods=['GET', 'POST'])
def index:

@tags_blueprint.route('/new')
def new:

