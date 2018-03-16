from flask import Flask, url_for, redirect, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/sunset'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True

db = SQLAlchemy(app)
Migrate(app, db)


class Sunset(db.Model):

    __tablename__ = "sunsets"

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.Text, nullable=False)
    caption = db.Column(db.Text)
    location = db.Column(db.Text)
    beauty = db.Column(db.Integer)

    def __init__(self, url, caption, location, beauty):
        self.url = url
        self.caption = caption
        self.location = location
        self.beauty = beauty


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/sunset', methods=["GET"])
def index():
    sunset = Sunset.query.all()
    return render_template('index.html', sunsets=sunset)


@app.route('/sunset', methods=["POST"])
def create():
    url = request.form.get('url')
    caption = request.form.get('caption')
    location = request.form.get('location')
    beauty = request.form.get('beauty')
    db.session.add(Sunset(url, caption, location, beauty))
    db.session.commit()
    return redirect(url_for('index'))
