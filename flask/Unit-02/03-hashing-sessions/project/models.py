from project import db

################### Classes #########################

class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    image_url = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', lazy='dynamic', cascade='all, delete')

    def __init__(self, first_name, last_name, image_url):
        self.first_name = first_name
        self.last_name = last_name
        self.image_url = image_url


MessageTag = db.Table('messages_tags',
                    db.Column('id', db.Integer, primary_key=True),
                    db.Column('message_id', db.Integer, db.ForeignKey('messages.id', ondelete='cascade')),
                    db.Column('tag_id', db.Integer, db.ForeignKey('tags.id', ondelete='cascade')))


class Message(db.Model):

    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __init__(self, content, users_id):
        self.content = content
        self.users_id = users_id


class Tag(db.Model):

    __tablename__ = "tags"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    messages = db.relationship("Message", backref=db.backref('tags'), secondary=MessageTag)

    def __init__(self, content):
        self.content = content
