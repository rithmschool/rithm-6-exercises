from flask_wtf import FlaskForm
from wtforms import TextAreaField, validators

class MessageForm(FlaskForm):
    content = TextAreaField('Message', [validators.DataRequired(), validators.Length(max=200)])

class DeleteForm(FlaskForm):
    pass
