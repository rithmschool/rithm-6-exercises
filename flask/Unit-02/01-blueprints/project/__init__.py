from flask import Flask, request, redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from forms import AddForm, DeleteForm, AddMessage
import os

app = Flask(__name__)
if os.environ.get("ENV") == 'production':
    app.config[
        'SQLALCHEMY_DATABASE_URI'] = os.environ.get("DATABASE_URL")
else:
    app.config[
        'SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/alekinixII"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

from project.users.views import users_blueprint

app.register_blueprint(users_blueprint, url_prefex='/users')

@app.route('/')
def root():
    return redirect(url_for('index'))


