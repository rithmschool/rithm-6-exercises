from flask_wtf import FlaskForm
from wtforms import TextField, IntegerField, SelectMultipleField, widgets, PasswordField, validators, StringField
from wtforms.validators import DataRequired



class NewUserForm(FlaskForm):
    username = TextField('Username', validators=[DataRequired()])
    first_name = TextField('First Name', validators=[DataRequired()])
    last_name = TextField('Last Name', validators=[DataRequired()])
    password = PasswordField('Password', validators = [validators.DataRequired()])


class UserLogin(FlaskForm):
    username = StringField('Username', [validators.DataRequired()])
    password = PasswordField('Password', [validators.DataRequired()])

