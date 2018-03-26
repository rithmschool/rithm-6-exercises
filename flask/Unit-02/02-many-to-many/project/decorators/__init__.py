from flask import redirect, url_for, flash, session
from project import app
from project.models import User
from flask_login import current_user
import functools


def prevent_login_signup(fn):
    @functools.wraps(fn)
    def wrapped(*args, **kwargs):
        if session.get('user_id'):
            flash('You\'re logged in already!')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)

    return wrapped


def ensure_correct_user(fn):
    @functools.wraps(fn)  # preserves __name__ and __doc__
    def wrapped(*args, **kwargs):
        correct_id = kwargs.get(
            'user_id'
        )  # get from kwargs a property user_id /users/<int:user_id>
        if correct_id != current_user.id:
            flash('Must be logged in as this user')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)

    return wrapped
