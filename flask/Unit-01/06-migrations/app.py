from flask import Flask, render_template, redirect, url_for, request
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/sunsets-db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
Migrate(app, db)

class Sunset(db.Model):
    __tablename__ = 'sunsets'

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.Text, nullable=False)
    caption = db.Column(db.Text)
    location = db.Column(db.Text)
    beauty = db.Column(db.Integer)

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/sunsets', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        url = request.form.get('img_url')
        cap = request.form.get('caption')
        location = request.form.get('location')
        beauty = request.form.get('beauty')
        db.session.add(Sunset(img_url=url, caption=cap, location=location, beauty=beauty))
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('index.html', sunsets=Sunset.query.all())
