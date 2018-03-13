from flask import Flask, request, redirect, url_for, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/snack-redo"
modus = Modus(app)
db = SQLAlchemy(app)


class Snack(db.Model):
    __tablename__ = "snacks"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    kind = db.Column(db.Text)

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind


# snack_list = [Snack('Doritos', 'Cool Ranch'), Snack(
#     'Doritos', 'Late Night Cheeseburger')]
snack_list = []


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/snacks', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        new_snack = Snack(request.form['name'], request.form['kind'])
        db.session.add(new_snack)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('index.html', snacks=Snack.query.all())


@app.route('/snacks/new', methods=["GET"])
def new():
    return render_template('new.html')


@app.route('/snacks/<int:id>', methods=["GET", "DELETE", "PATCH"])
def show(id):
    found_snack = [snack for snack in snack_list if snack.id == id][0]
    if request.method == b'DELETE':
        snack_list.remove(found_snack)
        return redirect(url_for('index'))
    if request.method == b'PATCH':
        found_snack.name = request.form['name']
        found_snack.kind = request.form['kind']
        return redirect(url_for('show', id=found_snack.id))
    return render_template('show.html', snack=found_snack)


@app.route('/snacks/<int:id>/edit')
def edit(id):
    found_snack = [snack for snack in snack_list if snack.id == id][0]
    return render_template('edit.html', snack=found_snack)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True, port=3000)
