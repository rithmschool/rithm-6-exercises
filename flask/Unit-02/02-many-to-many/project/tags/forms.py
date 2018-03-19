from flask_wtf import FlaskForm
from wtforms import StringField, validators

class TagForm(FlaskForm):
    content = StringField('tag description', [validators.DataRequired(), validators.Length(max = 37)])

class DeleteForm(FlaskForm):
    pass