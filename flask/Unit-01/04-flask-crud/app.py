from flask import Flask, render_template, redirect, request, url_for
from flask_modus import Modus
from snack import Snack
import jinja2

app = Flask(__name__)
mouds = Modus(app)

snacks = [
    Snack('dark chocolate', 'candy'),
    Snack('beef jerky', 'protein'),
    Snack('orange', 'fruit')
]


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/snacks', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('name')
        kind = request.form.get('kind')
        snacks.append(Snack(name, kind))
        return redirect(url_for('index'))
    return render_template('index.html', snacks=snacks)


@app.route('/snacks/new')
def new():
    return render_template('new.html')


@app.route('/snacks/<id>', methods=['GET', 'POST', 'DELETE'])
def show(id):
    snack = get_snack(id)
    if request.method == b'PATCH':
        snack.name = request.form.get('name')
        snack.kind = request.form.get('kind')
        return redirect(url_for('index'))
    if request.method == 'DELETE':
        snacks.remove(snack)
        return redirect(url_for('index'))
    return render_template('show.html', snack=snack)


@app.route('/snacks/<id>/edit')
def edit(id):
    return render_template('edit.html', snack=snack)


if __name__ == '__main__':
    app.run(debug=True, port=3000)
