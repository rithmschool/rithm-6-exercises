from flask_wtf import FlaskForm
from wtforms import StringField, validators, SelectMultipleField, widgets
from ..models import Message


class TagForm(FlaskForm):
    label = StringField('Label', [validators.DataRequired()])
    #  tags = SelectMultipleField(
    #         'Tags',
    #         coerce=int,
    #         widget=widgets.ListWidget(prefix_label=True),
    #         option_widget=widgets.CheckboxInput())

    #     def set_choices(self):
    #         self.tags.choices = [(t.id, t.label) for t in Tag.query.all()]
    messages = SelectMultipleField(
        'Messages',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.messages.choices = [(m.id, m.content)
                                 for m in Message.query.all()]


class DeleteForm(FlaskForm):
    pass