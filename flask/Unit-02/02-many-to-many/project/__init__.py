from flask import Flask, url_for, redirect, render_template, session, flash
import functools
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, current_user
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

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "users.login"
login_manager.login_message = "Please log in!"

# Hand Made Decorators
# def require_login(fn):
#     @functools.wraps(fn)
#     def wrapped(*args, **kwargs):
#         if hasattr(g, 'user'):
#             return fn(*args, **kwargs)
#         else:
#             flash("Not authorized.")
#             return redirect(url_for("users.login"))

#     return wrapped


def prevent_login_signup(fn):
    @functools.wraps(fn)
    def wrapped(*args, **kwargs):
        if session.get('user_id'):
            flash('You are already logged in!')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)

    return wrapped


def correct_user(fn):
    @functools.wraps(fn)
    def wrapped(*args, **kwargs):
        correct_id = kwargs.get('id')
        if correct_id != current_user.id:
            flash('Not Authorized')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)

    return wrapped


######

from project.users.views import users_blueprint
from project.messages.views import messages_blueprint
from project.tags.views import tags_blueprint

app.register_blueprint(users_blueprint, url_prefix='/users')

app.register_blueprint(
    messages_blueprint, url_prefix='/users/<int:user_id>/messages')

app.register_blueprint(
    tags_blueprint,
    url_prefix='/users/<int:user_id>/messages/<int:message_id>/tags')

from project.models import Message, User


@app.route("/")
def root():
    return redirect(url_for('users.index'))


@app.route("/messages")
def messages_root():
    return render_template('messages.html', messages=Message.query.all())


@app.errorhandler(404)
def not_found(error):
    return render_template('404.html')


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


# @app.before_request
# def add_user_to_g():
#     user_id = session.get("user_id")
#     if user_id:
#         user = User.query.get(user_id)
#         if user is not None:
#             g.user = user
#         else:
#             # couldn't find user -- perhaps user deleted from db?
#             raise Exception(f"User #{user_id} missing or does not exist")
