from flask_wtf import FlaskForm
from wtforms import StringField, SelectMultipleField, validators


class TagForm(FlaskForm):
    tag_name = StringField('Create A Tag for your Message!',
                           [validators.DataRequired()])
