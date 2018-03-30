from flask_wtf import FlaskForm
from wtforms import StringField, validators, PasswordField
from wtforms.validators import DataRequired


class UserForm(FlaskForm):
    first_name = StringField('First Name', [validators.DataRequired()])
    last_name = StringField('Last Name', [validators.DataRequired()])
    username = StringField('username', validators=[DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])


class DeleteForm(FlaskForm):
    pass
