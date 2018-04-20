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
            //this is imperative and should be refactored eventually
            id={i}
            title={title}
            description={description}
            isCompleted={isCompleted}
            markAsComplete={idx => this.props.markAsComplete(i)}
            removeToDo={this.props.removeToDo.bind(this, i)}
            //refactor so now i?
            //instead get index in App.js when processing?
            submitData={this.props.editToDo.bind(this, i)}
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
