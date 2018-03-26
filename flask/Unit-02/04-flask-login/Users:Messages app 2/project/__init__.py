from flask import Flask, url_for, redirect, render_template, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
import os

bcrypt = Bcrypt()
app = Flask(__name__)
if os.environ.get('ENV') == 'production':
    # Heroku gives us an environment variable called DATABASE_URL when we add a postgres database
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/users-db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

# fix this bug
app.config['SECRET_KEY'] = 'hey'
# app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)
login_manager = LoginManager()
login_manager.init_app(app)

from project.users.views import users_blueprint
from project.messages.views import messages_blueprint
from project.tags.views import tags_blueprint

app.register_blueprint(users_blueprint, url_prefix='/users')
app.register_blueprint(
    messages_blueprint, url_prefix='/users/<int:user_id>/messages')
app.register_blueprint(
    tags_blueprint,
    url_prefix='/users/<int:user_id>/messages/<int:message_id>')


@app.route("/")
def root():
    return redirect(url_for('root_Messages'))


from project.models import Message, User


@app.route('/messages', methods=['GET', 'POST'])
def root_Messages():
    return render_template('messages.html', messages=Message.query.all())


@app.route('/login', methods=['GET'])
def root_Login():
    return render_template('login.html')
