from flask import redirect, render_template, request, url_for, Blueprint
from project.departments.forms import NewDepartmentForm
from project.models import Department
from project import db

departments_blueprint = Blueprint(
    'departments', __name__, template_folder='templates')


@departments_blueprint.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        form = NewDepartmentForm(request.form)
        if form.validate_on_submit():
            department = Department(form.name.data)
            db.session.add(department)
            db.session.commit()
            return redirect(url_for('departments.index'))
        else:
            return render_template('departments/new.html', form=form)
    return render_template(
        'departments/index.html', departments=Department.query.all())


@departments_blueprint.route('/<int:id>/edit', methods=["GET"])
def edit(id):
    department = Department.query.get_or_404(id)
    form = NewDepartmentForm(name=department.name)
    return render_template(
        'departments/edit.html', department=department, form=form)


@departments_blueprint.route('/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def show(id):
    department = Department.query.get_or_404(id)
    if request.method == b'DELETE':
        db.session.delete(department)
        db.session.commit()
        return redirect(url_for('departments.index'))
    if request.method == b"PATCH":
        form = NewDepartmentForm(request.form)
        if form.validate():
            department.name = form.name.data
            db.session.add(department)
            db.session.commit()
            return redirect(url_for('departments.index'))
        else:
            return render_template('departments/edit.html', form=form)
    return render_template('departments/show.html', department=department)


@departments_blueprint.route('/new', methods=["GET"])
def new():
    form = NewDepartmentForm()
    return render_template('departments/new.html', form=form)
