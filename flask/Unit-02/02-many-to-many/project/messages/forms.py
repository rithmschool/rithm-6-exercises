from flask_wtf import FlaskForm
from wtforms import TextField, IntegerField, SelectMultipleField, widgets
from wtforms.validators import DataRequired
from project.models import Tag


class MessageForm(FlaskForm):
    content = TextField("Content ", validators=[DataRequired()])

    tags = SelectMultipleField(
        'Tags',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        print("set choices accessed for tags!")
        self.tags.choices = [(tag.id, tag.name)
                             for tag in Tag.query.all()]


class DeleteForm(FlaskForm):
    pass
