import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import EditTodoForm from './EditTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [ ],
            isOpen: false,
        }
        this.addTodo = this.addTodo.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.closeEditor = this.closeEditor.bind(this);
    }

    componentDidMount() {
        if(localStorage.todos) {
            let todos = JSON.parse(localStorage.todos);
            this.setState(prevState => {
                let newState = {...prevState}
                newState.todos = [...todos];
                return newState;
            });
        }
    }

    componentDidUpdate() {
        let todosString = JSON.stringify(this.state.todos);
        localStorage.setItem('todos', todosString);
    }

    toggleForm() {
        this.setState(prevState => {
            let newState = {...prevState}
            if(newState.isOpen === true) {
                newState.isOpen = false;
            } else {
                newState.isOpen = true;
            }
            return {...newState}
        })
    }

    addTodo(newTodo) {
        newTodo.isCompleted = false;
        this.setState(prevState => {
            let newState = {...prevState}
            newState.isOpen = false;
            newState.todos = [newTodo, ...prevState.todos];
            return newState;
        });
    }

    markCompleted(i) {
        this.setState((prevState) => {
            let newState = {...prevState}
            if(newState.todos[i].isCompleted === false) {
                newState.todos[i].isCompleted = true;
            } else {
                newState.todos[i].isCompleted = false;
            }
            return newState;
        });
    }

    openEditor(i) {
        this.setState((prevState) => {
            let newState = {...prevState}
            newState.todos.map(el => el.isUnderEdit = false)
            newState.todos[i].isUnderEdit = true;
            return newState;
        });
    }

    closeEditor() {
        this.setState((prevState) => {
            let newState = {...prevState}
            newState.todos.map(el => el.isUnderEdit = false)
            return newState;
        });
    }

    editTodo(i, editedTodo) {
        this.setState((prevState) => {
            let newState = {...prevState}
            newState.todos.map(el => el.isUnderEdit = false)
            newState.todos[i].title = editedTodo.title;
            newState.todos[i].description = editedTodo.description;
            return newState;
        });
    }
    
    deleteTodo(i) {
        let newTodos = [...this.state.todos];
        newTodos.splice(i, 1);
        this.setState({todos: newTodos});
    }

    render() {
        return (
            <div className="container m-1">
                <button className="btn btn-secondary btn-lg form-opener" onClick={this.toggleForm}>{this.state.isOpen ? "Close todo form" : "Open todo form"}</button>
                <NewTodoForm isOpen={this.state.isOpen} addTodo={this.addTodo} />
                <ul className="list-group text-center">
                    {this.state.todos.map((todo, i) => {
                        if(this.state.todos[i].isUnderEdit) {
                            return (
                                <EditTodoForm key={i} closeEditor={this.closeEditor.bind(this)} editTodo={this.editTodo.bind(this, i)} todo={todo} />
                            )
                        } else {
                            return (
                                <Todo key={i} title={todo.title} description={todo.description} completionStatus={this.state.todos[i].isCompleted} markCompleted={this.markCompleted.bind(this, i)} deleteTodo={this.deleteTodo.bind(this, i)} openEditor={this.openEditor.bind(this, i)} />
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList;