from flask_wtf import FlaskForm
from wtforms import StringField, SelectMultipleField, widgets
from wtforms.validators import DataRequired
from flask_login import current_user


class TagForm(FlaskForm):

    name = StringField('name', validators=[DataRequired()])
    messages = SelectMultipleField(
        'Messages',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())

    def set_choices(self):
        self.messages.choices = [(m.id, m.content)
                                 for m in current_user.messages]


class DeleteForm(FlaskForm):
    pass
