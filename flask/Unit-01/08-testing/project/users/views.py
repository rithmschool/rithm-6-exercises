from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.users.forms import UForm, DForm
from project.models import User
from project import db

ubp = Blueprint('u', __name__, template_folder='templates')

@ubp.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        u_form = UForm(request.form)
        if u_form.validate():
            db.session.add(
                User(
                    first_name=u_form.data['first_name'],
                    last_name=u_form.data['last_name'],
                    image_url=u_form.data['image_url']))
            db.session.commit()
            flash('User Created!')
            return redirect(url_for('u.index'))
        else:
            flash('Form Incomplete!')
            return render_template('users/new.html', u_form=u_form)
    return render_template('users/index.html', users=User.query.all())

@ubp.route('/new')
def new():
    return render_template('users/new.html', u_form=UForm())

@ubp.route('/<int:u_id>/edit')
def edit(u_id):
    u = User.query.get_or_404(u_id)
    u_form = UForm(obj=u)
    return render_template('users/edit.html', u=u, u_form=u_form, d_form=DForm())

@ubp.route('/<int:u_id>', methods=['GET', 'PATCH', 'DELETE'])
def show(u_id):
    u = User.query.get_or_404(u_id)
    if request.method == b'PATCH':
        u_form = UForm(request.form)
        if u_form.validate():
            u.first_name = u_form.data['first_name']
            u.last_name = u_form.data['last_name']
            u.image_url = u_form.data['image_url']
            db.session.add(u)
            db.session.commit()
            flash('User Updated!')
            return redirect(url_for('m.index', u_id=u_id))
        else:
            flash('Form Incomplete!')
            return render_template('users/edit.html', u=u, u_form=u_form, d_form=DForm())
    if request.method == b'DELETE':
        d_form = DForm(request.form)
        db.session.delete(u)
        db.session.commit()
        flash('User Deleted!')
        return redirect(url_for('u.index'))
    return render_template('users/show.html', u=u)
