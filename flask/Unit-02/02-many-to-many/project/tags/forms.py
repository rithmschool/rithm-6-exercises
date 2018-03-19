from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators, TextField, IntegerField, SelectMultipleField, widgets
from wtforms.validators import DataRequired

class NewTagForm(FlaskForm):
    content = TextField('Content', validators=[DataRequired()])
    # departments = SelectMultipleField('Messages',
    #                                  coerce=int,
    #                                  choices=[(d.id, d.name) for d in Message.query.all()])

class DeleteForm(FlaskForm):
    pass
