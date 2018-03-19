from flask_wtf import FlaskForm
from wtforms import StringField, validators


class UsersForm(FlaskForm):
    first_name = StringField(
        "First Name: ", [validators.DataRequired(), validators.Length(max=25)])

    last_name = StringField(
        "Last Name: ", [validators.DataRequired(), validators.Length(max=25)])


class MessagesForm(FlaskForm):
    content = StringField(
        "Message: ", [validators.DataRequired(),
                      validators.Length(max=300)])


class DeleteForm(FlaskForm):

    pass
