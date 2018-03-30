from flask_wtf import FlaskForm
from wtforms import TextField, validators


class MessageForm(FlaskForm):
    content = TextField('Please Enter your Message',
                        [validators.DataRequired()])


class DeleteForm(FlaskForm):
    # since we do not have any fields in our form, we will just pass here
    # we are only creating this class so we can inherit from FlaskForm and get built-in CSRF protection
    pass