from flask_wtf import FlaskForm
from project.models import Tag
from wtforms import TextAreaField, SelectMultipleField, validators, widgets


class MessageForm(FlaskForm):
    content = TextAreaField(
        "Message: ", [validators.DataRequired(),
                      validators.Length(max=200)])
    tags = SelectMultipleField(
        "Tags: ",
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.tags.choices = [(t.id, t.name) for t in Tag.query.all()]


class DeleteForm(FlaskForm):
    pass
