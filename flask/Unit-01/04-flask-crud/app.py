from flask import Flask, render_template, redirect, url_for, request
from flask_modus import Modus
from snack import Snack

snack_list = [
    # Snack("Skyr", "Yogurt"),
    # Snack("Pretzel Crisps", "Pretzels"),
    # Snack("M&Ms", "Chocolate"),
    # Snack("Carrots", "Vegetables"),
    # Snack("Grapefruit", "Fruit")
]

app = Flask(__name__)
modus = Modus(app)


@app.route("/")
def root():
    return redirect(url_for('index'))


@app.route("/snacks", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # get some data from a form
        new_snack = Snack(request.form.get("name"), request.form.get("kind"))
        snack_list.append(new_snack)
        return redirect(url_for("index"))
    return render_template('index.html', snack_list=snack_list)


@app.route("/snacks/new")
def new():
    return render_template("new.html")


@app.route("/snacks/<int:id>", methods=["GET", "PATCH", "DELETE"])
def show(id):
    found_snack = next(snack for snack in snack_list if snack.id == id)
    if request.method == b"PATCH":
        found_snack.name = request.form.get("name")
        found_snack.kind = request.form.get("kind")
        return redirect(url_for('index'))
    elif request.method == b"DELETE":
        snack_list.remove(found_snack)
        return redirect(url_for('index'))

    return render_template("show.html", found_snack=found_snack)


@app.route("/snacks/<int:id>/edit")
def edit(id):
    found_snack = next(snack for snack in snack_list if snack.id == id)
    return render_template("edit.html", found_snack=found_snack)


if __name__ == "__main__":
    app.run(debug=True, port=3000)
