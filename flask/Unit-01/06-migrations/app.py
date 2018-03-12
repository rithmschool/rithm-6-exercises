from Flask import Flask, render_template, redirect, request, url_for
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
modus = Modus(app)

app.config['SQLALCHEMY_DATABASE_URL'] = 'postgres://localhost/sunsets-db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["SQLALCHEMY_ECHO"] = True

db = SQLAlchemy(app)
migrate = Migrate(app, db)


class Sunset(db.Model):

    __tablename__ = "sunsets"

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.Text)
    caption = db.Column(db.Text)

    def __init__(self, image_url, caption):
        self.image_url = image_url
        self.caption = caption
