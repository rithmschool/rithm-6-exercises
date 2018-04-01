from functools import wraps
from flask import redirect, url_for, session, flash

def prevent_login_signup(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if session.get('user_id'):
            flash('You are already logged in!')
            return redirect(url_for('users.index_users'))
        return fn(*args, **kwargs)
    return wrapper


def ensure_correct_user(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        correct_id = kwargs.get('user_id')
        if correct_id != session.get('user_id'):
            flash('Not Authorized')
            return redirect(url_for('users.index_users'))
        return fn(*args, **kwargs)
    return wrapper
