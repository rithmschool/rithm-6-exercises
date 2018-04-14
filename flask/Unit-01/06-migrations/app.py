from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://localhost/sunsets-db"
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
        image_url = request.form.get('image_url')
        caption = request.form.get('caption')
        location = request.form.get('location')
        beauty_index = request.form.get('beauty-index')
        new_sunset = Sunset(image_url=image_url, caption=caption, location=location, beauty=beauty_index)
        db.session.add(new_sunset)
        db.session.commit()
        return redirect(url_for('index'))
    else:
        return render_template('index.html', sunsets=Sunset.query.all())
