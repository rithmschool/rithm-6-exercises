from flask import Flask, render_template, redirect, url_for, request
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
modus = Modus(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://localhost/bootcamps-db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Bootcamp(db.Model):

    __tablename__ = "bootcamps"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    location = db.Column(db.Text)

    def __init__(self, name, location):
        self.name = name
        self.location = location

    def __repr__(self):
        return f"This is the name {self.name} and the location is {self.location} with an id {self.id}"

# db.create_all()


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.route("/")
def root():
    return redirect(url_for('index'))


@app.route("/bootcamps", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        new_bootcamp = Bootcamp(request.form.get(
            "name"), request.form.get("location"))
        db.session.add(new_bootcamp)
        db.session.commit()
        return redirect(url_for("index"))
    return render_template("index.html", bootcamps=Bootcamp.query.all())


@app.route("/bootcamps/new")
def new():
    return render_template("new.html")


@app.route("/bootcamps/<int:id>", methods=["GET", "PATCH", "DELETE"])
def show(id):
    found_bootcamp = Bootcamp.query.get(id)
    if found_bootcamp == None:
        return page_not_found(404)
    if request.method == b"PATCH":
        found_bootcamp.name = request.form.get("name")
        found_bootcamp.location = request.form.get("location")
        db.session.add(found_bootcamp)
        db.session.commit()
        return redirect(url_for("index"))
    if request.method == b"DELETE":
        db.session.delete(found_bootcamp)
        db.session.commit()
        return redirect(url_for("index"))
    return render_template("show.html", bootcamp=found_bootcamp)


@app.route("/bootcamps/<int:id>/edit")
def edit(id):
    found_bootcamp = Bootcamp.query.get(id)
    if found_bootcamp == None:
        return page_not_found(404)
    return render_template("edit.html", bootcamp=found_bootcamp)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
