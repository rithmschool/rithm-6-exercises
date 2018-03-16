from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators

class AddMessage(FlaskForm):
    content = StringField('message', [validators.Length(min=1, max=140)])
