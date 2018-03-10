from flask import Flask, render_template, redirect, request, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/snacks_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
modus = Modus(app)

snacks = []

class Snack(db.Model):

    __tablename__ = 'snacks'

    # DDL
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    kind = db.Column(db.Text)

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind

@app.route("/")
def root():
    return redirect(url_for('index'))

@app.route("/snacks", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        new_snack = Snack(request.form.get('name'), request.form.get('kind'))
        db.session.add(new_snack)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('index.html', snacks=Snack.query.all())

@app.route("/snacks/new")
def new():
    return render_template('new.html')

@app.route("/snacks/<int:id>", methods=["GET", "PATCH", "DELETE"])
def show(id):
    snack = Snack.query.get(id)
    if request.method == b"PATCH":
        # updated_snack = Snack(request.form.get('name'), request.form.get('kind'))
        snack.name = request.form.get('name')
        snack.kind = request.form.get('kind')
        db.session.add(snack)
        db.session.commit()
        return redirect(url_for('index'))

    if request.method == b"DELETE":
        db.session.delete(snack)
        db.session.commit()
        return redirect(url_for('index'))

    return render_template('show.html', snack=Snack.query.get(id))

@app.route("/snacks/<int:id>/edit")
def edit(id):
    snack = Snack.query.get(id)
    return render_template("edit.html", snack=Snack.query.get(id))


@app.errorhandler(500)
def internal_error(e):
    return render_template('500.html'), 500


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
