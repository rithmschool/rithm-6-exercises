from project import db, bcrypt
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text, nullable=False)
    last_name = db.Column(db.Text, nullable=False)
    username = db.Column(db.Text, nullable=False, unique=True)
    password = db.Column(db.Text, nullable=False)
    image_url = db.Column(
        db.Text,
        default="http://www.sessionlogs.com/media/icons/defaultIcon.png")
    messages = db.relationship('Message', backref='user', lazy='dynamic')

    @classmethod
    def register(cls, first_name, last_name, username, password, image_url):
        hashed = bcrypt.generate_password_hash(password)
        hashed_utf8 = hashed.decode("utf8")
        return cls(
            first_name=first_name,
            last_name=last_name,
            username=username,
            password=hashed_utf8,
            image_url=image_url)

    @classmethod
    def authenticate(cls, username, password):

        user = User.query.filter_by(username=username).first()
        if user:
            if bcrypt.check_password_hash(user.password, password):
                return user

        return False


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
