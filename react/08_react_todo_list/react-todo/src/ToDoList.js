import React, { Component } from 'react';
import Todo from './Todo';
import NewToDoForm from './NewToDoForm';
import PropTypes from 'prop-types';

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
            isEditSelected={isEditSelected}
            markAsComplete={idx => this.props.markAsComplete(i)}
            removeToDo={this.props.removeToDo.bind(this, i)}
            submitData={this.props.editToDo.bind(this, i)}
            showEditForm={this.props.showEditForm.bind(this, i)}
          />
        );
      }
    );
    return <div>{Todos}</div>;
  }
}

TodoList.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isCompleted: PropTypes.boolean,
  isEditSelected: PropTypes.boolean,
  markAsComplete: PropTypes.func,
  removeToDo: PropTypes.func,
  addToDo: PropTypes.func,
  editToDo: PropTypes.func,
  showEditForm: PropTypes.func
};

export default TodoList;
