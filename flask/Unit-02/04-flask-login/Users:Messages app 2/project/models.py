from project import db, bcrypt
from flask_login import UserMixin

TagMessages = db.Table('tag_message',
                       db.Column('id', db.Integer, primary_key=True),
                       db.Column('tag_id', db.Integer,
                                 db.ForeignKey('tags.id', ondelete="cascade")),
                       db.Column('message_id', db.Integer,
                                 db.ForeignKey(
                                     'messages.id', ondelete="cascade")))


class Tag(db.Model):
    __tablename__ = "tags"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    message_id = db.Column(db.Integer, db.ForeignKey('messages.id'))

    def __init__(self, name):
        self.name = name


class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    tags = db.relationship('Tag', backref='message', lazy='dynamic')

    def __init__(self, content, user_id):
        self.content = content
        self.user_id = user_id


class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', lazy='dynamic')
    password = db.Column(db.Text)

    def __init__(self, first_name, last_name, password):
        self.first_name = first_name
        self.last_name = last_name
        self.password = bcrypt.generate_password_hash(password).decode('UTF-8')

    @classmethod
    def authenticate(cls, first_name, last_name, password):
        found_user = cls.query.filter_by(first_name=first_name).first()
        if found_user:
            authenticated_user = bcrypt.check_password_hash(
                found_user.password, password)
            if authenticated_user:
                return found_user
        return False