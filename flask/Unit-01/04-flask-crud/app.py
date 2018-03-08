from flask import Flask, render_template, redirect, request, url_for
from flask_modus import Modus
from snack import Snack

app = Flask (__name__)
modus = Modus(app)

#snack_list = [Snack('Mango','Fruit'), Snack('Almonds','Nuts')]
snack_list = []

def get_snack(id):
    return next(snack for snack in snack_list if snack.id == id)


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/snacks', methods=['GET','POST'])
def index():
    if request.method == "POST":
        snack_list.append(Snack(request.form['name'],request.form['kind']))
        return redirect(url_for('index'))
    return render_template("index.html", snacks=snack_list)


@app.route('/snacks/new')
def new():
    return render_template("new.html")


@app.route('/snacks/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    snack = get_snack(id)
    if request.method == b"PATCH":
        snack.name = request.form['name']
        snack.kind = request.form['kind']
        return render_template('show.html', snack=snack)
    elif request.method == b"DELETE":
        snack_list.remove(snack)
        return redirect(url_for('index'))
    else:
        return render_template('show.html', snack=snack)


@app.route("/snacks/<int:id>/edit")
def edit(id):
    snack = get_snack(id)
    return render_template('edit.html', snack=snack)


if __name__ == '__main__':
    app.run(debug=True, port=3000)
