from functools import wraps
from flask import redirect, url_for, session, flash


def ensure_authentication(fn):
    @wraps(fn)  # preserves __name__ and __doc___
    def wrapper(*args, **kwargs):
        if session.get(
                'user_id') is None:  #see if there is  a user_id in the session
            flash('Please login first')
            return redirect(url_for('users.login'))
        return fn(*args, **kwargs)

    return wrapper


def prevent_login_sign_up(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if session.get('user_id'):
            flash('Already logged In')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)

    return wrapper


#authorization


def ensure_correct_user(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        #get kwargs id from person you are trying to edit check vs session
        correct_id = kwargs.get('id')
        if correct_id != session.get('user_id'):
            flash('Not authorized')
            return redirect(url_for('users.index'))
        return fn(*args, **kwargs)

    return wrapper
