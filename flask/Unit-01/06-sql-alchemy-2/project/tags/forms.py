from flask_wtf import FlaskForm
from wtforms import StringField, validators, widgets, SelectMultipleField
from project.models import Message

class TagForm(FlaskForm):

    text = StringField('Text', [validators.DataRequired()])

    messages = SelectMultipleField(
        'Messages',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput()
    )

    def set_choices(self):
        self.messages.choices = [(m.id, m.message) for m in Message.query.all()]

class DeleteForm(FlaskForm):
    pass
