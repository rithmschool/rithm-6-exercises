from flask_wtf import FlaskForm
from wtforms import StringField, validators


class MessageForm(FlaskForm):
    content = StringField(
        'Content of Email',
        [validators.DataRequired(),
         validators.Length(max=50)])


class DeleteForm(FlaskForm):
    pass
