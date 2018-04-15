import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['code', 'groceries', 'exercise']
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd(newTodo) {
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  handleRemove(idx) {
    const { todos } = this.state;
    const remainingTodos = todos.slice(0, idx).concat(todos.slice(idx + 1));
    this.setState({
      todos: remainingTodos
    });
  }

  render() {
    let todos = this.state.todos.map((todo, idx) => (
      <Todo
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
