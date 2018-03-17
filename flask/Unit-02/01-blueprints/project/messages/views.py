from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import MForm, DForm
from project.models import User, Message
from project import db

mbp = Blueprint('m', __name__, template_folder='templates')

@mbp.route('/', methods=['GET', 'POST'])
def index(u_id):
    if request.method == 'POST':
        m_form = MForm(request.form)
        if m_form.validate():
            db.session.add(Message(content=m_form.data['content'], user_id=u_id))
            db.session.commit()
            flash('Message Created!')
            return redirect(url_for('m.index', u_id=u_id))
        else:
            flash('Form Incomplete!')
            return render_template('messages/new.html', u=User.query.get(u_id), m_form=m_form)
    return render_template(
        'messages/index.html', u=User.query.get_or_404(u_id))

@mbp.route('/new')
def new(u_id):
    return render_template(
        'messages/new.html', u=User.query.get_or_404(u_id), m_form=MForm())

@mbp.route('/<int:m_id>/edit')
def edit(u_id, m_id):
    u = User.query.get_or_404(u_id)
    m = Message.query.get_or_404(m_id)
    m_form = MForm(obj=m)
    return render_template('messages/edit.html', u=u, m=m, m_form=m_form, d_form=DForm())

@mbp.route(
    '/<int:m_id>', methods=['PATCH', 'DELETE'])
def show(u_id, m_id):
    m = Message.query.get_or_404(m_id)
    if request.method == b'PATCH':
        m_form = MForm(request.form)
        if m_form.validate():
            m.content = request.form['content']
            db.session.add(m)
            db.session.commit()
            flash('Message Updated!')
            return redirect(url_for('m.index', u_id=u_id))
        else:
            flash('Form Incomplete!')
            return render_template('messages/edit.html', u=User.query.get(u_id), m=m, m_form=m_form, d_form=DForm())
    if request.method == b'DELETE':
        d_form = DForm(request.form)
        db.session.delete(m)
        db.session.commit()
        flash('Message Deleted!')
        return redirect(url_for('m.index', u_id=u_id))
