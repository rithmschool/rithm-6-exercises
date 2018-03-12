from flask import Flask, request, redirect, url_for, render_template, jsonify
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
    return redirect(url_for("index"))

@app.route("/snacks")
def index():
    all_snacks = Snack.query.all()
    return render_template("index.html",all_snacks = all_snacks)
    # return jsonify({"message":"Nice!"})

@app.route("/snacks", methods = ["POST"])
def create():
    snack_name = request.form.get("name")
    snack_kind = request.form.get("kind")
    new_snack = Snack(snack_name, snack_kind)
    db.session.add(new_snack)
    db.session.commit()
    return redirect(url_for("index"))

@app.route("/snacks/new")
def new():
    return render_template("new.html")


@app.route("/snacks/<int:id>", methods=["GET"])
def show(id):
    found_snack = Snack.query.get(id)
    return render_template("show.html", snack= found_snack)

@app.route("/snacks/<int:id>/edit")
def edit(id):
    found_snack = Snack.query.get(id)
    return render_template("edit.html", snack = found_snack)

@app.route("/snacks/<int:id>", methods = ["PATCH"])
def update(id):
    found_snack = Snack.query.get(id)
    found_snack.name = request.form.get("name")
    found_snack.kind = request.form.get("kind")
    db.session.add(found_snack)
    db.session.commit()
    return redirect(url_for("index"))

@app.route("/snacks/<int:id>", methods = ["DELETE"])
def destroy(id):
    found_snack = Snack.query.get(id)
    db.session.delete(found_snack)
    db.session.commit()
    return jsonify({"key":"value"})

