from flask_wtf import FlaskForm
from wtforms import TextField, IntegerField, SelectMultipleField, widgets
from wtforms.validators import DataRequired
from project.models import Department


class NewDepartmentForm(FlaskForm):
    name = TextField('Name', validators=[DataRequired()])


class NewEmployeeForm(FlaskForm):
    name = TextField('Name', validators=[DataRequired()])
    years_at_company = IntegerField('Years At Company',
                                    validators=[DataRequired()])

    departments = SelectMultipleField(
        'Departments',
        coerce=int,
        widget=widgets.ListWidget(prefix_label=True),
        option_widget=widgets.CheckboxInput())
