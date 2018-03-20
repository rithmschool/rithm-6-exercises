from project import db, bcrypt


class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    username = db.Column(db.Text)
    password = db.Column(db.Text)
    messages = db.relationship(
        'Message', backref='user', lazy='dynamic', cascade='all,delete')

    def __init__(self, first_name, last_name, username, password):
        self.first_name = first_name
        self.last_name = last_name
        self.username = username
        self.password = password

    @classmethod
    def register(cls, first_name, last_name, username, password):
        hashed = bcrypt.generate_password_hash(password)
        hashed_utf8 = hashed.decode('utf8')
        return cls(
            first_name, last_name, username=username, password=hashed_utf8)

    @classmethod
    def authenticate(cls, username, password):
        user = User.query.filter_by(username=username).first()
        if user:
            if bcrypt.check_password_hash(user.password, password):
                return user
        return False
