from flask import Flask, render_template, redirect, url_for, request
from flask_sqlalchemy import flask_sqlalchemy
from flask_modus import Modus

app = Flask(__name__)
modus = Modus(app)
app.config['SQLALCHEMY_DATABASE_URL'] = 'postgres:://localhost/flask-sql'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

app.url_map.strict_slashes = False

class Bootcamp(db.Model):
    __tablename__ = "bootcamps"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    location = db.Column(db.Text)
    votes = db.Column(db.Integer)

    def __init__(self, name, location):
        self.name = name
        self.location = location
        self.votes = 0

    def __repr__(self):
        return f"{self.name} is locationed {self.location}"

@app.route('/bootcamps', methods=["GET", "POST"])
def index():
    pass

@app.route('/bootcamps/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    pass

@app.route('/bootcamps/<int:id>/edit')
def edit(id):
    pass

@app.errorhandler(404)
def page_not_found(e):
    pass

@app.errorhandler(500)
def id_not_found(e):
    pass
