from flask import Flask, request, redirect, render_template, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_modus import Modus

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/pizza'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

class Pizza(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.Text, nullable=False)
    caption = db.Column(db.Text)
    location = db.Column(db.Text)
    beauty = db.Column(db.Integer)

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/pizza', methods=['GET', 'POST', 'DELETE'])
def index():
    if request.method == 'POST':
        url = request.form.get('img_url')
        cpt = request.form.get('caption')
        loc = request.form.get('location')
        bty = request.form.get('beauty')
        db.session.add(Pizza(img_url=url, caption=cpt, location=loc, beauty=bty))
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('index.html', pizza=Pizza.query.all())

@app.route('/pizza/<int:id>', methods=['DELETE'])
def destroy(id):
    pza = Pizza.query.get(id)
    db.session.delete(pza)
    db.session.commit()
    return redirect(url_for('index'))

