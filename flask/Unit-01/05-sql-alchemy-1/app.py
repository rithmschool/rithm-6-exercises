from flask import Flask, render_template, redirect, request, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
# from snack import Snack

# snack_list = []

app = Flask(__name__)
modus = Modus(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/computers-db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# def get_snack(id):
#     return next(snack for snack in snack_list if snack.id == id)


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/snacks', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        snack_list.append(
            Snack(request.form.get('name'),
                  request.form.get('kind'))
        )
        return redirect(url_for('index'))
    return render_template('index.html', snack_list=snack_list)


@app.route('/snacks/new')
def new():
    return render_template('new.html')


@app.route('/snacks/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    # found_snack = [snack for snack in snack_list if snack.id == id][0]
    found_snack = get_snack(id)
    if request.method == b"PATCH":
        found_snack.name = request.form['name']
        found_snack.kind = request.form['kind']
        # return redirect(url_for('index', found_snack=found_snack))
        return render_template('show.html', found_snack=found_snack)
    if request.method == b"DELETE":
        snack_list.remove(found_snack)
        return redirect(url_for('index'))
    return render_template('show.html', found_snack=found_snack)
    # return render_template(url_for('show', found_snack=found_sn))


@app.route('/snacks/<int:id>/edit')
def edit(id):
    found_snack = get_snack(id)
    return render_template('edit.html', found_snack=found_snack)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
