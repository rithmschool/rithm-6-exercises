from project import db  # project refers to __init__.py

messages_tags = db.Table('message_tags',
                         db.Column('id', db.Integer, primary_key=True),
                         db.Column('message_id', db.Integer,
                                   db.ForeignKey(
                                       'messages.id', ondelete="cascade")),
                         db.Column('tag_id', db.Integer,
                                   db.ForeignKey(
                                       'tags.id', ondelete="cascade")))


class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    messages = db.relationship(
        'Message', backref='user', cascade="delete", lazy='dynamic')


class Message(db.Model):

    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer,
                        db.ForeignKey('users.id', ondelete="cascade"))
    tags = db.relationship(
        'Tag',
        secondary=messages_tags,
        backref=db.backref('messages'),
        lazy='dynamic')


class Tag(db.Model):

    __tablename__ = "tags"

    id = db.Column(db.Integer, primary_key=True)
    label = db.Column(db.Text)
