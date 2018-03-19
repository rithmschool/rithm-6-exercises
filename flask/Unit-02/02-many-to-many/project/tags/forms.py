from flask_wtf import FlaskForm
from wtforms import StringField, validators

class TagForm(FlaskForm):
    content = StringField('Content', [validators.DataRequired()])

class DeleteForm(FlaskForm):
    pass
