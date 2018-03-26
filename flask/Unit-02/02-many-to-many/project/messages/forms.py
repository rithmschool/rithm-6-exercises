from flask_wtf import FlaskForm
from wtforms import StringField, SelectMultipleField, widgets, validators
from project.models import Tag


class MessageForm(FlaskForm):
    content = StringField(
        'Please Enter your Message', [validators.DataRequired()],
        widget=widgets.TextArea())
    tags = SelectMultipleField(
        'Tags',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.tags.choices = [(tag.id, tag.tag_name) for tag in Tag.query.all()]


class DeleteForm(FlaskForm):
    # since we do not have any fields in our form, we will just pass here
    # we are only creating this class so we can inherit from FlaskForm and get built-in CSRF protection
    pass
