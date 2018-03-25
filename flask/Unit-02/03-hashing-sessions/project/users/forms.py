from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators


class UserForm(FlaskForm):
    first_name = StringField("First Name ", [validators.DataRequired()])
    last_name = StringField(
        "Last Name ", [validators.DataRequired(), validators.Length(max=20)])
    username = StringField("Username ", [validators.DataRequired()])
    password = PasswordField("Password ", [validators.DataRequired()])


class LoginForm(FlaskForm):
    username = StringField("Username ", [validators.DataRequired()])
    password = PasswordField("Password ", [validators.DataRequired()])


class DeleteForm(FlaskForm):
    pass
