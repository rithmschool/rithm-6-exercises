from flask import Flask, render_template, redirect, url_for, request
from snack import Snack
from flask_modus import Modus

snack_list = [Snack(
    'Snickers',
    'chocolate',
)]

app = Flask(__name__)

modus = Modus(app)


@app.route("/")
def root():
    return redirect(url_for('index'))


@app.route("/snacks")
def index():
    return render_template('index.html', snacks=snack_list)


@app.route("/snacks/new")
def new():
    return render_template('new.html')


@app.route('/snacks/<int:id>', methods=["GET", "POST", "PATCH", "DELETE"])
def show(id):
    target_snack = [snack for snack in snack_list if snack.id == id][0]
    #Create
    if request.method == "POST":
        brand = request.form.get('brand')
        category = request.form.get('category')
        snack_list.append(Snack(brand, category))
        return redirect(url_for('index'))
    # Update
    elif request.method == b"PATCH":
        target_snack.brand = request.form['brand']
        target_snack.category = request.form['category']
        return redirect(url_for('index'))
    # Destroy
    elif request.method == b"DELETE":
        snack_list.remove(target_snack)
        return redirect(url_for('index'))
    # Show
    else:
        return render_template('show.html', snack=target_snack)


@app.route('/snacks/<int:id>/edit')
def edit(id):
    target_snack = [snack for snack in snack_list if snack.id == id][0]
    return render_template('edit.html', snack=target_snack)


if __name__ == '__main__':
    app.run(debug=True, port=3000)