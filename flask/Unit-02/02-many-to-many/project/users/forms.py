from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, PasswordField, validators


class UserForm(FlaskForm):
    username = StringField("Username", [validators.DataRequired()])
    first_name = StringField(
        "First Name", [validators.DataRequired(),
                       validators.Length(max=20)])
    last_name = StringField(
        "Last Name", [validators.DataRequired(),
                      validators.Length(max=20)])
    about_me = TextAreaField(
        "About Me", [validators.Length(max=150)],
        filters=[lambda x: x or None])
    img_url = StringField(
        "Profile Picture",
        filters=[lambda x: x or None],
        render_kw={"placeholder": "Enter image url"})
    password = PasswordField("Password", [validators.DataRequired()])


class LoginForm(FlaskForm):
    username = StringField("Username", [validators.DataRequired()])
    password = PasswordField("Password", [validators.DataRequired()])


class DeleteForm(FlaskForm):
    pass
