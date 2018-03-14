from flask import Flask, request, redirect, url_for, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config[
    'SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/alekinixII"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', lazy='dynamic')

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


class Message(db.Model):

    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __init__(self, content, user_id):
        self.content = content
        self.user_id = user_id


@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/users', methods=["GET", "POST"])
def index():
    if request.method == 'POST':
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        new_user = User(first_name, last_name)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('./users/index.html', users=User.query.all())

@app.route('/users/new')
def new():
    return render_template('./users/new.html')

@app.route('/users/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):
    target_user = User.query.get(id)
    if request.method == b'PATCH':
        target_user.first_name = request.form.get('first_name')
        target_user.last_name = request.form.get('last_name')
        db.session.add(target_user)
        db.session.commit()
        return redirect(url_for('index'))
    if request.method == b'DELETE':
        db.session.delete(target_user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('/users/show.html', user=target_user)

@app.route('/users/<int:id>/edit')
def edit(id):
    target_user = User.query.get(id)
    return render_template('/users/edit.html', user=target_user)


