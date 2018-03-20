from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, validators


class UserForm(FlaskForm):
    first_name = StringField('Please Enter your First Name',
                             [validators.DataRequired()])
    last_name = StringField('Please Enter your Last Name',
                            [validators.DataRequired()])
    username = StringField('Create a Username', [validators.DataRequired()])
    password = PasswordField(
        'Please Pick a Password at Least 8 Characters long',
        [validators.DataRequired(),
         validators.Length(min=8)])
    image_url = StringField(
        'Post a Picture to your Profile ',
        [validators.URL(message='URL Must Be Valid')],
        filters=[lambda x: x],
        render_kw={"placeholder": " Only URLs Please!"})


class LoginForm(FlaskForm):
    username = StringField('Username', [validators.DataRequired()])
    password = PasswordField('Password', [validators.DataRequired()])


class DeleteForm(FlaskForm):
    # since we do not have any fields in our form, we will just pass here
    # we are only creating this class so we can inherit from FlaskForm and get built-in CSRF protection
    pass
