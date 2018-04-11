from flask_wtf import FlaskForm
from wtforms import StringField, validators
# from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators, TextField, IntegerField, SelectMultipleField, widgets
from wtforms.validators import DataRequired
from project.models import Message


class NewTagForm(FlaskForm):
    content = StringField('Content', validators=[DataRequired()])
    # messages = SelectMultipleField(
    #     'Messages',
    #     coerce=int,
    #     widget=widgets.ListWidget(prefix_label=True),
    #     option_widget=widgets.CheckboxInput())

    # def set_choices(self):
    # self.messages.choices = [(message.id, message.content)
    #                          for message in Message.query.all()]


class DeleteForm(FlaskForm):
    pass
