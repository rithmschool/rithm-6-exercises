from flask import Flask, render_template, redirect, request, url_for
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy  # new line

app = Flask(__name__)
modus = Modus(app)

app.config[
    'SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/snacks-db'  # new line
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # new line
app.config['SQLALCHEMY_ECHO'] = True  # new line

db = SQLAlchemy(app)  # new line


class Snack(db.Model):  # IMPORTANT! Snack inherits from db.Model Class

    __tablename__ = "snacks"  # new line

    id = db.Column(db.Integer, primary_key=True)  # new line
    name = db.Column(db.Text)  # new line
    kind = db.Column(db.Text)  # new line

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/snacks', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('name')
        kind = request.form.get('kind')
        s = Snack(name, kind)
        db.session.add(s)  # new line
        db.session.commit()  # new line
        # snack_list.append(Snack(name, kind))
        return redirect(url_for('index'))
    return render_template('index.html', snacks=Snack.query.all())  # new query


@app.route('/snacks/new')
def new():
    return render_template('new.html')


@app.route('/snacks/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id):
    # snack = [s for s in snack_list if s.id == id][0]
    snack = Snack.query.get(id)  # new line
    if request.method == b'PATCH':
        snack.name = request.form.get('name')
        snack.kind = request.form.get('kind')
        db.session.add(snack)
        db.session.commit()
        return redirect(url_for('index'))
    if request.method == b'DELETE':
        # snack_list.remove(snack)
        db.session.delete(snack)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('show.html', snack=snack)


@app.route('/snacks/<int:id>/edit')
def edit(id):
    # snack = [s for s in snack_list if s.id == id][0]
    snack = Snack.query.get(id)
    return render_template('edit.html', snack=snack)


# if __name__ == "__main__":
#     app.run(debug=True, port=3000)
