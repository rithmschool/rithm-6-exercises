from flask_wtf import FlaskForm
from wtforms import StringField, SelectMultipleField, widgets, validators
from project.models import Message


class TForm(FlaskForm):
    name = StringField(
        'Tag Name',
        [validators.DataRequired(message='Please enter a tag name')])

    # messages = SelectMultipleField(
    #     'Messages',
    #     coerce=int,
    #     widget=widgets.ListWidget(prefix_label=True),
    #     option_widget=widgets.CheckboxInput())

    # def set_choices(self):
    #     self.messages.choices = [m.content for m in Message.query.all()]


class DForm(FlaskForm):
    pass
