from flask import Flask, redirect, request, render_template, url_for, jsonify
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/bootcamps-app'
app.config['SQLALCHEMY_ECHO'] = True
modus = Modus(app)
db = SQLAlchemy(app)

class Bootcamp(db.Model):

    __tablename__ = 'bootcamps'
    # DDL
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.Text)
    location = db.Column(db.Text)
    votes = db.Column(db.Integer)

    #DML
    def __init__(self, name, location):
        self.name = name
        self.location = location
        self.votes = 0

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/bootcamps', methods = ['GET', 'POST'])
def index():
    if request.method == 'POST':
        new_bootcamp = Bootcamp(request.form.get('name'), request.form.get('location'))
        db.session.add(new_bootcamp)
        db.session.commit()
        return redirect(url_for('index'))
    bootcamps = Bootcamp.query.order_by(Bootcamp.votes.desc())
    src = 'https://maps.googleapis.com/maps/api/staticmap?size=640x640&scale=2&maptype=roadmap\&'
    for el in bootcamps:
        location_url = el.location.split(' ')[0]
        for elem in el.location.split(' ')[1:]:
            if location_url[-1] == ',':
                location_url += elem
            else:
                location_url += '+' + elem
        src += 'markers=size:normal%7Ccolor:red%7Clabel:' + el.name[0] + '%7C' + location_url + '&'
    src += 'key=AIzaSyBWMPmIKv8AHzMHfSFzOSAVoPo2kykxRws'
    return render_template('index.html', bootcamps = bootcamps, src = src)

@app.route('/bootcamps/new')
def new():
    return render_template('new.html')

@app.route('/bootcamps/<int:id>', methods = ['GET', 'PATCH', 'DELETE'])
def show(id):
    bootcamp = Bootcamp.query.get_or_404(id)
    if request.method == b'PATCH':
        bootcamp.name = request.form.get('name')
        bootcamp.location = request.form.get('location')
        db.session.add(bootcamp)
        db.session.commit()
        return redirect(url_for('index'))
    if request.method == 'DELETE':
        db.session.delete(bootcamp)
        db.session.commit()
        return jsonify('deleted')
    location_url = bootcamp.location.split(' ')[0]
    for el in bootcamp.location.split(' ')[1:]:
        if location_url[-1] == ',':
            location_url += el
        else:
            location_url += '+' + el
    map_elems = {'marker': bootcamp.name[0], 'address': location_url}
    return render_template('show.html', bootcamp = bootcamp, map_elems = map_elems)

@app.route('/bootcamps/<int:id>/edit')
def edit(id):
    bootcamp = Bootcamp.query.get_or_404(id)
    return render_template('edit.html', bootcamp = bootcamp)

@app.route('/bootcamps/<int:id>/vote', methods = ['PATCH'])
def up_vote(id):
    bootcamp = Bootcamp.query.get_or_404(id)
    if request.form['action'] == 'up_vote':
        bootcamp.votes += 1
    elif request.form['action'] == 'down_vote':
        bootcamp.votes -= 1
    db.session.add(bootcamp)
    db.session.commit()
    return jsonify(bootcamp.votes)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404