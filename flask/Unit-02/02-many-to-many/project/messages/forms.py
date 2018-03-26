from flask_wtf import FlaskForm
from wtforms import StringField, validators, SelectMultipleField, widgets
from project.models import Tag


class MessageForm(FlaskForm):
    content = StringField(
        'Content of Email',
        [validators.DataRequired(),
         validators.Length(max=50)])

    # New for M:M
    tags = SelectMultipleField(
        "Tags",
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.tags.choices = [(t.id, t.name) for t in Tag.query.all()]


class DeleteForm(FlaskForm):
    pass
