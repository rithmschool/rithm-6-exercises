from flask_wtf import FlaskForm
from wtforms import StringField, validators, PasswordField

class UserForm(FlaskForm):
    #shift + alt +  down to copy above line
    first_name = StringField('First Name', [validators.DataRequired()])
    last_name = StringField('Last Name', [validators.DataRequired()])
    username = StringField('Username', [validators.DataRequired()])
    password = PasswordField('Password', [validators.DataRequired()])

class LoginForm(FlaskForm):
    username = StringField('Username', [validators.DataRequired()])
    password = StringField('Password', [validators.DataRequired()])

class DeleteForm(FlaskForm):
    pass


#using DELETE to validate to get CSRF token
