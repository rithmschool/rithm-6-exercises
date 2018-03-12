from flask import Flask, request, redirect, url_for, render_template
from flask_modus import Modus
from snack import Snack

app = Flask(__name__)
modus = Modus(app)

snacks = []


@app.route('/')
def root():
    return render_template("index.html")


@app.route('/snacks', methods=["GET", "POST"])
def index():
    return render_template('index.html', snacks=snacks)


@app.route('/snacks/new', methods=["GET", "POST"])
def new():
    return render_template('new.html')


@app.route('/snacks/<int:id>', methods=["GET", "POST"])
def show(id):
    found_snack = [snack for val in snacks if snacks.id == id][0]
    return render_template('show.html', snack=found_snack)


@app.route('/snacks/<int:id>/edit')
def edit(id):
    found_snack = find_snack(id)
    if request.method == b'PATCH':
        found_snack.name = request.form['name']
        found_snack.variety = request.form['variety']
        return redirect(url_for('index'))
    if request.method == b'DELETE':
        snacks.remove(found_snack)
        return redirect(url_for('index'))
    return render_template('edit.html, snack=found_snack')


if __name__ == '__main__':
    app.run(debug=True, port=3000)
