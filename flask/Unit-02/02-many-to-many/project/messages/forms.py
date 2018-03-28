from flask_wtf import FlaskForm
from wtforms import StringField, SelectMultipleField, widgets, validators
from project.models import Tag

class MessageForm(FlaskForm):
    content = StringField('Content', [validators.DataRequired(message='Please enter a message to display')])

    tags = SelectMultipleField(
        'Tags',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.tags.choices = [(tag.id, tag.name)
                                 for tag in Tag.query.all()]


class DeleteForm(FlaskForm):
    pass
