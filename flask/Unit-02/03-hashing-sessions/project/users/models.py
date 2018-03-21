from project import db
from flask_sqlalchemy import SQLAlchemy
from project.messages.models import Message
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

class User(db.Model):
    
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    username = db.Column(db.Text, nullable = False, unique = True)
    password = db.Column(db.Text, nullable = False)
    image_url = db.Column(db.Text)
    messages = db.relationship('Message', backref = 'user', lazy = 'dynamic', cascade='all, delete')

    @classmethod
    def register_user(cls, first_name, last_name, username, password, image_url):
        hashed = bcrypt.generate_password_hash(password)
        hashed_utf = hashed.decode('utf8')
        return cls(first_name = first_name, last_name = last_name, username = username, password = hashed_utf, image_url = image_url)

    @classmethod
    def login_user(cls, username, password):
        user = User.query.filter_by(username = username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            return user
        return False