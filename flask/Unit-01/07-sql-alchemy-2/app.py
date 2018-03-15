from flask import Flask, url_for, redirect, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
from flask_migrate import Migrate

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/users-messages"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

modus = Modus(app)
# this is for method override, basically it allows to feed a different http verb instead of just POST/GET

migrate = Migrate(app, db)
# Migrate is now able to access the app and database (it can now connect)


class User (db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    messages = db.relationship('Message', backref='user', lazy='dynamic')

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name


class Message (db.Model):

    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    def __init__(self, content, user_id):
        self.content = content
        self.user_id = user_id


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/users')
def index():
    return render_template('users/index.html', users=User.query.all())


@app.route('/users/new')
def new():
    return render_template('users/new.html')


@app.route('/users/<int:id>')
def show(id):
    return render_template('users/show.html', user=User.query.get(id))


@app.route('/users/<int:id>/edit')
def edit(id):
    return render_template('users/edit.html', user=User.query.get(id))


@app.route('/users', methods=['POST'])
def create():
    new_user = User(request.form.get('first_name'),
                    request.form.get('last_name'))
    db.session.add(new_user)
    db.session.commit()
    return redirect(url_for('index'))


@app.route('/users/<int:id>', methods=['PATCH'])
def update(id):
    user = User.query.get(id)
    user.first_name = request.form.get('first_name')
    user.last_name = request.form.get('last_name')
    db.session.add(user)
    db.session.commit()
    return redirect(url_for('index'))


@app.route('/users/<int:id>', methods=['DELETE'])
def destroy(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return redirect(url_for('index'))


@app.route('/users/<int:user_id>/messages')
def message(user_id):
    user = User.query.get(user_id)
    return render_template('users/index.html', user=user)


@app.route('/users/<int:user_id>/messages/new')
def new_message(user_id):
    user = User.query.get(user_id)
    return render_template('users/new.html', user=user)

# @app.route('/users/<int:user_id>/messages/<int:id>')
# def show_message(user_id, id):
#     pass


@app.route('/users/<int:user_id>/messages/<int:id>/edit')
def edit_message(user_id, id):
    return render_template('messages/edit.html', message=Message.query.get(id))


@app.route('/users/<int:user_id>/messages', methods=['POST'])
def post_new_message(user_id):
    message = Message(request.form.get('content'), user_id)
    db.session.add(message)
    db.session.commit()
    return redirect(url_for('message', user_id=message))


@app.route('/users/<int:user_id>/messages/<int:id>', methods=['PATCH'])
def update_message(user_id, id):
    message = Message.query.get(id)
    message.content = request.form.get('content')
    db.session.add(message)
    db.session.commit()
    return redirect(url_for('message', user_id=user_id))


@app.route('/users/<int:user_id>/messages/<int:id>', methods=['DELETE'])
def delete_message(user_id, id):
    message = Message.query.get(id)
    db.session.delete(message)
    db.session.commit()
    return redirect(url_for('message', user_id=user_id))


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True, port=3000)
