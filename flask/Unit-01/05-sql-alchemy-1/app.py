from flask import Flask, render_template, redirect, request, url_for, jsonify
from flask_modus import Modus
from threading import Timer
# snack.py irrelevant with SQLAlchemy
# from snack import Snack

app = Flask(__name__)
modus = Modus(app)

snack_list = []


def get_snack(id):
    return next(snack for snack in snack_list if snack.id == id)


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
    return render_template('index.html', snack_list=snack_list)


@app.route('/snacks/new')
def new():
    return render_template('new.html')


@app.route('/snacks/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id):
    snack = get_snack(id)
    if request.method == b'PATCH':
        snack.name = request.form.get('name')
        snack.kind = request.form.get('kind')
        return redirect(url_for('index'))
    # this will fail test as test expects a byte string request
    if request.method == 'DELETE':
        snack_list.remove(snack)
        return jsonify({'message': 'snack deleted'})
    # this will fail test as test expects return render_template('show.html', snack=snack)
    return redirect(url_for('edit', id=snack.id))


@app.route('/snacks/<int:id>/edit')
def edit(id):
    snack = get_snack(id)
    return render_template('edit.html', snack=snack)


@app.errorhandler(404)
def page_not_found(error):
    return render_template('error.html'), 404


# implementing `export FLASK_APP=app.py` and `export FLASK_DEBUG=1` to `flask run from` terminal
# if __name__ == '__main__':
#     app.run(debug=True, port=3000)
