from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, validators


class UserForm(FlaskForm):
    first_name = StringField(
        "First Name", [validators.DataRequired(),
                       validators.Length(max=20)])
    last_name = StringField(
        "Last Name", [validators.DataRequired(),
                      validators.Length(max=20)])
    about_me = TextAreaField(
        "About Me", [validators.Length(max=200)],
        filters=[lambda x: x or None])
    img_url = StringField("Profile Picture", filters=[lambda x: x or None])


class DeleteForm(FlaskForm):
    pass
