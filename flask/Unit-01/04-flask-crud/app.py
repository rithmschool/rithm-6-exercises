from flask import Flask, render_template, url_for, redirect, request
from flask_modus import Modus
from snack import Snack

snack_list = [Snack("Doritos","Cool Ranch")]

app = Flask(__name__)

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route("/snacks")
def index():
    return render_template("index.html", snack=Snack)

@app.route("/snacks/new")
def new():
    return render_template("new.html")

@app.route('/snacks', methods=["POST"])
def new_snack():
    name = request.form.get("name")
    kind = request.form.get("kind")
    snack_list.append(Snack(name,kind))
    return render_template("index.html", snack=Snack)

#########
# @app.route("/snacks/new")
# def new():
#   return render_template("new.html")

# @app.route('/snacks', methods=["POST"])
# def new_snack():
#     name = request.form.get("name")
#     kind = request.form.get("kind")
#     snack_list.append(Snack(name,kind))
#     return render_template("index.html", snack=Snack)

#########



if __name__ == '__main__':
    app.run(debug=True, port=3000)


