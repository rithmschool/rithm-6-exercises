from project import db, bcrypt  # project refers to __init__.py

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
    username = db.Column(db.Text, unique=True)
    password = db.Column(db.Text)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    messages = db.relationship(
        'Message', backref='user', cascade="delete", lazy='dynamic')

    def __init__(self, username, password, first_name, last_name):
        self.username = username
        self.password = bcrypt.generate_password_hash(password).decode('UTF-8')
        self.first_name = first_name
        self.last_name = last_name

    @classmethod
    def authenticate(cls, username, password):
        found_user = cls.query.filter_by(username=username).first()
        if found_user:
            authenticated_user = bcrypt.check_password_hash(
                found_user.password, password)
            if authenticated_user:
                return found_user
        return False


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
