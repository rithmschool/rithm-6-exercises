from project import db
from flask_sqlalchemy import SQLAlchemy

class Tag(db.Model):

    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.Text)
