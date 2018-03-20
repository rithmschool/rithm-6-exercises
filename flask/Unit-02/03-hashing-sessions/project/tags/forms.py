from flask_wtf import FlaskForm
from wtforms import StringField, validators, SelectMultipleField, widgets
from project.models import Message


class TagForm(FlaskForm):
    name = StringField(
        "Name", [validators.DataRequired(),
                 validators.Length(max=20)])
    messages = SelectMultipleField(
        'Message',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.messages.choices = [(d.id, d.content)
                                 for d in Message.query.all()]


class DeleteForm(FlaskForm):
    pass
