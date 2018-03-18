from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators

# import os
# app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')


class NewUser(FlaskForm):
    # value on the left must be the same as what is defined in the database.  String value on the right is the label HTML name
    first_name = StringField(
        'first_name', [validators.DataRequired()])  # , validators.Length(min=1)])
    last_name = StringField(
        'last_name', [validators.DataRequired()])  # , validators.Length(min=2, max=35)])


class MessageForm(FlaskForm):
    content = StringField('Content', [validators.DataRequired()])


class DeleteForm(FlaskForm):
    pass
