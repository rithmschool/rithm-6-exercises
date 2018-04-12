from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, validators
from wtforms.validators import DataRequired, EqualTo, Length
from wtforms.widgets import PasswordInput

class UForm(FlaskForm):
    first_name = StringField('First Name', [DataRequired(message='Please enter user\'s first name')])
    last_name = StringField('Last Name', [DataRequired(message='Please enter user\'s last name')])
    username = StringField('Username', [DataRequired(message='Please enter a username')])
    password = PasswordField('Password', [DataRequired(message='Please enter a password'), Length(min=6, message='Passwords must be at least six characters')])
    confirm = PasswordField('Re-Enter Password', [EqualTo('password', message='Passwords must match')])
    image_url = StringField('Image URL')

class EditForm(FlaskForm):
    first_name = StringField('First Name', [DataRequired(message='Please enter user\'s first name')])
    last_name = StringField('Last Name', [DataRequired(message='Please enter user\'s last name')])
    username = StringField('Username', [DataRequired(message='Please enter a username')])
    image_url = StringField('Image URL')

class LoginForm(FlaskForm):
    username = StringField('Username', [DataRequired(message='Please enter a username')])
    password = PasswordField('Password', [DataRequired(message='Please enter a password'), Length(min=6, message='Passwords must be at least six characters')])

class DForm(FlaskForm):
    pass
