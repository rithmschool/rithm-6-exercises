from flask import FlaskForm
from wtforms import SelectMultipleField, widgets

class TagForm(FlaskForm):
    tags = SelectMultipleField('Tags', coerce=int, widget=widgets.ListWidget(prefix_label=True), option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.tags.choices = [(tag.id) for tag in Tags.query.all()]
