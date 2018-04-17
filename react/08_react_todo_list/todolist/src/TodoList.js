import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { name: 'code', description: 'finish homework', isEditing: false }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleAdd(newTodoName) {
    const newTodo = { name: newTodoName, isEditing: false };
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  handleEdit(idx, editedTodo) {
    const edited = { name: editedTodo, isEditing: false };
    this.setState(prevState => {
      const newTodos = [...prevState.todos];
      newTodos[idx] = edited;
      return { todos: newTodos };
    });
  }

  handleRemove(idx) {
    const { todos } = this.state;
    // todos.slice(0, idx).concat(todos.slice(idx + 1)); below is the same
    const remainingTodos = todos.filter((val, i) => i !== idx);
    this.setState({
      todos: remainingTodos
    });
  }

  toggleEdit(idx) {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo, i) => {
      if (i === idx) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    let todos = this.state.todos.map((todo, idx) => (
      <Todo
        handleEdit={this.handleEdit.bind(this, idx)}
        editTodo={this.toggleEdit.bind(this, idx)}
        removeTodo={this.handleRemove.bind(this, idx)}
        todo={todo}
        key={idx}
      />
    ));

    return (
      <div>
        Add new todo:
        <NewTodoForm handleAdd={this.handleAdd} />
        <br />
        {todos}
      </div>
    );
  }
}

export default TodoList;
