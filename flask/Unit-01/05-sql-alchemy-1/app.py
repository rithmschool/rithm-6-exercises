from flask import Flask, render_template, redirect, url_for, request
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/05-flask-crud"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

modus = Modus(app)
db = SQLAlchemy(app)


class Snack(db.Model):

    __tablename__ = "snacks"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    kind = db.Column(db.Text)

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind


@app.route("/")
def root():
    return redirect(url_for('index'))


@app.route('/snacks', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        new_snack = Snack(request.form.get('name'), request.form.get('kind'))
        db.session.add(new_snack)
        db.session.commit()
        return redirect(url_for("index"))
    return render_template('index.html', snack_list=Snack.query.all())


@app.route("/snacks/new")
def new():
    return render_template("new.html")


@app.route('/snacks/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    snack = Snack.query.get_or_404(id)
    if request.method == b"PATCH":
        snack.name = request.form.get("name")
        snack.kind = request.form.get("kind")
        db.session.add(snack)
        db.session.commit()
        return redirect(url_for("show", id=snack.id))
    if request.method == b"DELETE":
        db.session.delete(snack)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('show.html', snack=snack)


@app.route(
    "/snacks/<int:id>/edit", )
def edit(id):
    return render_template('edit.html', snack=Snack.query.get(id))


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == "__main__":
    app.run(debug=True, port=3000)
