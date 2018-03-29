from flask import Flask, render_template, request, redirect, url_for
from flask_modus import Modus
from flask import jsonify
from snack import Snack

app = Flask(__name__)
modus = Modus(app)

snack_list = [
    Snack("gummy worms", "sour"),
    Snack("yogurt", "savory"),
    Snack("pretzels", "salty"),
    Snack("froot loops", "sweet"),
    Snack("chocolate", "bitter")
]


@app.route("/")
def root():
    return redirect(url_for("index"))


@app.route("/snacks", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        new_snack = Snack(request.form.get("name"), request.form.get("kind"))
        snack_list.append(new_snack)
        return redirect(url_for("index"))

    return render_template("index.html", snacks=snack_list)


@app.route("/snacks/new")
def new():
    return render_template("new.html")


@app.route("/snacks/<int:id>", methods=["GET", "PATCH"])
def show(id):
    found_snack = Snack.find_snack(snack_list, id)
    if found_snack is None:
        return render_template('404.html')

    if request.method == b"PATCH":
        found_snack.name = request.form["name"]
        found_snack.kind = request.form["kind"]
        return redirect(url_for("index"))
    return render_template("show.html", snack=found_snack)


@app.route("/snacks/<int:id>", methods=["DELETE"])
def destroy(id):
    found_snack = Snack.find_snack(snack_list, id)
    snack_list.remove(found_snack)
    return jsonify({"message": "deleted"}, 200)


@app.route("/snacks/<int:id>/edit")
def edit(id):
    found_snack = Snack.find_snack(snack_list, id)
    if found_snack is None:
        return render_template('404.html')
    return render_template("edit.html", snack=found_snack)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html')


if __name__ == "__main__":
    app.run(debug=True, port=3000)
