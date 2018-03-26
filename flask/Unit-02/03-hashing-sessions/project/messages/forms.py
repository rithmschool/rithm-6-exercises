from flask_wtf import FlaskForm
from wtforms import StringField, validators, SelectMultipleField, widgets
from project.tags.models import Tag

class MessageForm(FlaskForm):
    content = StringField('message content', [validators.DataRequired(), validators.Length(max = 164)])

    tags = SelectMultipleField('Tags', coerce=int, widget=widgets.ListWidget(prefix_label=True), option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.tags.choices = [(tag.id, tag.content) for tag in Tag.query.all()]

class DeleteForm(FlaskForm):
    pass