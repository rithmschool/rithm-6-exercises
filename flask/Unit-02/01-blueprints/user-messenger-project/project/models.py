from project import db


MessageTags = db.Table('mesaage_tags', 
                        db.Column('id', db.Integer,
                                        primary_key = True),
                        db.Column('message_id',
                        db.Integer,
                        db.ForeignKey('messages.id',ondelete = "cascade")),
                        
                        db.Column('tags.id',
                        db.Integer,
                        db.ForeignKey('tags.id', ondelete = "cascade")))






class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    messages = db.relationship('Message', backref = 'user', lazy = 'dynamic')

    def __init__(self,first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
    
class Message(db.Model):
    __tablename__ = "messages"

    
    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))




class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key = True)
    subject = db.Column(db.Text)

