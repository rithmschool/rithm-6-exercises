from flask import Flask, render_template, redirect, request, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
# from snack import Snack

# snack_list = []

app = Flask(__name__)
modus = Modus(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/snacks-db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Snack(db.Model):

    __tablename__ = "snacks"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    kind = db.Column(db.Text)

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind


# def get_snack(id):
#     return next(snack for snack in snack_list if snack.id == id)


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/snacks', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # snack_list.append(
        #     Snack(request.form.get('name'),
        #           request.form.get('kind'))
        # )
        new_snack = Snack(request.form.get('name'), request.form.get('kind'))
        db.session.add(new_snack)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('index.html', snack_list=Snack.query.all())


@app.route('/snacks/new')
def new():
    return render_template('new.html')


@app.route('/snacks/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    # found_snack = [snack for snack in snack_list if snack.id == id][0]
    # found_snack = get_snack(id)
    found_snack = Snack.query.get(id)
    if request.method == b"PATCH":
        found_snack.name = request.form['name']
        found_snack.kind = request.form['kind']
        # return redirect(url_for('index', found_snack=found_snack))
        db.session.commit()
        return render_template('show.html', found_snack=found_snack)
    if request.method == b"DELETE":
        # snack_list.remove(found_snack)
        db.session.delete(found_snack)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('show.html', found_snack=found_snack)
    # return render_template(url_for('show', found_snack=found_sn))


@app.route('/snacks/<int:id>/edit')
def edit(id):
    # found_snack = get_snack(id)
    found_snack = Snack.query.get(id)
    return render_template('edit.html', found_snack=found_snack)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
