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

class Message(db.Model):

    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __init__(self, content, users_id):
        self.content = content
        self.users_id = users_id

class Tag(db.Model):

    __tablename_ = "tags"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    messages_id = db.Column(db.Integer, db.ForeignKey('messages.id'))

    def __init__(self, content, messages_id):
        self.content = content
        self.messages_id = messages_id

