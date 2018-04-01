################### Imports #########################

from flask import Flask, redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_debugtoolbar import DebugToolbarExtension
from flask_login import LoginManager

from os import environ

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/flask_hashing_db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = environ.get('SECRET_KEY')
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.url_map.strict_slashes = False
bcrypt = Bcrypt(app)
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
modus = Modus(app)
toolbar = DebugToolbarExtension(app)

migrate = Migrate(app, db)

from project.users.views import users_blueprint
from project.messages.views import messages_blueprint
from project.tags.views import tags_blueprint
app.register_blueprint(users_blueprint, url_prefix='/users')
app.register_blueprint(messages_blueprint, url_prefix='/users/<int:user_id>/messages')
app.register_blueprint(tags_blueprint, url_prefix='/tags')
from project.models import User, Message

login_manager.login_view = "users.login_users"

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

################### Root View Functions #########################

@app.route('/')
def root():
    '''Returns listing of all users.'''

    return redirect(url_for('users.index_users'))

@app.route('/messages')
def index_messages():
    '''Returns listing of all users.'''

    return render_template('messages/all.html', messages=Message.query.order_by('id').all())

################### 404 View Functions #########################

@app.errorhandler(404)
def page_not_found(e):
    '''400 Error Page'''

    return render_template('404.html'), 404
