from flask import Flask, render_template, redirect, url_for, request
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus

snack_list = [
    # Snack("Skyr", "Yogurt"),
    # Snack("Pretzel Crisps", "Pretzels"),
    # Snack("M&Ms", "Chocolate"),
    # Snack("Carrots", "Vegetables"),
    # Snack("Grapefruit", "Fruit")
]

app = Flask(__name__)
modus = Modus(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/snacks-db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

#db.create_all()
class Snack(db.Model):

    __tablename__ = "snacks"  # table name will default to name of the model

    # Create the three columns for our table
    id = db.Column(db.Integer, primary_key=True)  # id SERIAL PRIMARY KEY
    name = db.Column(db.Text)  # make TEXT
    kind = db.Column(db.Text)  #

    # define what each instance or row in the DB will have (id is taken care of for you)
    def __init__(self, name, kind):
        self.name = name
        self.kind = kind
        # self.id = id


@app.route("/")
def root():
    return redirect(url_for('index'))


@app.route("/snacks", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # get some data from a form
        new_snack = Snack(request.form.get("name"), request.form.get("kind"))
        db.session.add(new_snack)
        db.session.commit()
        return redirect(url_for("index"))
    return render_template('index.html', snack_list=Snack.query.all())


@app.route("/snacks/new")
def new():
    return render_template("new.html")


@app.route("/snacks/<int:id>", methods=["GET", "PATCH", "DELETE"])
def show(id):
    found_snack = Snack.query.get(id)
    # found_snack = [snack for snack in snack_list if snack.id == id]
    # if len(found_snack) is 0:
    #     return render_template('404.html')
    # found_snack = [snack for snack in snack_list if snack.id == id][0]
    if request.method == b"PATCH":
        found_snack.name = request.form.get("name")
        found_snack.kind = request.form.get("kind")
        db.session.add(found_snack)
        db.session.commit()
        return redirect(url_for('index'))
    elif request.method == b"DELETE":
        db.session.delete(found_snack)
        db.session.commit()
        # snack_list.remove(found_snack)
        return redirect(url_for('index'))

    return render_template("show.html", found_snack=found_snack)


@app.route("/snacks/<int:id>/edit")
def edit(id):
    found_snack = Snack.query.get(id)
    # if len(found_snack) == 0:
    #     return render_template('404.html')
    # found_snack = [snack for snack in snack_list if snack.id == id][0]
    return render_template("edit.html", found_snack=found_snack)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html')


if __name__ == "__main__":
    app.run(debug=True, port=3000)
