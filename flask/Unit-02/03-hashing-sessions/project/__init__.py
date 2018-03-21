from flask import Flask, render_template, redirect, url_for, session, flash, g
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
from flask_migrate import Migrate

app = Flask(__name__)
modus = Modus(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/03-hashing-sessions'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'this should be a hidden key but in this exercise it really deosnt matter'

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from project.users.views import users_blueprint
app.register_blueprint(users_blueprint, url_prefix='/users')

from project.messages.views import messages_blueprint
app.register_blueprint(messages_blueprint, url_prefix='/users/<int:id>/messages')

from project.tags.views import tags_blueprint
app.register_blueprint(tags_blueprint, url_prefix='/tags')

@app.route('/')
def root():
    return redirect(url_for('welcome'))

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

@app.errorhandler(404)
def error(e):
    return render_template('404.html'), 404

from project.users.models import User

@app.before_request
def add_user_to_g():
    user_id = session.get('user_id')
    if user_id:
        user = User.query.get(user_id)
        if user is not None:
            g.user = user
        else:
            raise Exception(f"User #{user_id} missing")