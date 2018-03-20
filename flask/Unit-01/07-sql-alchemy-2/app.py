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
    messages = db.relationship(
        'Message', backref='user', lazy='dynamic', cascade='all,delete')

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


class Message(db.Model):

    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __init__(self, content, user_id):
        self.content = content
        self.user_id = user_id


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/users', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        user = User(first_name, last_name)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('users/index.html', users=User.query.all())


@app.route('/users/new')
def new():
    return render_template('users/new.html')


@app.route('/users/<int:id>/edit')
def edit(id):
    user = User.query.get(id)
    return render_template('users/edit.html', user=user)


@app.route('/users/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id):
    user = User.query.get(id)
    if request.method == b"PATCH":
        user.first_name = request.form['first_name']
        user.last_name = request.form['last_name']
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('index'))
    if request.method == b"DELETE":
        db.session.delete(user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('users/show.html', user=user)


# MESSAGE VIEW FUNCTIONS START HERE


@app.route('/users/<int:id>/messages', methods=['GET', 'POST'])
def msg_index(id):
    user = User.query.get(id)
    if request.method == 'POST':
        content = request.form['content']
        msg = Message(content, id)
        db.session.add(msg)
        db.session.commit()
        return redirect(url_for('msg_index', id=id))
    return render_template('messages/index.html', user=user)


@app.route('/users/<int:id>/messages/new')
def msg_new(id):
    user = User.query.get(id)
    return render_template('messages/new.html', user=user)


@app.route('/users/<int:id>/messages/<int:msg_id>/edit')
def msg_edit(id, msg_id):
    message = Message.query.get(msg_id)
    return render_template('messages/edit.html', message=message)


@app.route(
    '/users/<int:id>/messages/<int:msg_id>',
    methods=['GET', 'PATCH', 'DELETE'])
def msg_show(id, msg_id):
    message = Message.query.get(msg_id)
    if request.method == b"PATCH":
        message.content = request.form['content']
        db.session.add(message)
        db.session.commit()
        return redirect(url_for('msg_index', id=id))
    if request.method == b"DELETE":
        db.session.delete(message)
        db.session.commit()
        return redirect(url_for('msg_index', id=id))
    return render_template('messages/show.html', message=message)
