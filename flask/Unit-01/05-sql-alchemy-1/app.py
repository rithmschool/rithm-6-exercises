from flask import Flask, request, redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/snacks"
modus = Modus(app)
db = SQLAlchemy(app)

class Snack(db.Model):
    __tablename__ =  "snacks"

    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.Text)
    kind = db.Column(db.Text)

    def __init__(self,name,kind):
        self.name = name
        self.kind = kind

@app.route("/")
def root():
    return redirect(ur_for("index"))

@app.route("/snacks")
def index():
    all_snacks = Snacks.query.all()
    return render_template("index.html",all_snacks)

@app.route("/snacks", methods = ["POST"])
def create():
    snack_name = request.form.get("name")
    snack_kind = request.form.get("kind")
    new_snack = Snack(snack_name, snack_kind)
    db.session.add(new_snack)
    db.session.commit()
    return redirect(url_for("index"))

@app.route("/snacks/<int:id>", methods=["GET"])
def show(id):
    found_snack = first_computer = Computer.query.get(id)
    return render_template("show.html", found_snack= found_snack)

@app.route("/snacks/<int:id>/edit")
def edit()
    found_snack = first_computer = Computer.query.get(id)
    return render_template("edit.html", found_snack = found_snack)






