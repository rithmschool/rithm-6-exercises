from project import db # project refers to __init__.py

class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    message = db.relationship("Message", backref="user", lazy="dynamic")

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


class Message(db.Model):

    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    message_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    def __init__(self, content, message_id):
        self.content = content
        self.message_id = message_id