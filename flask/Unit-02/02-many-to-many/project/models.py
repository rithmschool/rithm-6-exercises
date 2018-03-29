from project import db, bcrypt  # project refers to __init__.py
from flask_login import UserMixin

MessageTag = db.Table('message_tags',
                      db.Column("id", db.Integer, primary_key=True),
                      db.Column("message_id", db.Integer,
                                db.ForeignKey(
                                    "messages.id", ondelete="cascade")),
                      db.Column("tag_id", db.Integer,
                                db.ForeignKey("tags.id", ondelete="cascade")))


class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, nullable=False, unique=True)
    first_name = db.Column(db.Text, nullable=False)
    last_name = db.Column(db.Text, default="")
    img_url = db.Column(
        db.Text,
        default=
        "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"
    )
    about_me = db.Column(
        db.Text,
        default=
        "Lorem ipsum dolor amet heirloom chicharrones neutra poutine, mixtape brooklyn."
    )
    password = db.Column(db.Text, nullable=False)
    messages = db.relationship('Message', backref='user', lazy='dynamic')

    @classmethod
    def register(cls, username, first_name, last_name, about_me, img_url,
                 password):
        hashed = bcrypt.generate_password_hash(password)
        hashed_utf8 = hashed.decode("utf8")
        return cls(
            username=username,
            first_name=first_name,
            last_name=last_name,
            about_me=about_me,
            img_url=img_url,
            password=hashed_utf8)

    @classmethod
    def authenticate(cls, username, password):
        user = User.query.filter_by(username=username).first()
        if user:
            if bcrypt.check_password_hash(user.password, password):
                return user
        return False


class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    # other ORMs use the word "through" instead of secondary, making the relationship clearer
    tags = db.relationship(
        "Tag", secondary=MessageTag, backref=db.backref('messages'))


class Tag(db.Model):
    __tablename__ = "tags"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
