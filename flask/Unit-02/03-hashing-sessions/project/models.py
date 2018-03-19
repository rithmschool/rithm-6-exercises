from project import db

message_tag = db.Table('message_tags',
                       db.Column('m_id', db.Integer,
                                 db.ForeignKey('messages.id')),
                       db.Column('t_id', db.Integer, db.ForeignKey('tags.id')))


class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    image_url = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', lazy='dynamic')


class Message(db.Model):

    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    tags = db.relationship('Tag', backref='message', lazy='dynamic')


class Tag(db.Model):

    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    msg_id = db.Column(db.Integer, db.ForeignKey('messages.id'))
