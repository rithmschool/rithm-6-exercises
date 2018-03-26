from flask import Flask, url_for, redirect, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os
from os import environ

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/users-messages"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
# print(os.environ.get('SECRET_KEY')) - this was to check that the secret key was getting through!
db = SQLAlchemy(app)

modus = Modus(app)
# this is for method override, basically it allows to feed a different http verb instead of just POST/GET

migrate = Migrate(app, db)
# Migrate is now able to access the app and database (it can now connect)

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
    return render_template('404.html'), 404
