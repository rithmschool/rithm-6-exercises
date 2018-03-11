from flask import Flask, render_template, redirect, url_for, request, jsonify
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy

# from snack import Snack


# snack_list = []

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/snack-app-db'
modus = Modus(app)
db = SQLAlchemy(app)

class Snack(db.Model):
    # id = 1
    __tablename__ = 'snacks'
    
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.Text)
    kind = db.Column(db.Text)

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind
        # self.id = Snack.id
        # Snack.id += 1

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/snacks', methods = ['GET', 'POST', 'DELETE'])
def index():
    if request.method == 'POST':
        new_snack = Snack(request.form.get('name'), request.form.get('kind'))
        db.session.add(new_snack)
        db.session.commit()
        return redirect(url_for('index'))
    if request.method == 'DELETE':
        snack = Snack.query.get(int(request.form['id']))
        db.session.delete(snack)
        db.session.commit()
        return jsonify('deleted')
    return render_template('index.html', snack_list = Snack.query.all())

@app.route('/snacks/new')
def new():
    return render_template('new.html')

@app.route('/snacks/<int:id>', methods = ['GET', 'PATCH', 'DELETE'])
def show(id):
    snack = Snack.query.get_or_404(id)
    # if not snack:
        # return redirect("/404.html"), 404, {"Refresh": "1; url=/404.html"}
        # return redirect(url_for('page_not_found'))
    if request.method == b'PATCH':
        snack.name = request.form.get('name')
        snack.kind = request.form.get('kind')
        db.session.add(snack)
        db.session.commit()
        return redirect(url_for('show', id=snack.id))
    if request.method == b'DELETE':
        db.session.delete(snack)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('show.html', snack =snack)

@app.route('/snacks/<int:id>/edit')
def edit(id):
    snack = Snack.query.get(id)
    return render_template('edit.html', snack = snack)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

# def get_snack_by_id(id):
#     selected_snack = [ el for el in snack_list if el.id == id ][0]
#     return selected_snack

if __name__ == "__main__":
    app.run(debug = True, port = 3000)