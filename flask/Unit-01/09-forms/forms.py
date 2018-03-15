from flask_wtf import FlaskForm
from wtforms import StringField, validators

class UserForm(FlaskForm):
    first_name = StringField('first name', [validators.DataRequired()])
    last_name = StringField('last name', [validators.DataRequired()])
    image_url = StringField('avatar url')

class MessageForm(FlaskForm):
    content = StringField('message content', [validators.DataRequired(), validators.Length(max = 164)])

class DeleteForm(FlaskForm):
    pass