from project import db, bcrypt
from flask_login import UserMixin

MessageTag = db.Table('message_tags',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('message_id', db.Integer, db.ForeignKey('messages.id', ondelete='cascade')),
    db.Column('tag_id', db.Integer, db.ForeignKey('tags.id', ondelete='cascade')))


class User(db.Model, UserMixin):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    username = db.Column(db.Text, unique=True)
    password = db.Column(db.Text)
    image_url = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', lazy='dynamic', cascade='all, delete')

    @classmethod
    def authenticate(cls, username, password):
        user = cls.query.filter_by(username = username).first()
        if user:
            authenticated_user = bcrypt.check_password_hash(user.password, password)
            if authenticated_user:
                return user
        return False


class Message(db.Model):

    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    tags = db.relationship('Tag', secondary=MessageTag, backref='messages', lazy='dynamic')


class Tag(db.Model):

    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
