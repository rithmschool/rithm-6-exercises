from flask_wtf import FlaskForm
from wtforms import StringField, TextField, validators, PasswordField


class UserForm(FlaskForm):
    first_name = StringField('First Name:', [validators.DataRequired()])
    last_name = StringField('Last Name:', [validators.DataRequired()])
    password = PasswordField('Password:', [validators.DataRequired()])


class DeleteForm(FlaskForm):
    # since we do not have any fields in our form, we will just pass here
    # we are only creating this class so we can inherit from FlaskForm and get built-in CSRF protection
    pass
