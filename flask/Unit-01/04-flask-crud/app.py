from flask import Flask, redirect, render_template, url_for, request, redirect
from flask_modus import Modus
from snack import Snack

app = Flask(__name__)
modus = Modus(app)

snack_list = [Snack("Snickers", "Candy"), Snack("Oreo", "Candy")]


@app.route('/')
def root():
    return redirect('snacks')


@app.route('/snacks')
def index():
    return render_template('index.html', snacks=snack_list)


@app.route('/snacks/new')
def new():
    return render_template('new.html')


@app.route('/snacks', methods=["POST"])
def create():
    snack_list.append(
        Snack(
            request.form.get("name_of_snack"),
            request.form.get("type_of_snack")))
    return redirect(url_for('index'))


@app.route('/snacks/<int:id>', methods=['GET'])
def show(id):
    found_snack = [snack for snack in snack_list if snack.id == id][0]
    return render_template('show.html', snack=found_snack)


@app.route('/snacks/<int:id>/edit')
def edit(id):
    found_snack = [snack for snack in snack_list if snack.id == id][0]
    return render_template('edit.html', snack=found_snack)


@app.route('/snacks/<int:id>', methods=['PATCH'])
def update(id):
    found_snack = [snack for snack in snack_list if snack.id == id][0]
    found_snack.name = request.form.get("name_of_snack")
    found_snack.type = request.form.get('type_of_snack')
    return redirect(url_for('index'))


@app.route('/snacks/<int:id>', methods=['DELETE'])
def destroy(id):
    found_snack = [snack for snack in snack_list if snack.id == id][0]
    snack_list.remove(found_snack)
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True, port=3000)
