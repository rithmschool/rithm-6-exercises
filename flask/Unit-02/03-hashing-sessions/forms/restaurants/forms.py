from flask_wtf import FlaskForm
from wtforms import TextField, IntegerField, SelectMultipleField, widgets, validators
from wtforms.validators import DataRequired



class NewRestaurant(FlaskForm):
    name = TextField('Username', validators=[DataRequired()])
    city = TextField('Username', validators=[DataRequired()])
    



