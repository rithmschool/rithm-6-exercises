from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.tags.forms import TForm, DForm
from project.models import Tag
from project import db

tbp = Blueprint('t', __name__, template_folder='templates')


@tbp.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        t_form = TForm(request.form)
        if t_form.validate():
            db.session.add(Tag(name=t_form.data['name']))
            db.session.commit()
            flash('Tag Created!')
            return redirect(url_for('t.index'))
        else:
            flash('Form Incomplete!')
            return render_template('tags/new.html', t_form=t_form)
    return render_template('tags/index.html', tags=Tag.query.all())


@tbp.route('/new')
def new():
    return render_template('tags/new.html', t_form=TForm())


@tbp.route('/<int:t_id>/edit')
def edit(t_id):
    t = Tag.query.get_or_404(t_id)
    t_form = TForm(obj=t)
    return render_template(
        'tags/edit.html', t=t, t_form=t_form, d_form=DForm())


@tbp.route('/<int:t_id>', methods=['GET', 'PATCH', 'DELETE'])
def show(t_id):
    t = Tag.query.get_or_404(t_id)
    d_form = DForm(request.form)
    if request.method == b'PATCH':
        t_form = TForm(request.form)
        if t_form.validate():
            t.name = t_form.data['name']
            db.session.add(t)
            db.session.commit()
            flash('Tag Updated!')
            return redirect(url_for('t.index', t_id=t_id))
        else:
            flash('Form Incomplete!')
            return render_template(
                'tags/edit.html', t=t, t_form=t_form, d_form=DForm())
    if request.method == b'DELETE':
        if d_form.validate():
            db.session.delete(t)
            db.session.commit()
            flash('Tag Deleted!')
            return redirect(url_for('t.index'))
        flash('Delete Request Denied')
        return redirect(url_for('t.index'))
    return render_template('tags/show.html', t=t)
