from flask_wtf import FlaskForm
from wtforms import StringField, SelectMultipleField, widgets, validators
from project.models import Message


class TagForm(FlaskForm):
    name = StringField(
        'Tag Name',
        [validators.DataRequired(message='Please enter a tag name')])

    messages = SelectMultipleField(
        'Messages',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.messages.choices = [(message.id, message.content) for message in Message.query.all()]

class DeleteForm(FlaskForm):
    pass
