from flask_wtf import FlaskForm
from wtforms import StringField, validators, PasswordField


class UserForm(FlaskForm):
    first_name = StringField(
        "First Name", [validators.DataRequired(),
                       validators.Length(max=20)])
    last_name = StringField(
        "Last Name", [validators.DataRequired(),
                      validators.Length(max=20)])

    username = StringField(
        "username",
        [validators.DataRequired(),
         validators.Length(min=6, max=14)])

    password = PasswordField(
        "password",
        [validators.DataRequired(),
         validators.Length(min=6, max=14)])


class LoginForm(FlaskForm):
    username = StringField(
        "username",
        [validators.DataRequired(),
         validators.Length(min=6, max=14)])

    password = PasswordField(
        "password",
        [validators.DataRequired(),
         validators.Length(min=6, max=14)])


class DeleteForm(FlaskForm):
    pass
