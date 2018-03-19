from project import db
#project refers to __init__.py

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

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    #why do I ONLY need this in tag? Why not in both models?
    tags = db.relationship("Tag", secondary=MessageTag, backref=db.backref('messages'))

    def __init__(self, content, user_id):
        self.content = content
        self.user_id = user_id


class Tag(db.Model):

    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    # messages = db.relationship("Message", secondary=MessageTag, backref=db.backref('tags'))

    def __init__(self, content):
        self.content = content

class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    password = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', cascade="all,delete", lazy='dynamic')

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.password = bcrypt.generate_password_hash(password).decode('UTF-8')
