from flask import Flask, request, redirect, url_for, render_template, session, flash, g
from flask_modus import Modus
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from forms.users.forms import  NewUserForm, UserLogin
from forms.restaurants.forms import NewRestaurant
from functools import wraps
import os


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://localhost/users-restaurants"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
modus = Modus(app)
db = SQLAlchemy(app)
Migrate(app,db)
bcrypt = Bcrypt()


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.Text)
    first_name = db.Column(db.Text)
    last_name = db.Column(db.Text)
    restaurants = db.relationship('Restaurant', backref = "user", lazy = "dynamic")
    password = db.Column(db.Text)
    bcrypt = Bcrypt()

    @classmethod
    def register(cls, first_name, last_name, username, password):
        hashed = bcrypt.generate_password_hash(password)
        hashed_utf8 = hashed.decode('utf8')
        user = User(first_name = first_name,last_name = last_name,username = username, password = hashed_utf8)
        db.session.add(user)
        db.session.commit()
        return cls(first_name = first_name, last_name = last_name, password = hashed_utf8)


    @classmethod
    def authenticate(cls, username, password):
        user = User.query.filter_by(username = username).first()
        if user:
            if bcrypt.check_password_hash(user.password, password):
                return user
            return False



class Restaurant(db.Model):
    __tablename__ = "restaurants"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.Text)
    city = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __init__(self, name, city):
        self.name = name
        self.city = city


@app.before_request
def add_user():
    user_id = session.get("user_id")   # 17 or None
    if user_id:
        user = User.query.get(user_id)
        if user is not None:
            g.user = user
        else:
            return render_template('users/no_access.html')

@app.route("/")
def root():
    return render_template("users/welcome.html")


@app.route("/users/signup", methods = ["GET", "POST"])
def signup():
    form = NewUserForm(request.form)
    if request.method == "POST" and form.validate():
        username = request.form.get("username")
        first_name = request.form.get("first_name")
        last_name = request.form.get("last_name")
        password = request.form.get("password")
        User.register(first_name, last_name, username, password)
        return redirect(url_for('login'))
    else:
        return render_template('users/register.html', form = form)   

@app.route("/users/login", methods = ["POST", "GET"])
def login():
    form = UserLogin(request.form)
    if request.method == "POST" and form.validate():
        username = request.form.get("username")
        password = request.form.get("password")
        user = User.authenticate(username, password)
        if user:
            session['user_id'] = user.id 
            flash("Logged In")
            # return render_template("users/show.html", id = user.id)
            url = url_for("show", id=user.id)
            return redirect(url)
        flash("Invalid Login")
    return render_template("users/login.html", form = form)

@app.route("/users/logout")
def logout():
    if "user_id" in session:
        del session["user_id"]
    flash("Logged Out")
    return redirect(url_for("login"))

@app.route("/users/<int:id>", methods = ["GET"])
def show(id):
    print(f"user is {g.user}")
    found_user = User.query.get(id)
    return render_template("users/show.html", user = found_user)

def require_login(fn):
    @functools.wraps(fn)
    def wrapped(*args, **kwargs):
        if hasattr(g, 'user'):
            return fn(*args, **kwargs)
        else:
            flash('Not Authorized')
            return redirect(url_for('login'))
    return wrapped


@app.route("/users/<int:id>/restaurants/show")
@require_login
def show_restaurants():
    if request.method == "POST":
       form = NewRestaurant(request.form)
       if form.validate():
           new_restauraunt = Restaurant(request.form['name'],request.form['city'])
           db.session.add(new_restaurant)
           db.session.commit()
           flash("Restaurant Added")
           return redirect(url_for('show_restaurants'))
        else:
            return render_template('restaurnats/new.html', form = form)
    return render_template("restaurants/show.html", restaurants = Restaurant.query.all())
           



@app.route("/users/<int:id>/edit", methods = ["POST", "GET"])
@require_login
def add_restaurant():
    form = NewRestaurant(request.form)
    return render_template("restaurants/new.html",form = form)