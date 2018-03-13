from flask import Flask, redirect, render_template, url_for, request, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus

app = Flask(__name__)
#app config tells to use postgress default is SQLlite
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/snacks"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
modus = Modus(app)
db = SQLAlchemy(app)


# CREATE MODEL
# inherit Model Class
class Snack(db.Model):

    __tablename__ = "snacks"  #keep table in the plaural

    #DDL operations
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    kind = db.Column(db.Text)

    ##DML
    def __init__(self, name, kind):
        self.name = name
        self.kind = kind


@app.route('/')
def root():
    return redirect('index')


@app.route('/snacks')
def index():
    return render_template('index.html', snacks=Snack.query.all())


@app.route('/snacks/new')
def new():
    return render_template('new.html')


@app.route('/snacks', methods=["POST"])
def create():
    db.session.add(Snack(request.form.get("name"), request.form.get("kind")))
    db.session.commit()
    return redirect(url_for('index'))


@app.route('/snacks/<int:id>', methods=['GET'])
def show(id):
    found_snack = Snack.query.get(id)
    return render_template('show.html', snack=found_snack)


@app.route('/snacks/<int:id>/edit')
def edit(id):
    found_snack = Snack.query.get(id)
    return render_template('edit.html', snack=found_snack)


@app.route('/snacks/<int:id>', methods=['PATCH'])
def update(id):
    found_snack = Snack.query.get(id)
    found_snack.name = request.form.get("name")
    found_snack.kind = request.form.get("kind")
    db.session.add(found_snack)
    db.session.commit()
    return redirect(url_for('index'))


@app.route('/snacks/<int:id>', methods=['DELETE'])
def destroy(id):
    found_snack = Snack.query.get(id)
    db.session.delete(found_snack)
    db.session.commit()
    return jsonify({'key': 'value'})
