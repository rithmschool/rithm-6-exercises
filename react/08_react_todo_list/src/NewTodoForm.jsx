import React, { Component } from 'react';

class NewTodoForm extends Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.addTodo({
            title: event.target.title.value,
            description: event.target.description.value,
        });
        event.target.reset();
    }
    
    render() {
        return (
            <form className={this.props.isOpen ? "mx-auto my-3 text-left todo-form" : "mx-auto my-3 text-left todo-form hide"}  onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label className="mb-0">Title</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder="Enter title of todo" required />
                    <small id="titleHelp" className="form-text text-muted">You can enter any title for the todo</small>
                </div>
                <div className="form-group">
                    <label className="mb-0">Description</label>
                    <input type="text" className="form-control" id="description" name="description" placeholder="Enter description of todo" />
                    <small id="descriptionHelp" className="form-text text-muted">You can enter any description for the todo</small>
                </div>
                <button type="submit" className="btn btn-secondary btn-block">Add new todo</button>
            </form>
        )
    }
}

export default NewTodoForm;