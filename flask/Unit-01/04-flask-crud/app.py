from flask import Flask, render_template, redirect, url_for, request
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus

app = Flask(__name__)
modus = Modus(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/flask-sql'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

app.url_map.strict_slashes = False

class Snack(db.Model):

    __tablename__ = "snacks"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    kind = db.Column(db.Text)


    def __init__(self, name, kind):
        self.name = name
        self.kind = kind

    def __repr__(self):
        return f"{self.name} is a {self.kind} kind of snack"


@app.route('/snacks', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form.get('name')
        kind = request.form.get('kind')
        new_snack = Snack(name, kind)
        db.session.add(new_snack)
        db.session.commit()
        return redirect(url_for('index'))
    else:
        snacks = Snack.query.all()
        return render_template('index.html', snacks=snacks)


@app.route('/snacks/new')
def new():
    return render_template('new.html')


@app.route('/snacks/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    target_snack = Snack.query.get(id)
    if request.method == b"PATCH":
        new_name = request.form.get('name')
        new_kind = request.form.get('kind')
        target_snack.name = new_name
        target_snack.kind = new_kind
        db.session.add(target_snack)
        db.session.commit()
        return redirect(url_for('index'))
    elif request.method == b"DELETE":
        target_snack = Snack.query.get(id)
        db.session.delete(target_snack)
        db.session.commit()
        return redirect(url_for('index'))
    else:
        return render_template('show.html', snack=target_snack)


@app.route('/snacks/<int:id>/edit')
def edit(id):
    target_snack = Snack.query.get(id)
    return render_template('edit.html', snack=target_snack)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def id_not_found(e):
    return render_template('500.html'), 500
