from flask_wtf import FlaskForm
from wtforms import StringField, validators


class MessageForm(FlaskForm):

    message = StringField('Message', [validators.DataRequired()])


class DeleteForm(FlaskForm):
    pass


#using DELETE to validate to get CSRF token
