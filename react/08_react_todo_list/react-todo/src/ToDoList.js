import React, { Component } from 'react';
import Todo from './Todo';
import NewToDoForm from './NewToDoForm';

class TodoList extends Component {
  render() {
    let Todos = this.props.todos.map(
      ({ title, description, isCompleted, isEditSelected }, i) => {
        return (
          <Todo
            key={i}
            //so i can render show and edit routes
            id={i}
            title={title}
            description={description}
            isCompleted={isCompleted}
            markAsComplete={idx => this.props.markAsComplete(i)}
            removeToDo={this.props.removeToDo.bind(this, i)}
            editToDo={this.props.editToDo.bind(this, i)}
            showEditForm={this.props.showEditForm.bind(this, i)}
            isEditSelected={isEditSelected}
          />
        );
      }
    );
    return <div>{Todos}</div>;
  }
}

export default TodoList;
