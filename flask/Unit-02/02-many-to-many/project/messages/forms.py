from flask_wtf import FlaskForm
from wtforms import StringField, validators

class MessageForm(FlaskForm):
    content = StringField('message content', [validators.DataRequired(), validators.Length(max = 164)])

class DeleteForm(FlaskForm):
    pass