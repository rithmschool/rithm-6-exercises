from flask import Flask, render_template, request, redirect, url_for, request
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/sunset-data'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True

db = SQLAlchemy(app)
Migrate(app, db)

class Sunset(db.Model):
    __tablename__ = "sunsets"

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.Text, nullable=False)
    caption = db.Column(db.Text)
    location = db.Column(db.Text)
    beauty = db.Column(db.Integer)

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/sunsets', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        new_sunset = Sunset(image_url=request.form['image_url'], caption=request.form['caption'], location=request.form['location'], beauty=request.form['beauty'])
        db.session.add(new_sunset)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('index.html', sunset_list = Sunset.query.all())
