from flask import Flask, render_template, request, redirect, url_for, request
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/bootcamps-db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
modus = Modus(app)

class Bootcamp(db.Model):
    __tablename__ = "bootcamps"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    location = db.Column(db.Text)

    def __init__(self, name, location):
        self.name = name
        self.location = location

    def __repr__(self):
        return f"This {self.name} is in {self.location}"

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/bootcamps', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        new_bootcamp = Bootcamp(request.form['name'], request.form['location'])
        db.session.add(new_bootcamp)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('index.html', bootcamp_list = Bootcamp.query.all())

@app.route('/bootcamps/new')
def new():
    return render_template('new.html')


@app.route('/bootcamps/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
   
    found_bootcamp = Bootcamp.query.get_or_404(id)
    
    if request.method == b"PATCH":
        found_bootcamp.name = request.form['name']
        found_bootcamp.kind = request.form['kind']
        db.session.add(found_bootcamp)
        db.session.commit()
        return redirect(url_for('index'))
    if request.method == b"DELETE":
        db.session.delete(found_bootcamp)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('show.html', bootcamp = found_bootcamp)


@app.route("/bootcamps/<int:id>/edit")
def edit(id):
    found_bootcamp = Bootcamp.query.get_or_404(id)
    return render_template("edit.html", bootcamp = found_bootcamp)


if __name__ == '__main__':
    app.run(debug=True, port=3000)
