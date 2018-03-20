from flask_wtf import FlaskForm
from wtforms import StringField, validators


class UserForm(FlaskForm):
    first_name = StringField('First Name', [validators.DataRequired()])
    last_name = StringField('Last Name', [validators.DataRequired()])
    username = StringField('Username', [validators.DataRequired()])
    password = StringField('Password', [validators.DataRequired()])


class LoginForm(FlaskForm):
    username = StringField('Username', [validators.DataRequired()])
    password = StringField('Password', [validators.DataRequired()])


class DeleteForm(FlaskForm):
    pass
