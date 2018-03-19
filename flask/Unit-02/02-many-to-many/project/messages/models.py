from project import db
from flask_sqlalchemy import SQLAlchemy

class Message(db.Model):

    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))