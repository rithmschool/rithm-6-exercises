from flask_wtf import FlaskForm
from wtforms import StringField, validators


class MessagesForm(FlaskForm):
    content = StringField(
        "Message: ", [validators.DataRequired(),
                      validators.Length(max=300)])


class DeleteForm(FlaskForm):

    pass
