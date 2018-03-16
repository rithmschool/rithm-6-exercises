from project import db
from flask_sqlalchemy import SQLAlchemy

class User(db.Model):
    
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    image_url = db.Column(db.Text)