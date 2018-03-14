from flask import Flask, request, redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/troll'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app,db)

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)

#user routes
@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/users')
def index():
    return render_template('user/index.html', users=User.query.all())

@app.route('/users/new')
def new():
    return render_template('user/new.html')

@app.route('/users', methods=['POST'])
def create():
    user = User(first_name=request.form.get('first_name'), last_name=request.form.get('last_name'))
    db.session.add(user)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/users/<int:id>')
def show(id):
    found_user = User.query.get(id)
    return render_template('user/show.html', user=found_user)

@app.route('/users/<int:id>/edit')
def edit(id):
    found_user = User.query.get(id)
    return render_template('user/edit.html', user=found_user)

@app.route('/users/<int:id>', methods=['PATCH'])
def update(id):
    found_user = User.query.get(id)
    found_user.first_name = request.form.get('first_name')
    found_user.last_name = request.form.get('last_name')
    db.session.add(found_user)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/users/<int:id>', methods=['DELETE'])
def destroy(id):
    found_user = User.query.get(id)
    db.session.delete(found_user)
    db.session.commit()
    return redirect(url_for('index'))
