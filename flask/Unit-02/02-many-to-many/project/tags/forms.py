from flask_wtf import FlaskForm
from wtforms import StringField, SelectMultipleField, validators
from project.models import Tag


class TagForm(FlaskForm):
    tag_name = StringField('Create A Tag for your Message!',
                           [validators.DataRequired()])


def set_choices(self):
    self.tags.choices = [(tag.id, tag.name) for tag in Tag.query.all()]
