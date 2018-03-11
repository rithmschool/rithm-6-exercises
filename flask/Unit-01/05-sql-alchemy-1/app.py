from flask import Flask, render_template, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/bootcamps'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app)
modus = Modus(app)


class Bootcamp(db.Model):

    __tablename__ = 'bootcamps'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.text)
    location = db.Column(db.text)
    votes = db.Column(db.Integer)

    def __init__(self, name, location, votes):
        self.name = name
        self.location = location
        self.votes = votes
