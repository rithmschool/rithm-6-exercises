from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators
from wtforms.validators import DataRequired



class AddForm(FlaskForm):
    first_name = StringField('First name', [validators.Length(min=1, max=35)])
    last_name = StringField('Last name', [validators.Length(min=1, max=35)])
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])

class LogInForm(FlaskForm):
    username = StringField('Username', [validators.Length(min=1, max=35)])
    password = PasswordField('Password', validators=[DataRequired()])

class DeleteForm(FlaskForm):
    pass

