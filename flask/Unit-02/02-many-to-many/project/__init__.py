from flask import Flask, url_for, redirect, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/07-sql-alchemy"
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.url_map.strict_slashes = False

modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

from project.users.views import users_blueprint
from project.messages.views import messages_blueprint

app.register_blueprint(users_blueprint, url_prefix='/users')
app.register_blueprint(messages_blueprint, url_prefix='/users/<int:id>/messages')

@app.route('/')
def root():
    return redirect(url_for('users.index'))


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
