from flask import Flask, render_template, redirect, url_for, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://localhost/sunsets-db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
Migrate(app, db)


class Sunset(db.Model):

    __tablename__ = "sunsets"

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.Text)
    caption = db.Column(db.Text)
    location = db.Column(db.Text)
    prettiness = db.Column(db.Text)


<< << << < HEAD
    def __init__(self, image_url, caption, location, prettiness):
        self.image_url = image_url
        self.caption = caption
        self.location = location
        self.prettiness = prettiness

    # def __repr__(self):
    #     return f"This is the url {self.image_url} and this is the caption {self.caption}"


@app.route("/")
def root():
    return redirect(url_for('index'))


@app.route("/sunsets", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        data = request.form
        new_sunset = Sunset(data.get("url"),
                            data.get("caption"),
                            data.get("location"),
                            data.get("prettiness"))
        db.session.add(new_sunset)
        db.session.commit()
        return jsonify({"key": data})
    return render_template("index.html", sunsets=Sunset.query.all())
