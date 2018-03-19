from flask_wtf import FlaskForm
from wtforms import TextField, IntegerField, SelectMultipleField, widgets
from wtforms.validators import DataRequired
from project.models import Message


class TagForm(FlaskForm):
    name = TextField("Type ", validators=[DataRequired()])

    messages = SelectMultipleField(
        'Messages',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        print("set choices accessed for messages")
        self.messages.choices = [(message.id, message.content)
                                 for message in Message.query.all()]


class DeleteForm(FlaskForm):
    pass
