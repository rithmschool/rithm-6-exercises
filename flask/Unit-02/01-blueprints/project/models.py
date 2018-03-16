from project import db  # project refers to __init__.py


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    img_url = db.Column(
        db.Text,
        default=
        "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"
    )
    about_me = db.Column(db.Text, default="lorem ipsum something or another")
    messages = db.relationship('Message', backref='user', lazy='dynamic')


class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
