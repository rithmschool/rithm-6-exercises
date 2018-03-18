from project import db  # project refers to __init__.py


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', lazy='dynamic')

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __init__(self, message, user_id):
        self.message = message
        self.user_id = user_id




    # db.relationship allows association from one Model to another
    # find a specific user
    # access that users messages by user.messages - One user can write many messages
    # find a specific message
    # access message.user - One message can only belong to one user
    #users refers to table users and we want to get id
    #foreign key refer to a table and a column in that table hence user table column id
