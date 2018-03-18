from flask import redirect, render_template, request, url_for, flash, Blueprint
from project.messages.forms import DeleteForm, MessageForm
from project.models import Message, User
from project import db

messages_blueprint = Blueprint(
    'messages',
    __name__,
    template_folder='templates'
)


@messages_blueprint.route('/')
def index(user_id):
    user = User.query.get(user_id)
    return render_template('messages/index.html', user=user, messages=Message.query.all())


@messages_blueprint.route('/new')
def new(user_id):
    user = User.query.get(user_id)
    user_form = NewUser()
    return render_template('messages/new.html', user=user, user_messages=user.messages, form=user_form)

# @messages_blueprint.route('//<int:id>')
# def show_message(user_id, id):
#     pass


@messages_blueprint.route('/<int:id>/edit')
def edit(user_id, id):
    return render_template('messages/edit.html', messages=Message.query.get(id))

# POST NEW MESSAGE--------------------------------------


@messages_blueprint.route('/', methods=['POST'])
def post_new(user_id):
    message_form = MessageForm(request.form)
    print("The route used is @messages_blueprint.route")
    if message_form.validate():
        print('message_form.validate is successful')
        message = Message(request.form.get('content'), user_id)
        db.session.add(message)
        db.session.commit()
        flash('Message Created')
        return redirect(url_for('message.new', user_id=user_id, messages=Message.query.all()))
    return redirect(url_for('message.new', user_id=user_id, messages=Message.query.all()))
# ----------------------------------------------------------------------------


@messages_blueprint.route('/<int:id>', methods=['PATCH'])
def update(user_id, id):
    message = Message.query.get(id)
    message.content = request.form.get('content')
    db.session.add(message)
    db.session.commit()
    flash('Message updated')
    return redirect(url_for('message.index', user_id=user_id))


@messages_blueprint.route('/<int:id>', methods=['DELETE'])
def delete(user_id, id):
    message = Message.query.get(id)
    db.session.delete(message)
    db.session.commit()
    flash('Message Deleted!')
    return redirect(url_for('messages.index', user_id=user_id))
