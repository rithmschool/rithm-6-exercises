from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators

class AddForm(FlaskForm):
    first_name = StringField('first name', [validators.Length(min=1, max=35)])
    last_name = StringField('last name', [validators.Length(min=1, max=35)])


class DeleteForm(FlaskForm):
    pass

