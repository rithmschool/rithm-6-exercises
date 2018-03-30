from project import db  # project refers from __init__.py
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

MessageTag = db.Table('message_tag',
                      db.Column('id', db.Integer, primary_key=True),
                      db.Column('message_id', db.Integer,
                                db.ForeignKey(
                                    'messages.id', ondelete="cascade")),
                      db.Column('tag_id', db.Integer,
                                db.ForeignKey('tags.id', ondelete="cascade")))


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    username = db.Column(db.Text, nullable=False, unique=True)
    password = db.Column(db.Text, nullable=False)
    messages = db.relationship('Message', backref='user', lazy='dynamic')

    @classmethod
    def registered_user(cls, first_name, last_name, username, password):
        hashed = bcrypt.generate_password_hash(password)
        hashed_utf = hashed.decode('utf8')
        return cls(
            first_name=first_name,
            last_name=last_name,
            username=username,
            password=hashed_utf)

    @classmethod
    def login_user(cls, username, password):
        user = User.query.filter_by(username=username).first()
        if user and bcrypt.check_password_hash(user.password, password):
            return user
        return False


class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    tags = db.relationship(
        "Tag", secondary=MessageTag, backref=db.backref('messages'))


class Tag(db.Model):
    __tablename__ = "tags"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
