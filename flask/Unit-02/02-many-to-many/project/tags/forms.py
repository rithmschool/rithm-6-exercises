from flask_wtf import FlaskForm
from wtforms import StringField, validators


class TagForm(FlaskForm):
    name = StringField(
        "Message: ", [validators.DataRequired(),
                      validators.Length(max=50)])


class DeleteForm(FlaskForm):
    pass
