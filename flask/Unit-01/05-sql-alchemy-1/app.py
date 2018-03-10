from flask import Flask, render_template, request, redirect, url_for
from flask_modus import Modus
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
modus = Modus(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://localhost/05_sql_alchemy_1"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Snack(db.Model):
    __tablename__ = "snacks"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    kind = db.Column(db.Text)

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind
        # categories are: savory, salty, sweet, sour, spicy, bitter

    def __repr__(self):
        return f"This snack: {self.name}, is {self.kind}"


@app.route("/")
def root():
    return redirect(url_for("index"))


@app.route("/snacks", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        new_snack = Snack(request.form.get("name"), request.form.get("kind"))
        db.session.add(new_snack)
        db.session.commit()
        return redirect(url_for("index"))

    return render_template("index.html", snacks=Snack.query.all())


@app.route("/snacks/new")
def new():
    return render_template("new.html")


@app.route("/snacks/<int:id>", methods=["GET", "PATCH"])
def show(id):
    found_snack = Snack.query.get_or_404(id)
    if request.method == b"PATCH":
        found_snack.name = request.form["name"]
        found_snack.kind = request.form["kind"]
        db.session.add(found_snack)
        db.session.commit()
        return redirect(url_for("index"))
    return render_template("show.html", snack=found_snack)


@app.route("/snacks/<int:id>", methods=["DELETE"])
def destroy(id):
    found_snack = Snack.query.get(id)
    db.session.delete(found_snack)
    db.session.commit()
    return jsonify({"message": "deleted"})


@app.route("/snacks/<int:id>/edit")
def edit(id):
    found_snack = Snack.query.get_or_404(id)
    return render_template("edit.html", snack=found_snack)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html')


if __name__ == "__main__":
    app.run(debug=True, port=3000)
