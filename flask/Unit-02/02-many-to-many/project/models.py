from project import db, bcrypt

MessageTags = db.Table('message_tags',
db.Column('id', db.Integer, primary_key=True),
db.Column('message_id', db.Integer, db.ForeignKey('messages.id', ondelete='cascade')),
db.Column('tag_id', db.Integer, db.ForeignKey('tags.id', ondelete='cascade'))
)
class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    username = db.Column(db.Text, unique=True)
    password = db.Column(db.Text)
    messages = db.relationship(
        'Message', backref='user', lazy='dynamic', cascade='all,delete')
    tags = db.relationship('Tags', secondary=MessageTags, backref=db.backref('user'))

    @classmethod
    def authenticate(cls, username, password):
        found_user = cls.query.filter_by(username = username).first()
        if found_user:
            is_authenticated = bcrypt.check_password_hash(found_user.password, password)
            if is_authenticated:
                return found_user
        return False


class Message(db.Model):

    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete="cascade"))
    tags = db.relationship('Tag', secondary=MessageTags, backref=db.backref('messages'))

