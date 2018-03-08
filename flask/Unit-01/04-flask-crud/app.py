from flask import Flask, render_template, request, redirect, url_for
from flask_modus import Modus
from snack import Snack
from flask import jsonify

snack_list = []

app = Flask(__name__)
modus = Modus(app)


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/snacks', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form.get("name")
        kind = request.form.get("kind")
        snack_list.append(Snack(name, kind))
        return redirect(url_for('index'))
    return render_template('index.html', snack_list=snack_list)


@app.route('/snacks/new')
def new():
    return render_template('new.html')


@app.route('/snacks/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    found_snack = next(s for s in snack_list if s.id == id)
    if request.method == b"PATCH":
        found_snack.name = request.form['name']
        found_snack.kind = request.form['kind']
        return redirect(url_for('index'))
    if request.method == b"DELETE":
        snack_list.remove(found_snack)
        return redirect(url_for('index'))
    return render_template('show.html', snack=found_snack)


@app.route("/snacks/<int:id>/edit")
def edit(id):
    found_snack = next(s for s in snack_list if s.id == id)
    return render_template("edit.html", snack=found_snack)


if __name__ == '__main__':
    app.run(debug=True, port=3000)
