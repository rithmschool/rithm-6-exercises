from flask_wtf import FlaskForm
from wtforms import StringField, validators


class MessageForm(FlaskForm):
    content = StringField(
        "Message: ", [validators.DataRequired(),
                      validators.Length(max=200)])


class DeleteForm(FlaskForm):
    pass
