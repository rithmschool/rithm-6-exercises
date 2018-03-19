from project import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    image_url = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', lazy='dynamic')


MessageTag = db.Table('message_tags',
                      db.Column('id', db.Integer, primary_key=True),
                      db.Column('message_id', db.Integer,
                                db.ForeignKey(
                                    'messages.id', ondelete='cascade')),
                      db.Column('tag_id', db.Integer,
                                db.ForeignKey('tags.id', ondelete='cascade')))


class Message(db.Model):
    __tablename__ = "messages"
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    tags = db.relationship(
        'Tag', secondary=MessageTag, backref=db.backref('messages'))


class Tag(db.Model):
    __tablename__ = 'tags'
    id = db.Column(db.Integer, primary_key=True)
    tag_name = db.Column(db.Text)
