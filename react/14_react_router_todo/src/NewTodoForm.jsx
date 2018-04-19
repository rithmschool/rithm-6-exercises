import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.addTodo({
            title: this.state.title,
            description: this.state.description,
        });
        event.target.reset();
        this.props.history.push('/todos')
    }
    
    render() {
        return (
            <form className="mx-auto my-3 text-left todo-form"  onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label className="mb-0">Title</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder="Enter title of todo" onChange={this.handleChange} required />
                    <small id="titleHelp" className="form-text text-muted">You can enter any title for the todo</small>
                </div>
                <div className="form-group">
                    <label className="mb-0">Description</label>
                    <input type="text" className="form-control" id="description" name="description" placeholder="Enter description of todo" onChange={this.handleChange} />
                    <small id="descriptionHelp" className="form-text text-muted">You can enter any description for the todo</small>
                </div>
                <button type="submit" className="btn btn-secondary btn-block">Add new todo</button>
            </form>
        )
    }
}

export default NewTodoForm;