from flask_wtf import FlaskForm
from wtforms import StringField, validators
from project.models import Tag, Message

class TagForm(FlaskForm):
    subject = TextField('Tag-subject', [validators.DataRequired()])
    