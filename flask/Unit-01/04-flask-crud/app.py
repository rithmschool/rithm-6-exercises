from flask import Flask, render_template, request, url_for
from snack import Snack
from flask_modus import Modus

app = Flask(__name__)
modus = Modus(app)

snack_list = []

def find_snack():
    return [snack for snack in snack_list if snack.id == id][0]

@app.route("/")
def root():
    return render_template('index.html')

@app.route("/snacks/new")
def new():
    return render_template('new.html')

@app.route("/snacks/<int:id>")
def show():
    pass

@app.route("/snacks/<int:id>/edit")
def edit():
    pass



if __name__ == 'main':
    app.run(debug=True, port=3000)
