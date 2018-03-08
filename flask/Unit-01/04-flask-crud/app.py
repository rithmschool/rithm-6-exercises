from flask import Flask, render_template, redirect, url_for, request, jsonify
from flask_modus import Modus
from snack import Snack


snack_list = []

app = Flask(__name__)
modus = Modus(app)

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/snacks', methods = ['GET', 'POST', 'DELETE'])
def index():
    if request.method == 'POST':
        new_snack = Snack(request.form.get('name'), request.form.get('kind'))
        snack_list.append(new_snack)
        return redirect(url_for('index'))
    if request.method == 'DELETE':
        snack = get_snack_by_id(int(request.form['id']))
        snack_list.remove(snack)
        return jsonify('deleted')
    return render_template('index.html', snack_list = snack_list)

@app.route('/snacks/new')
def new():
    return render_template('new.html')

@app.route('/snacks/<int:id>', methods = ['GET', 'PATCH', 'DELETE'])
def show(id):
    snack = get_snack_by_id(id)
    if request.method == b'PATCH':
        snack.name = request.form.get('name')
        snack.kind = request.form.get('kind')
        return redirect(url_for('show', id=snack.id))
    if request.method == b'DELETE':
        snack_list.remove(snack)
        return redirect(url_for('index'))
    return render_template('show.html', snack =snack)

@app.route('/snacks/<int:id>/edit')
def edit(id):
    snack = get_snack_by_id(id)
    return render_template('edit.html', snack = snack)

def get_snack_by_id(id):
    selected_snack = [ el for el in snack_list if el.id == id ][0]
    return selected_snack

if __name__ == "__main__":
    app.run(debug = True, port = 3000)