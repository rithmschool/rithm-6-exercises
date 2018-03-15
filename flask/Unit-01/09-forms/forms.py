from flask_wtf import FlaskForm
from wtforms import StringField, validators


class UForm(FlaskForm):

    first_name = StringField('First Name', [validators.DataRequired(message='Please enter user\'s first name')])
    last_name = StringField('Last Name', [validators.DataRequired(message='Please enter user\'s last name')])
    image_url = StringField('Image URL', [validators.URL(message='Please enter a complete URL')])


class MForm(FlaskForm):

    content = StringField('Content', [validators.DataRequired(message='Please enter a message to display')])


class DForm(FlaskForm):
    pass
