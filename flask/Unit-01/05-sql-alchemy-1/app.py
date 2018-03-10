from flask import Flask, render_template, redirect, request, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
# from threading import Timer
# snack.py irrelevant with SQLAlchemy
# from snack import Snack

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/snacks'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app)
modus = Modus(app)

# replaced by database
# snack_list = []


class Snack(db.Model):

    __tablename__ = 'snacks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    kind = db.Column(db.Text)

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind

    # replaced by Model
    # def get_snack(id):
    #     return next(snack for snack in snack_list if snack.id == id)


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/snacks', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('name')
        kind = request.form.get('kind')
        db.session.add(Snack(name, kind))
        db.session.commit()
        # snack_list.append(Snack(name, kind))
        return redirect(url_for('index'))
    return render_template('index.html', snack_list=Snack.query.all())


@app.route('/snacks/new')
def new():
    return render_template('new.html')


@app.route('/snacks/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id):
    snack = Snack.query.get(id)
    # snack = get_snack(id)
    if request.method == b'PATCH':
        snack.name = request.form.get('name')
        snack.kind = request.form.get('kind')
        db.session.add(snack)
        db.session.commit()
        return redirect(url_for('index'))
    # this will fail test as test expects a byte string request
    if request.method == 'DELETE':
        db.session.delete(snack)
        db.session.commit()
        # snack_list.remove(snack)
        return jsonify({'message': 'snack deleted'})
    # this will fail test as test expects return render_template('show.html', snack=snack)
    return redirect(url_for('edit', id=snack.id))


@app.route('/snacks/<int:id>/edit')
def edit(id):
    snack = Snack.query.get(id)
    # snack = get_snack(id)
    return render_template('edit.html', snack=snack)


@app.errorhandler(404)
def page_not_found(error):
    return render_template('error.html'), 404


# implementing `export FLASK_APP=app.py` and `export FLASK_DEBUG=1` to `flask run from` terminal
# if __name__ == '__main__':
#     app.run(debug=True, port=3000)
