from project import db  # project refers to __init__.py


class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    message = db.relationship("Message", backref="user", lazy="dynamic")

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


MessageTag = db.Table('message_tags',
                      db.Column('id', db.Integer, primary_key=True),
                      db.Column('message_id', db.Integer, db.ForeignKey('messages.id', ondelete="cascade")),
                      db.Column('tag_id', db.Integer, db.ForeignKey('tags.id', ondelete="cascade")))


class Message(db.Model):

    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    message_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    tags = db.relationship("Tag",
                           secondary=MessageTag,
                           backref=db.backref('messages'))

    def __init__(self, content, message_id):
        self.content = content
        self.message_id = message_id


class Tag(db.Model):

    __tablename__ = "tags"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)

    def __init__(self, name):
        self.name = name
