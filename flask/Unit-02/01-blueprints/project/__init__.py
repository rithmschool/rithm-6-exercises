from flask import Flask, redirect, url_for, render_template

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_modus import Modus
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/users_07'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.url_map.strict_slashes = False
modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

from project.users.views import ubp
from project.messages.views import mbp

app.register_blueprint(ubp, url_prefix='/users')
app.register_blueprint(mbp, url_prefix='/users/<int:u_id>/messages')

@app.route('/')
def root():
    return redirect(url_for('u.index'))

@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html')
