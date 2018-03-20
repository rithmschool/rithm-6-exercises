from flask import redirect, url_for, flash, g, session
from project import app
from project.models import User
import functools


def require_login(fn):
    # checkout how Elie wrote this in the screencast
    @functools.wraps(fn)
    def wrapped(*args, **kwargs):
        if hasattr(g, 'user'):
            return fn(*args, **kwargs)
        else:
            flash("Please login first!")
            return redirect(url_for("users.login"))

    return wrapped


def prevent_login_signup(fn):
    @functools.wraps(fn)
    def wrapped(*args, **kwargs):
        if session.get('user_id'):
            flash('You\'re logged in already!')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)

    return wrapped


@app.before_request
def add_user_to_g():
    # If logged in, add logged-in user obj to g.
    user_id = session.get("user_id")
    if user_id:
        user = User.query.get(user_id)
        if user is not None:
            g.user = user
        else:
            # couldn't find user -- perhaps user deleted from db?
            raise Exception(f"User #{user_id} missing")


def ensure_correct_user(fn):
    @functools.wraps(fn)  # preserves __name__ and __doc__
    def wrapped(*args, **kwargs):
        correct_id = kwargs.get(
            'user_id'
        )  # get from kwargs a property user_id /users/<int:user_id>
        if correct_id != session.get('user_id'):
            flash('Must be logged in as this user')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)

    return wrapped
