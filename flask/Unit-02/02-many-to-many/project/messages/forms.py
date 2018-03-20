from flask_wtf import FlaskForm
from wtforms import StringField, validators, widgets, SelectMultipleField
from ..models import Tag


class MessageForm(FlaskForm):
    content = StringField('Content', [validators.DataRequired()])
    tags = SelectMultipleField(
        'Tags',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.tags.choices = [(t.id, t.label) for t in Tag.query.all()]


class DeleteForm(FlaskForm):
    pass