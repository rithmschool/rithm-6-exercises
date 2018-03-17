@app.route('/users/<int:id>/messages', methods=["POST"])
def index_message(id):
    if request.method == 'POST':
        form = AddMessage(request.form)
        if form.validate():
            content = request.form.get('content')
            user_id = id
            new_message = Message(content, user_id)
            db.session.add(new_message)
            db.session.commit()
            return redirect(url_for('show', id=id))
        else:
            return render_template('./users/message_new.html', form=form)

@app.route('/users/<int:id>/messages/new')
def new_message(id):
    return render_template('./messages/message_new.html', user_id=id, form=AddMessage(request.form))

@app.route('/messages/<int:message_id>', methods=["PATCH", "DELETE"])
def show_message(message_id):
    target_message = Message.query.get(message_id)
    if request.method == b'PATCH':
        form = AddMessage(request.form)
        if form.validate():
            target_message.content = request.form.get('content')
            db.session.add(target_message)
            db.session.commit()
            return redirect(url_for('show', id=target_message.user_id))
        else:
            return render_template('/messages/message_edit.html', message=target_message, form=form)
    if request.method == b'DELETE':
        delete_form = DeleteForm(request.form)
        if delete_form.validate():
            db.session.delete(target_message)
            db.session.commit()
            return redirect(url_for('show', id=target_message.user_id))

@app.route('/messages/<int:message_id>/edit')
def edit_message(message_id):
    target_message = Message.query.get(message_id)
    return render_template('/messages/message_edit.html', message=target_message, form=AddMessage(obj=target_message))
