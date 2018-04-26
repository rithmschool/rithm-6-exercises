from flask import Flask, redirect, url_for, session, flash
from functools import wraps

def verify_login(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if not session.get('user_id'):
            flash('Login Required')
            return redirect(url_for('users.login'))
        return func(*args, **kwargs)
    return wrapper

def verify_user(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if kwargs.get('user_id') != session.get('user_id'):
            flash('Not Authorized')
            return redirect(url_for('users.index'))
        return func(*args, **kwargs)
    return wrapper

def prevent_duplicate_login(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if session.get('user_id'):
            flash('Already Logged In!')
            return redirect(url_for('users.index'))
        return func(*args, **kwargs)
    return wrapper

