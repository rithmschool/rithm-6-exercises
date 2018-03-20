from functools import wraps
from flask import redirect, url_for, session, flash

def ensure_authenticated(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if session.get('user_id') is None:
            flash('Please log in first.')
            return redirect(url_for('users.login'))
        return fn(*args, **kwargs)
    return wrapper

def prevent_multiple_login_signup(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if session.get('user_id'):
            flash('You are already logged in!')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)
    return wrapper

def ensure_authorized(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        valid_id = kwargs.get('id')
        if valid_id != session.get('user_id'):
            flash('Not authorized to view this page.')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)
    return wrapper
