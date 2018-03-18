from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators

class AddTag(FlaskForm):
    content = StringField('tag', [validators.Length(min=1, max=40)])

class DeleteForm(FlaskForm):
    pass
