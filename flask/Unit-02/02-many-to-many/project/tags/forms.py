from flask_wtf import FlaskForm
from wtforms import BooleanField, StringField, PasswordField, IntegerField, validators

class NewTagForm(FlaskForm):
    content = TextField('Content', validators=[DataRequired()])
    message = SelectMultipleField('Messages',
                                     choices=[(d.id, d.name) for d in Messages.query.all()])

class DeleteForm(FlaskForm):
    pass
