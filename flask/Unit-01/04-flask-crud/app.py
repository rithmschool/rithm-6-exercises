from flask import Flask, render_template, redirect, url_for, request
from flask_modus import Modus
from snack import Snack

app = Flask(__name__)
modus = Modus(app)

snack_list = []
# snack_list.append(Snack('bread', 'carb'))
# snack_list.append(Snack('prletzel', 'carb'))
# snack_list.append(Snack('sausage', 'invigorating'))
# snack_list.append(Snack('melted butter', 'carb?'))
# snack_list.append(Snack('carrot', 'vegetable'))


@app.route('/snacks', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        name = request.form.get('name')
        kind = request.form.get('kind')
        snack_list.append(Snack(name, kind))
        return redirect(url_for('index'))
    else:
        return render_template('index.html', snacks=snack_list)


@app.route('/snacks/new')
def new():
    return render_template('new.html')


@app.route('/snacks/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    target_snack = [snack for snack in snack_list if snack.id == id][0]
    if request.method == b"PATCH":
        target_snack.name = request.form['name']
        target_snack.kind = request.form['kind']
        return redirect(url_for('index'))
    elif request.method == b"DELETE":
        snack_list.remove(target_snack)
        return redirect(url_for('index'))
    else:
        return render_template('show.html', snack=target_snack)


@app.route('/snacks/<int:id>/edit')
def edit(id):
    target_snack = [snack for snack in snack_list if snack.id == id][0]
    return render_template('edit.html', snack=target_snack)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
