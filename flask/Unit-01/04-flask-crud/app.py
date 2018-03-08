from flask import Flask, render_template, url_for, redirect, request
from flask_modus import Modus
from snack import Snack

app = Flask(__name__)

snack_list = [Snack("Doritos","Cool Ranch")]

@app.route('/')
def root():
    return render_template("/index.html")

@app.route("/snacks/new", methods=["POST"])
def new():
    name = request.form.get("name")
    kind = request.form.get("kind")
    snack_list.append(Snack(name,kind))
    return render_template("/new.html", snack=Snack)

@app.route('/snacks', methods=["POST"])
def new_snack():
    name = request.form.get("name")
    kind = request.form.get("kind")
    snack_list.append(Snack(name,kind))
    return render_template("index.html", snack=Snack)

if __name__ == '__main__':
    app.run(debug=True, port=3000)


