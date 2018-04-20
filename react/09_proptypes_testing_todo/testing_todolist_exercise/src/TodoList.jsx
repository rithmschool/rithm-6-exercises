import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: 'Buy ice cream',
          description: 'Grocery Store',
          isEditing: false
        },
        {
          title: 'Order pizza',
          description: 'Dinner Plans',
          isEditing: false
        },
        {
          title: 'Walk 20 miles',
          description: 'Fitness Routine',
          isEditing: false
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(data) {
    this.setState(prevState => ({
      todos: [data, ...prevState.todos]
    }));
  }

  handleEdit(idx, data) {
    let newState = { ...this.state };
    newState.todos[idx] = data;
    this.setState(newState);
  }

  handleEditRequest(idx, data) {
    let newState = { ...this.state };
    let foundTodo = newState.todos[idx];
    foundTodo.isEditing = !foundTodo.isEditing;
    this.setState(newState);
  }

  handleComplete(idx) {
    let newState = { ...this.state };
    if (newState.todos[idx].className === 'complete') {
      newState.todos[idx].className = '';
    } else {
      newState.todos[idx].className = 'complete';
    }
    this.setState(newState);
  }

  handleDelete(idx) {
    let newState = { ...this.state };
    newState.todos.splice(idx, 1);
    this.setState(newState);
  }

  render() {
    let todoComponents = this.state.todos.map((data, idx) => {
      return <Todo
        title={data.title}
        description={data.description}
        isEditing={data.isEditing}
        handleEditRequest={this.handleEditRequest.bind(this, idx)}
        handleEdit={this.handleEdit.bind(this, idx)}
        handleComplete={this.handleComplete.bind(this, idx)}
        handleDelete={this.handleDelete.bind(this, idx)}
        className={data.className}
      />
    })
    return (
      <div>
        <NewTodoForm handleAdd={this.handleAdd} />
        <ol>
          {todoComponents}
        </ol>
      </div>
    );
  }
}
