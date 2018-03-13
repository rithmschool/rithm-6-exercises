from flask import Flask, render_template, redirect, request, url_for
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
modus = Modus(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/sunsets-db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["SQLALCHEMY_ECHO"] = True

db = SQLAlchemy(app)
Migrate(app, db)

# two endpoints: one to render the `index` page, and one to handle the form submission when a user adds a sunset?


class Sunset(db.Model):

    __tablename__ = "sunsets"

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.Text, nullable=False)
    caption = db.Column(db.Text)
    location = db.Column(db.Text)
    beauty = db.Column(db.Integer)

    def __init__(self, image_url, caption, location, beauty):
        self.image_url = image_url
        self.caption = caption
        self.location = location
        self.beauty = beauty


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/sunsets', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        image_url = request.form.get('image_url')
        # since the form sends an empty string, change to None so nullable=False constraint is enforced
        if image_url == "":
            image_url = None
        caption = request.form.get('caption')
        location = request.form.get('location')
        beauty = request.form.get('beauty')
        s = Sunset(image_url, caption, location, beauty)
        db.session.add(s)
        db.session.commit()
        return redirect(url_for("index"))
    return render_template('index.html', sunsets=Sunset.query.all())
