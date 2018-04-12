from flask_wtf import FlaskForm
from wtforms import StringField, validators

class MForm(FlaskForm):
    content = StringField('Content', [validators.DataRequired(message='Please enter a message to display')])

class DForm(FlaskForm):
    pass
