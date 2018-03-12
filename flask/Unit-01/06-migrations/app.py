from flask import Flask, request, render_template, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_modus import Modus

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://localhost/06-migrations"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True

db = SQLAlchemy(app)
Modus = Modus(app)
Migrate(app, db)

class Sunset(db.Model):
    __tablename__ = "sunsets"

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.Text)
    caption = db.Column(db.Text)

@app.route("/")
def root():
    return redirect(url_for("index"))

@app.route("/sunsets")
def index():
    return render_template("index.html", sunsets=Sunset.query.all())

@app.route("/sunsets/new", methods=["POST"])
def new():
    new_sunset = Sunset(image_url=request.form.get("image_url"), caption=request.form.get("caption"))
    db.session.add(new_sunset)
    db.session.commit()
    return redirect(url_for("index"))


