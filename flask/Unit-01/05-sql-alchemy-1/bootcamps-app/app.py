from flask import Flask, redirect, request, render_template, url_for, jsonify
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/bootcamps-app"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

modus = Modus(app)
db = SQLAlchemy(app)


class Bootcamp(db.Model):

    __tablename__ = "bootcamps"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    location = db.Column(db.Text)
    votes = db.Column(db.Integer)

    def __init__(self, name, location, votes):
        self.name = name
        self.location = location
        self.votes = votes


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/bootcamps', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        new_bootcamp = Bootcamp(
            request.form.get('name'), request.form.get('location'), 0)
        db.session.add(new_bootcamp)
        db.session.commit()
        return redirect(url_for('index'))

    return render_template('index.html', bootcamps=Bootcamp.query.all())


@app.route('/bootcamps/new')
def new():
    return render_template('new.html')


@app.route('/bootcamps/<int:id>', methods=['GET', 'PATCH'])
def show(id):
    bc = Bootcamp.query.get_or_404(id)
    if request.method == b'PATCH':
        bc.name = request.form.get('name')
        bc.location = request.form.get('location')
        db.session.add(bc)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('show.html', bc=bc)


@app.route('/bootcamps/<int:id>/edit')
def edit(id):
    bc = Bootcamp.query.get_or_404(id)
    return render_template('edit.html', bc=bc)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
