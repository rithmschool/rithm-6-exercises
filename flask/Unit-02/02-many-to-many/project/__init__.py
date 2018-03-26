from flask import Flask, redirect, url_for, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
import os
from flask_login import LoginManager

app = Flask(__name__)
modus = Modus(app)
bcrypt = Bcrypt(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "users.login"

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/1M-db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from project.users.views import users_blueprint
from project.messages.views import messages_blueprint
from project.tags.views import tags_blueprint

app.register_blueprint(users_blueprint, url_prefix='/users')
app.register_blueprint(
    messages_blueprint, url_prefix='/users/<int:id>/messages')
app.register_blueprint(tags_blueprint, url_prefix='/users/<int:id>/tags')


@app.route('/')
def root():
    return redirect(url_for('users.login'))


@app.route('/messages')
def messages():
    return render_template('messages.html')


from project.models import User


@login_manager.user_loader
def load_user(id):
    return User.query.get(int(id))
