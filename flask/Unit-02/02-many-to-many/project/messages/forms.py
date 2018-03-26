from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators, SelectMultipleField, widgets
from project.models import Tag

class AddMessage(FlaskForm):
    content = StringField('message', [validators.Length(min=1, max=140)])
    tags = SelectMultipleField('Tags',
        coerce=int, #ids are coming in as text, so we have to change them for the database
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.tags.choices = [(tag.id, tag.content) for tag in Tag.query.all()]

class DeleteForm(FlaskForm):
    pass
