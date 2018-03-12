from flask import Flask, render_template, redirect, url_for, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus

snack_list = []

app = Flask(__name__)
modus = Modus(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/snacks-db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

#db.create_all()
class Snack(db.Model):

    __tablename__ = "snacks"  # table name will default to name of the model

    # Create the three columns for our table
    id = db.Column(db.Integer, primary_key=True)  # id SERIAL PRIMARY KEY
    name = db.Column(db.Text)  # make TEXT
    kind = db.Column(db.Text)  #

    # define what each instance or row in the DB will have (id is taken care of for you)
    def __init__(self, name, kind):
        self.name = name
        self.kind = kind


@app.route("/")
def root():
    return redirect(url_for('index'))


@app.route("/snacks", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        new_snack = Snack(request.form.get("name"), request.form.get("kind"))
        db.session.add(new_snack)
        db.session.commit()
        return redirect(url_for("index"))
    return render_template('index.html', snack_list=Snack.query.all())


@app.route("/snacks/new")
def new():
    return render_template("new.html")


@app.route("/snacks/<int:id>", methods=["GET", "PATCH", "DELETE"])
def show(id):
    found_snack = Snack.query.get(id)
    if found_snack is None:
         return render_template('404.html')
    if request.method == b"PATCH":
        found_snack.name = request.form.get("name")
        found_snack.kind = request.form.get("kind")
        db.session.add(found_snack)
        db.session.commit()
        return redirect(url_for('index'))
    elif request.method == "DELETE":
        db.session.delete(found_snack)
        db.session.commit()
        return jsonify({"message": "deleted"})
        # return redirect(url_for('index'))

    return render_template("show.html", found_snack=found_snack)


@app.route("/snacks/<int:id>/edit")
def edit(id):
    found_snack = Snack.query.get(id)
    if found_snack is None:
         return render_template('404.html')
    return render_template("edit.html", found_snack=found_snack)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html')

