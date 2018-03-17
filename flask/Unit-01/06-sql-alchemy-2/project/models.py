from project import db  # project refers to __init__.py


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    # db.relationship allows association from one Model to another
    messages = db.relationship('Message', backref='user', lazy='dynamic')

    # find a specific user
    # access that users messages by user.messages - One user can write many messages
    # find a specific message
    # access message.user - One message can only belong to one user


class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.Text)
    #users refers to table users and we want to get id
    #foreign key refer to a table and a column in that table hence user table column id
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
