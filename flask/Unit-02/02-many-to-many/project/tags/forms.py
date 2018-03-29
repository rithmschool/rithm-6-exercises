from flask_wtf import FlaskForm
from wtforms import StringField, validators


class TagForm(FlaskForm):
    name = StringField(
        "Tag: ", [validators.DataRequired(),
                  validators.Length(max=20)])


class DeleteForm(FlaskForm):
    pass
