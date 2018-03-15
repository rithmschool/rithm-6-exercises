from flask import Flask, request, redirect, render_template, url_for, flash, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_modus import Modus
from forms import UForm, MForm, DForm
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/users_07'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
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
        u_form = UForm(request.form)
        if u_form.validate():
            db.session.add(
                User(
                    first_name=u_form.data['first_name'],
                    last_name=u_form.data['last_name'],
                    image_url=u_form.data['image_url']))
            db.session.commit()
            flash('* User Added *')
            return redirect(url_for('index'))
        else:
            flash('* Form Incomplete *')
            return render_template('users/new.html', u_form=u_form)
    return render_template('users/index.html', users=User.query.all())


@app.route('/users/<int:u_id>/messages', methods=['GET', 'POST'])
def m_index(u_id):
    if request.method == 'POST':
        m_form = MForm(request.form)
        if m_form.validate():
            db.session.add(Message(content=m_form.data['content'], user_id=u_id))
            db.session.commit()
            flash('* Message Added *')
            return redirect(url_for('m_index', u_id=u_id))
        else:
            flash('* Form Incomplete *')
            return render_template('messages/new.html', u=User.query.get(u_id), m_form=m_form)
    return render_template(
        'messages/index.html', u=User.query.get_or_404(u_id))


@app.route('/users/new')
def new():
    return render_template('users/new.html', u_form=UForm())


@app.route('/users/<int:u_id>/messages/new')
def m_new(u_id):
    return render_template(
        'messages/new.html', u=User.query.get_or_404(u_id), m_form=MForm())


@app.route('/users/<int:u_id>/edit')
def edit(u_id):
    u = User.query.get_or_404(u_id)
    u_form = UForm(obj=u)
    d_form = DForm()
    return render_template('users/edit.html', u=u, u_form=u_form, d_form=d_form)


@app.route('/users/<int:u_id>/messages/<int:m_id>/edit')
def m_edit(u_id, m_id):
    u = User.query.get_or_404(u_id)
    m = Message.query.get_or_404(m_id)
    m_form = MForm(obj=m)
    d_form = DForm()
    return render_template('messages/edit.html', u=u, m=m, m_form=m_form, d_form=d_form)


@app.route('/users/<int:u_id>', methods=['GET', 'PATCH', 'DELETE'])
def show(u_id):
    u = User.query.get_or_404(u_id)
    if request.method == b'PATCH':
        u_form = UForm(request.form)
        if u_form.validate():
            u.first_name = u_form.data['first_name']
            u.last_name = u_form.data['last_name']
            u.image_url = u_form.data['image_url']
            db.session.add(u)
            db.session.commit()
            flash('* User Updated *')
            return redirect(url_for('m_index', u_id=u_id))
        else:
            flash('* Form Incomplete *')
            return render_template('users/edit.html', u=u, u_form=u_form)
    if request.method == b'DELETE':
        d_form = DForm(request.form)
        db.session.delete(u)
        db.session.commit()
        flash('* User Deleted *')
        return redirect(url_for('index'))
    return render_template('users/show.html', u=u)


@app.route(
    '/users/<int:u_id>/messages/<int:m_id>', methods=['PATCH', 'DELETE'])
def m_show(u_id, m_id):
    m = Message.query.get_or_404(m_id)
    if request.method == b'PATCH':
        m_form = MForm(request.form)
        if m_form.validate:
            m.content = request.form['content']
            db.session.add(m)
            db.session.commit()
            flash('* Message Updated *')
            return redirect(url_for('m_index', u_id=u_id))
        else:
            flash('* Form Incomplete *')
            return render_template('messages/edit.html', u=User.query.get(u_id), m_form=m_form)
    if request.method == b'DELETE':
        d_form = DForm(request.form)
        db.session.delete(m)
        db.session.commit()
        flash('* Message Deleted *')
        return redirect(url_for('m_index', u_id=u_id))


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


@app.errorhandler(405)
def page_not_found(error):
    return render_template('404.html'), 405
