from flask import Flask, render_template, redirect, request, url_for
from flask_modus import Modus
from snack import Snack

app = Flask(__name__)
modus = Modus(app)

snack_list = []


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/snacks', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('name')
        kind = request.form.get('kind')
        snack_list.append(Snack(name, kind))
        return redirect(url_for('index'))
    return render_template('index.html', snacks=snack_list)


@app.route('/snacks/new')
def new():
    return render_template('new.html')


<<<<<<< HEAD
@app.route('/snacks/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id):
    snack = [s for s in snack_list if s.id == id][0]
    if request.method == b'PATCH':
        snack.name = request.form.get('name')
        snack.kind = request.form.get('kind')
        return redirect(url_for('index'))
    if request.method == b'DELETE':
        snack_list.remove(snack)
        return redirect(url_for('index'))
    return render_template('show.html', snack=snack)
=======
@app.route('/snacks/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    target_snack = Snack.query.get(id)
    if request.method == b"PATCH":
        new_name = request.form['name']
        new_kind = request.form['kind']
        target_snack = Snack.query.get(id)
        target_snack.name = new_name
        target_snack.kind = new_kind
        db.session.add(target_snack)
        db.session.commit()
        return redirect(url_for('index'))
    elif request.method == b"DELETE":
        target_snack = Snack.query.get(id)
        db.session.delete(target_snack)
        db.session.commit()
        return redirect(url_for('index'))
    else:
        return render_template('show.html', snack=target_snack)
>>>>>>> master


@app.route('/snacks/<int:id>/edit')
def edit(id):
<<<<<<< HEAD
    snack = [s for s in snack_list if s.id == id][0]
    return render_template('edit.html', snack=snack)


if __name__ == "__main__":
    app.run(debug=True, port=3000)
=======
    target_snack = Snack.query.get(id)
    return render_template('edit.html', snack=target_snack)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def id_not_found(e):
    return render_template('500.html'), 500
>>>>>>> master
