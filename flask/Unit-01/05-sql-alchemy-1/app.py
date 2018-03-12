from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/bootcamps'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app)
modus = Modus(app)


class Bootcamp(db.Model):

    __tablename__ = 'bootcamps'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    location = db.Column(db.Text)
    votes = db.Column(db.Integer)

    def __init__(self, name, location):
        self.name = name
        self.location = location
        self.votes = 0


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/bootcamps', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('name')
        location = request.form.get('location')
        db.session.add(Bootcamp(name, location))
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('index.html', bootcamps=Bootcamp.query.all())


@app.route('/bootcamps/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id):
    bootcamp = Bootcamp.query.get(id)
    if request.method == b'PATCH':
        bootcamp.name = request.form.get('name')
        bootcamp.location = request.form.get('location')
        db.session.add(bootcamp)
        db.session.commit()
        return redirect(url_for('index'))
    if request.method == 'DELETE':
        db.session.delete(bootcamp)
        db.session.commit()
        return jsonify({'message': 'bootcamp deleted'})
    return render_template('show.html', bootcamp=bootcamp)


@app.route('/bootcamps/<int:id>/up', methods=['PATCH'])
def up_vote(id):
    bootcamp = Bootcamp.query.get(id)
    bootcamp.votes += 1
    db.session.add(bootcamp)
    db.session.commit()
    return jsonify({'message': 'rank up'})


@app.route('/bootcamps/<int:id>/down', methods=['PATCH'])
def down_vote(id):
    bootcamp = Bootcamp.query.get(id)
    bootcamp.votes -= 1
    db.session.add(bootcamp)
    db.session.commit()
    return jsonify({'message': 'rank down'})


@app.route('/bootcamps/new')
def new():
    return render_template('new.html')


@app.route('/bootcamps/<int:id>/edit')
def edit(id):
    bootcamp = Bootcamp.query.get(id)
    return render_template('edit.html', bootcamp=bootcamp)


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404
