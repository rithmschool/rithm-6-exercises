from flask import Flask, redirect, url_for, render_template
from flask_modus import Modus
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
import os


app = Flask(__name__)
if os.environ.get('ENV') == 'production':
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    app.config['DEBUG'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/user-messages'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_ECHO'] = True
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

from project.users.views import users_blueprint
from project.messages.views import messages_blueprint

app.register_blueprint(users_blueprint, url_prefix='/users')
app.register_blueprint(
    messages_blueprint, url_prefix='/users/<int:user_id>/messages')


@app.route('/')
def root():
    return redirect(url_for('users.index'))


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html')
