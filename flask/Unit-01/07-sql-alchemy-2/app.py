from flask import Flask, request, redirect, render_template, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_modus import Modus

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/users_07'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.url_map.strict_slashes = False
modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)


class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    image_url = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', lazy='dynamic')


class Message(db.Model):

    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/users', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        db.session.add(
            User(
                first_name=request.form['f'],
                last_name=request.form['l'],
                image_url=request.form['i']))
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('users/index.html', users=User.query.all())


@app.route('/users/<int:u_id>/messages', methods=['GET', 'POST'])
def m_index(u_id):
    if request.method == 'POST':
        db.session.add(Message(content=request.form['c'], user_id=u_id))
        db.session.commit()
        return redirect(url_for('m_index', u_id=u_id))
    return render_template('messages/index.html', u=User.query.get(u_id))


@app.route('/users/new')
def new():
    return render_template('users/new.html')


@app.route('/users/<int:u_id>/messages/new')
def m_new(u_id):
    return render_template('messages/new.html', u=User.query.get(u_id))


@app.route('/users/<int:u_id>/edit')
def edit(u_id):
    return render_template('users/edit.html', u=User.query.get(u_id))


@app.route('/users/<int:u_id>/messages/<int:m_id>/edit')
def m_edit(u_id, m_id):
    return render_template(
        'messages/edit.html',
        u=User.query.get(u_id),
        m=Message.query.get(m_id))


@app.route('/users/<int:u_id>', methods=['GET', 'PATCH', 'DELETE'])
def show(u_id):
    u = User.query.get(u_id)
    if request.method == b'PATCH':
        u.first_name = request.form['f']
        u.last_name = request.form['l']
        u.image_url = request.form['i']
        db.session.add(u)
        db.session.commit()
        return redirect(url_for('show', u_id=u_id))
    if request.method == b'DELETE':
        db.session.delete(u)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('users/show.html', u=u)


@app.route(
    '/users/<int:u_id>/messages/<int:m_id>', methods=['PATCH', 'DELETE'])
def m_show(u_id, m_id):
    m = Message.query.get(m_id)
    if request.method == b'PATCH':
        m.content = request.form['c']
        db.session.add(m)
        db.session.commit()
        return redirect(url_for('m_index', u_id=u_id))
    if request.method == b'DELETE':
        db.session.delete(m)
        db.session.commit()
        return redirect(url_for('m_index', u_id=u_id))
