from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators, TextField, IntegerField, SelectMultipleField, widgets
from wtforms.validators import DataRequired
from project.models import Message


class NewTagForm(FlaskForm):
    content = TextField('Content', validators=[DataRequired()])
    messages = SelectMultipleField('Messages',
                                     coerce=int,
                                     choices=[(d.id, d.content) for d in Message.query.all()])

class DeleteForm(FlaskForm):
    pass
