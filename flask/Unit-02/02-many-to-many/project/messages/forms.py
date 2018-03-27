from flask_wtf import FlaskForm
from wtforms import StringField, validators


class MessageForm(FlaskForm):
    content = StringField(
        'Content',
        [validators.DataRequired(message='Please enter a message to display')])


class DeleteForm(FlaskForm):
    pass
