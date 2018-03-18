from flask import Flask, redirect, url_for,render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/troll'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

from project.users.views import users_blueprint
from project.messages.views import messages_blueprint
from project.tags.views import tags_blueprint

app.register_blueprint(users_blueprint, url_prefix='/users')
app.register_blueprint(messages_blueprint, url_prefix='/users/<int:user_id>/messages')
app.register_blueprint(tags_blueprint, url_prefix='/tags')


#user routes
#keep root route in __init__.py
@app.route('/')
def root():
    return redirect(url_for('users.index'))


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html', error=error), 404

# Mistakes
# dont name variables the same name as parameters or things will be undefined
# dont forget redirect or render_template after return
