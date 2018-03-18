from flask_wtf import FlaskForm
from wtforms import StringField, validators, widgets, SelectMultipleField
from project.models import Tag


class MessageForm(FlaskForm):

    message = StringField('Message', [validators.DataRequired()])

    tags = SelectMultipleField(
        'Tags',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput()
    )

    def set_choices(self):
        self.tags.choices = [(t.id, t.text) for t in Tag.query.all()]

class DeleteForm(FlaskForm):
    pass


#using DELETE to validate to get CSRF token
