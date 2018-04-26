from flask_wtf import FlaskForm
from wtforms import StringField, validators, SelectMultipleField, widgets
from project.models import Tag


class MessageForm(FlaskForm):
    """takes a message, renders all the current tags and allows you to click them

    """

    # def __init__(self, *args, **kwargs):
    #     super(*args)
    #     # super(*args, **kwargs)
    #     self.set_choices()

    content = StringField('message', [validators.Length(min=1, max=140)])
    tags = SelectMultipleField(
        'Tags',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        """Set the choices (vocabulary) for "tags" to current tags.

        NOTE: you MUST call this function after making an instance of
        this form, otherwise, there will be no value for tags.choices
        """

        self.tags.choices = [(tag.id, tag.content) for tag in Tag.query.all()]


class DeleteForm(FlaskForm):
    pass
