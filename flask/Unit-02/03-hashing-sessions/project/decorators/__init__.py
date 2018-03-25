from flask import url_for, redirect, flash, g, session
from functools import wraps


def require_login(fn):
    @wraps(fn)
    def wrapped(*args, **kwargs):
        if hasattr(g, 'current_user'):
            return fn(*args, **kwargs)
        else:
            flash('Not authorized')
            return redirect(url_for('login'))

    return wrapped


def ensure_correct_user(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        correct_id = kwargs.get('id')
        if correct_id != session.get('user_id'):
            # if correct_id != g.current_user.id'):
            flash('Not Authorized!')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)

    return wrapper
