from flask import Flask, redirect, url_for, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://localhost/meats-db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

db = SQLAlchemy(app)
Migrate(app, db)


class Meat(db.Model):

    __tablename__ = "meats"

    id = db.Column(db.Integer, primary_key=True)
    kind = db.Column(db.Text)
    url = db.Column(db.Text, nullable=False)
    umaminess = db.Column(db.Integer)
    price = db.Column(db.Integer)

    def __init__(self, kind, url, umaminess, price):
        self.kind = kind
        self.url = url
        self.umaminess = umaminess
        self.price = price


@app.route("/")
def root():
    return redirect(url_for('index'))


@app.route("/meats", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        kind = request.form['kind']
        url = request.form['url']
        umaminess = request.form['umaminess']
        price = request.form['price']
        new_meat = Meat(kind, url, umaminess, price)
        db.session.add(new_meat)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template("index.html", meats=Meat.query.all())
