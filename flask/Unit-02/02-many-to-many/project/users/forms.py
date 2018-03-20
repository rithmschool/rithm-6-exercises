from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators
from wtforms.validators import DataRequired



class AddForm(FlaskForm):
    first_name = StringField('first name', [validators.Length(min=1, max=35)])
    last_name = StringField('last name', [validators.Length(min=1, max=35)])
    password = PasswordField('password', validators=[DataRequired()])

class LogInForm(FlaskForm):
    last_name = StringField('last name', [validators.Length(min=1, max=35)])
    password = PasswordField('password', validators=[DataRequired()])

class DeleteForm(FlaskForm):
    pass

