from flask import Flask, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
from flask_migrate import Migrate

app = Flask(__name__)
modus = Modus(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/02-many-to-many'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'this should be a hidden key but in this exercise it really deosnt matter'

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from project.users.views import users_blueprint
app.register_blueprint(users_blueprint, url_prefix='/users')

from project.messages.views import messages_blueprint
app.register_blueprint(messages_blueprint, url_prefix='/users/<int:id>/messages')

@app.route('/')
def root():
    return redirect(url_for('users.index'))

@app.errorhandler(404)
def error(e):
    return render_template('404.html'), 404

