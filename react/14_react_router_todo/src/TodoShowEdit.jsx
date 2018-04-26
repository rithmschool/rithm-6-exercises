import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class EditTodoShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        let todo;
        if(!nextProps.todo) {
            if(JSON.parse(localStorage.getItem('todos'))[nextProps.match.params.id]) {
                todo = JSON.parse(localStorage.getItem('todos'))[nextProps.match.params.id];
            } else {
                return <Redirect to="/todos" />
            }
        }
        
        return {
          title: todo || nextProps.todo.title,
          description: todo || nextProps.todo.description,
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleEditSubmit(event) {
        event.preventDefault();
        this.props.editTodo({
            title: this.state.title,
            description: this.state.description,
        });
        this.props.history.push(`/todos/${this.props.match.params.id}`)
    }
    
    render() {
        let { todo, editShowTodo } = this.props;
        const idx = this.props.match.params.id; 
        if(!todo) {
            if(JSON.parse(localStorage.getItem('todos'))[idx]) {
                todo = JSON.parse(localStorage.getItem('todos'))[idx];
            } else {
                return <Redirect to="/todos" />
            }
        }

        return (
            <div className="container mt-2 mx-auto">
                <ul className="list-group text-center">
                    <li className="list-group-item mx-auto">
                        <form className="my-3 text-left edit-todo-form"  onSubmit={this.handleEditSubmit.bind(this)}>
                            <div className="form-group">
                                <label className="mb-0">Title</label>
                                <div className="d-flex inline-flex">
                                    <input type="text" className="form-control" id="title" name="title" placeholder="Edit title of todo" value={this.state.title} onChange={this.handleChange} required />
                                    <button type="submit" className="btn btn-warning d-inline ml-1" onClick={this.props.closeEditor}>Close</button> 
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="mb-0">Description</label>
                                <input type="text" className="form-control" id="description" name="description" placeholder="Edit description of todo" value={this.state.description} onChange={this.handleChange} />
                            </div>
                            <button type="submit" className="btn btn-secondary btn-block d-inline">Edit todo</button>
                        </form>
                    </li>
                </ul>
            </div>
        )
    }
}

export default EditTodoShow;
         