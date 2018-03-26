from flask import Flask, redirect, url_for
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
import os

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.config[
    'SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/users-db-bcrypt"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['SECRET_KEY'] = os.environ.get("SECRET_KEY")
app.url_map.strict_slashes = False
print(os.environ.get('SECRET_KEY'))
modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)


from project.users.views import users_blueprint
from project.messages.views import messages_blueprint
from project.tags.views import tags_blueprint

app.register_blueprint(users_blueprint, url_prefix='/users')
app.register_blueprint(
    messages_blueprint, url_prefix='/users/<int:id>/messages')
app.register_blueprint(tags_blueprint, url_prefix='/tags')


@app.route("/")
def root():
    return redirect(url_for("users.index"))
