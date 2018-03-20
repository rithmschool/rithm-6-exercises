from flask_wtf import FlaskForm
from wtforms import StringField, validators, SelectMultipleField, widgets
from project.models import Tag


class MessageForm(FlaskForm):
    content = StringField(
        "Message: ", [validators.DataRequired(),
                      validators.Length(max=200)])
    tags = SelectMultipleField(
        'Tag',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.tags.choices = [(d.id, d.name) for d in Tag.query.all()]


class DeleteForm(FlaskForm):
    pass
