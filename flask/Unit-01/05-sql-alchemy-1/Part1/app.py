from flask import Flask, render_template, redirect, url_for, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/flask-sql-alchemy'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
modus = Modus(app)

class Snack(db.Model):
    __tablename__ = 'snacks'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.Text)
    kind = db.Column(db.Text)

    def __init__(self, name, kind):
        self.name = name
        self.kind = kind

db.create_all()

@app.route("/")
def root():
    return redirect(url_for('index'))


@app.route('/snacks', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('name')
        kind = request.form.get('kind')
        new_snack = Snack(name, kind)
        db.session.add(new_snack)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('index.html', snacks=snack_list)


@app.route("/snacks/new")
def new():
    return render_template('new.html')


@app.route("/snacks/<int:id>", methods=["GET", "PATCH", "DELETE"])
def show(id):
    target_snack = Snack.query.get_or_404(id)
    
    # Update
    if request.method == b"PATCH":
        target_snack.name = request.form['name']
        target_snack.kind = request.form['kind']
        db.session.add(target_snack)
        db.session.commit()
        return redirect(url_for('index'))
    # Destroy
    elif request.method == b"DELETE":
        db.session.delete(target_snack)
        db.session.commit()
        return redirect(url_for('index'))
    # Show
    else:
        return render_template('show.html', snack=target_snack)


@app.route('/snacks/<int:id>/edit')
def edit(id):
    target_snack = Snack.query.get_or_404(id)
    return render_template('edit.html', snack=target_snack)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True, port=3000)