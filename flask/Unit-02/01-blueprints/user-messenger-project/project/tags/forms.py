from flask_wtf import FlaskForm
from wtforms import StringField, validators, SelectMultipleField, widgets
from project.models import Tag, Message

class TagForm(FlaskForm):
    subject = StringField('Tag-subject', [validators.DataRequired()])



    messages = SelectMultipleField(
        'messages',
        coerce = int,
        widget = widgets.ListWidget(prefix_label = True),
        option_widget = widgets.CheckboxInput())

    def set_choices(self):
        self.messages.choices = [(m.id, m.content) for m in Message.query.all()]