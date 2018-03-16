from flask import Flask, render_template, redirect, request, url_for
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/flask-bootcamp-app-db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True
app.url_map.strict_slashes = False
modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

class Bootcamp(db.Model):

    __tablename__ = "bootcamps"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    location = db.Column(db.Text)
    votes = db.Column(db.Integer)

@app.route('/')
def root():
    return redirect(url_for('index'))
##############################################
@app.route('/bootcamps', methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        new_bootcamp = Bootcamp(request.form.get('name'), request.form.get('kind'))
        db.session.add(new_bootcamp)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template("index.html", bootcamps=Bootcamp.query.all())

@app.route('/bootcamps/new')
def new():
    return render_template("new.html")

@app.route('/bootcamps/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):

    found_bootcamp = Bootcamp.query.get(id)
    if found_bootcamp == None:
        return render_template("404.html")

    if request.method == b"PATCH":
        found_bootcamp.name = request.form.get('name')
        found_bootcamp.kind = request.form.get('kind')
        db.session.add(found_bootcamp)
        db.session.commit()
        return redirect(url_for('show', id=found_bootcamp.id))

    elif request.method == b"DELETE":
        db.session.delete(found_bootcamp)
        db.session.commit()
        return redirect(url_for('index'))

    else:
        return render_template('show.html', bootcamp=found_bootcamp)

@app.route("/bootcamps/<int:id>/edit")
def edit(id):
    found_bootcamp = Bootcamp.query.get(id)
    return render_template('edit.html', bootcamp=found_bootcamp)

@app.route("/bootcamps/<int:id>/vote")
def vote(id):
    found_bootcamp = Bootcamp.query.get(id)
    return render_template('edit.html', bootcamp=found_bootcamp)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True, port=3000)
