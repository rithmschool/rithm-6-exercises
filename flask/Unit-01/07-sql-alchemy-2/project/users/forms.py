from flask_wtf import FlaskForm
from wtforms import StringField, validators


class UserForm(FlaskForm):
    first_name = StringField('Please Enter your First Name',
                             [validators.DataRequired()])
    last_name = StringField('Please Enter your Last Name',
                            [validators.DataRequired()])
    image_url = StringField(
        'Add a Picture to your Profile By Entering A Link Here',
        [validators.URL(message='URL Must Be Valid')])


class DeleteForm(FlaskForm):
    # since we do not have any fields in our form, we will just pass here
    # we are only creating this class so we can inherit from FlaskForm and get built-in CSRF protection
    pass
