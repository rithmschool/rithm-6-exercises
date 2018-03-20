from flask import Flask, url_for, redirect, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
from flask_migrate import Migrate
from flask_debugtoolbar import DebugToolbarExtension
from flask_bcrypt import Bcrypt
# from forms import UserForm, MessageForm, DeleteForm
import os

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/users-db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)
toolbar = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

from project.users.views import users_blueprint
from project.messages.views import messages_blueprint
from project.tags.views import tags_blueprint

app.register_blueprint(users_blueprint, url_prefix='/users')

app.register_blueprint(
    messages_blueprint, url_prefix='/users/<int:user_id>/messages')

app.register_blueprint(
    tags_blueprint,
    url_prefix='/users/<int:user_id>/messages/<int:message_id>/tags')

from project.models import Message


@app.route("/")
def root():
    return redirect(url_for('users.index'))


@app.route("/messages")
def messages_root():
    return render_template('messages.html', messages=Message.query.all())


@app.errorhandler(404)
def not_found(error):
    return render_template('404.html')
