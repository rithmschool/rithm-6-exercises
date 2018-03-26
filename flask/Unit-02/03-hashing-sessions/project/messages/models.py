from project import db
from flask_sqlalchemy import SQLAlchemy

MessageTag = db.Table('message_tags',
    db.Column('id',
            db.Integer,
            primary_key=True),
    db.Column('message_id',
            db.Integer,
            db.ForeignKey('messages.id', ondelete="cascade")),
    db.Column('tag_id',
            db.Integer,
            db.ForeignKey('tags.id', ondelete="cascade")))


class Message(db.Model):

    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    tags = db.relationship("Tag", secondary=MessageTag, backref=db.backref('messages'))