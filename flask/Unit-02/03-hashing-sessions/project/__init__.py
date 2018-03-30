from flask import Flask, request, redirect, url_for, render_template, session, flash, g
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_debugtoolbar import DebugToolbarExtension

import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/zoran-hashing"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)
toolbar = DebugToolbarExtension(app)

from project.users.views import users_blueprint
from project.messages.views import messages_blueprint
from project.tags.views import tags_blueprint

app.register_blueprint(users_blueprint, url_prefix='/users')
app.register_blueprint(tags_blueprint, url_prefix='/tags')
app.register_blueprint(
    messages_blueprint, url_prefix='/users/<int:user_id>/messages')

from project.models import User


@app.before_request
def add_user_to_g():
    user_id = session.get("user_id")
    if user_id:
        user = User.query.get(user_id)
        if user is not None:
            print(f"BEFORE REQUEST: user is {user}")
            g.user = user
        else:
            raise Exception(f"User #{user_id} missing")


@app.route('/')
def root():
    return redirect(url_for('users.login'))


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html')
