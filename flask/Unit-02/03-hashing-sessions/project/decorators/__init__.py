from functools import wraps
from flask import redirect, url_for, session, flash


def ensure_authenticated(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if session.get('user_id') is None:
            flash('Please log in first!')
            return redirect(url_for('users.login'))
        return fn(*args, **kwargs)
    return wrapper



