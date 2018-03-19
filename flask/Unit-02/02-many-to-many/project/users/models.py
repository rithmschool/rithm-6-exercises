from project import db
from flask_sqlalchemy import SQLAlchemy
from project.messages.models import Message

class User(db.Model):
    
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    image_url = db.Column(db.Text)
    messages = db.relationship('Message', backref = 'user', lazy = 'dynamic', cascade='all, delete')