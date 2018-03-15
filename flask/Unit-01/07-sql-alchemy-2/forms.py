from flask_wtf import FlaskForm
from wtforms import StringField, validators


class UserForm(FlaskForm):
    first_name = StringField(
        "First Name", [validators.DataRequired(),
                       validators.Length(max=20)])
    last_name = StringField(
        "Last Name", [validators.DataRequired(),
                      validators.Length(max=20)])


class MessageForm(FlaskForm):
    content = StringField(
        "Message: ", [validators.DataRequired(),
                      validators.Length(max=200)])


class DeleteForm(FlaskForm):
    pass
