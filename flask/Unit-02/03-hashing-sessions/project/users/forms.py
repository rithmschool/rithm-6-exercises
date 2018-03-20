from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, validators


class UserForm(FlaskForm):
    first_name = StringField('First Name', [validators.DataRequired()])
    last_name = StringField('Last Name', [validators.DataRequired()])
    username = StringField('Username', [validators.DataRequired()])
    password = PasswordField('Password', [validators.DataRequired(), validators.Length(min=6, message='Passwords must be at least 6 characters.')])
    confirm = PasswordField('Re-enter Password', [validators.EqualTo('password', message='Passwords must match')])

class EditForm(FlaskForm):
    first_name = StringField('First Name', [validators.DataRequired()])
    last_name = StringField('Last Name', [validators.DataRequired()])
    username = StringField('Username', [validators.DataRequired()])

class LoginForm(FlaskForm):
    username = StringField('Username', [validators.DataRequired()])
    password = PasswordField('Password', [validators.DataRequired(), validators.Length(min=6, message='Passwords must be at least 6 characters.')])

class DeleteForm(FlaskForm):
    pass
