from flask_wtf import FlaskForm
from wtforms import StringField, validators


class UForm(FlaskForm):

    first_name = StringField('f', [validators.DataRequired()])
    last_name = StringField('l', [validators.DataRequired()])
    image_url = StringField('i')


class MForm(FlaskForm):

    content = StringField('c', [validators.DataRequired()])


class DForm(FlaskForm):
    pass
