from flask import Flask, redirect, url_for, render_template, session
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_modus import Modus
from flask_debugtoolbar import DebugToolbarExtension
from functools import wraps
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/users_07'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.url_map.strict_slashes = False
modus = Modus(app)
bcrypt = Bcrypt(app)
db = SQLAlchemy(app)
Migrate(app, db)
toolbar = DebugToolbarExtension(app)

from project.users.views import users_blueprint
from project.messages.views import messages_blueprint
from project.tags.views import tags_blueprint

app.register_blueprint(users_blueprint, url_prefix='/users')
app.register_blueprint(
    messages_blueprint, url_prefix='/users/<int:user_id>/messages')
app.register_blueprint(tags_blueprint, url_prefix='/tags')


@app.route('/')
def root():
    return redirect(url_for('users.index'))


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404
