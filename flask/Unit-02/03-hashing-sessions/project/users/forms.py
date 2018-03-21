from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, validators
from wtforms.validators import DataRequired, Length

class UserForm(FlaskForm):
    first_name = StringField('first name', [validators.DataRequired()])
    last_name = StringField('last name', [validators.DataRequired()])
    username = StringField('username', [validators.DataRequired(), validators.Length(min = 5, max = 20)])
    password = PasswordField('password', [validators.DataRequired(), validators.Length(min = 5, max = 20)])
    image_url = StringField('avatar url')

class LoginForm(FlaskForm):
    username = StringField('username', [validators.DataRequired(), validators.Length(min = 5, max = 20)])
    password = PasswordField('password', [validators.DataRequired(), validators.Length(min = 5, max = 20)])

class DeleteForm(FlaskForm):
    pass