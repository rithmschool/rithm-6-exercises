from project import db  # project refers to __init__.py
from project import bcrypt

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    username = db.Column(db.Text, unique=True)
    password = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', lazy='dynamic', cascade='all, delete')

    def __init__(self, first_name, last_name, username, password):
        self.first_name = first_name
        self.last_name = last_name
        self.username = username
        self.password = password

    @classmethod
    def register(cls,first_name, last_name, username, password):
        hashed = bcrypt.generate_password_hash(password)
        hashed_utf8 = hashed.decode("utf8")
        return cls(first_name=first_name, last_name=last_name, username=username, password=hashed_utf8)

    @classmethod
    def authenticate(cls, username, password):
        user = User.query.filter_by(username=username).first()
        if user:
            if bcrypt.check_password_hash(user.password, password):
                return user
        return False


MessageTag = db.Table('message_tags',
db.Column('id', db.Integer, primary_key=True),
db.Column('message_id', db.Integer, db.ForeignKey('messages.id')),
db.Column('tag_id', db.Integer, db.ForeignKey('tags.id')))


class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    tags = db.relationship('Tag', secondary=MessageTag, backref=db.backref('messages'))

    def __init__(self, message, user_id):
        self.message = message
        self.user_id = user_id

class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text)

    def __init__(self, text):
        self.text = text


    # db.relationship allows association from one Model to another
    # find a specific user
    # access that users messages by user.messages - One user can write many messages
    # find a specific message
    # access message.user - One message can only belong to one user
    #users refers to table users and we want to get id
    #foreign key refer to a table and a column in that table hence user table column id
