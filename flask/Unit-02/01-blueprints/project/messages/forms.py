from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators


class MessageForm(FlaskForm):
    content = StringField('Content', [validators.DataRequired()])


class DeleteForm(FlaskForm):
    pass
