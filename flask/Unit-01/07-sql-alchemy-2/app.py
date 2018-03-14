from flask import Flask, render_template, redirect, request, url_for
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
modus = Modus(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/1M-db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
Migrate(app, db)


class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


@app.route('/')
def root():
    redirect(url_for('users/index'))


@app.route('/users', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        user = User(first_name, last_name)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('users/index', users=User.query.all())


@app.route('/users/new')
def new():
    return render_template('users/new')


@app.route('/users/<id>/edit')
def edit(id):
    user = User.query.get(id)
    return render_template('users/edit', user=user)


@app.route('/users/<id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id):
    user = User.query.get(id)
    if request.method == b"PATCH":
        user.first_name = request.form['first_name']
        user.last_name = request.form['last_name']
        db.session.add(user)
        db.session.commit()
        return redirect('users/index')
    if request.method == b"DELETE":
        db.session.delete(user)
        db.session.commit()
        return redirect(url_for('users/index'))
    return render_template('users/show', user=user)
