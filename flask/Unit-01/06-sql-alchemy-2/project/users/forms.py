from flask_wtf import FlaskForm
from wtforms import StringField, validators


class UserForm(FlaskForm):
    #shift + alt +  down to copy above line
    first_name = StringField('First Name', [validators.DataRequired()])
    last_name = StringField('Last Name', [validators.DataRequired()])


class DeleteForm(FlaskForm):
    pass


#using DELETE to validate to get CSRF token
