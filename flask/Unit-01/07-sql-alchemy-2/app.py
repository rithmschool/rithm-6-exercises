from flask import Flask, url_for, redirect, request, render_template
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/07-sql-alchemy'
app.config['SQLALCHEMY_ECHO'] = True

modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app, db)

class User(db.Model):
    
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/users', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        new_user = User(first_name = first_name, last_name = last_name)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('users/index.html')

@app.route('/users/new')
def new():
    return render_template('users/new.html')

@app.route('/users/<int:id>/edit')
def edit(id):
    return render_template('users/edit.html', id = id )

@app.route('/users/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id):
    found_user = User.query.get(id)
    if request.method == b'PATCH':
        found_user.first_name = request.form.get('first_name')
        found_user.last_name = request.form.get('last_name')
        db.session.add(found_user)
        db.session.commit()
        return redirect(url_for('show', id = id))
    if request.method == b'DELETE':
        db.session.delete(found_user)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('users/show.html', user = found_user)