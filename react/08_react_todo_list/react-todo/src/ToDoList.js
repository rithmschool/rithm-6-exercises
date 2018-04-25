import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends Component {
  render() {
    // ////debugger;;;
    let todoLis = this.props.todos.map(
      ({ title, description, id, isCompleted, isEditSelected }) => {
        return (
          <Todo
            //is this cool?
            key={id}
            id={id}
            title={title}
            description={description}
            isCompleted={isCompleted}
            isEditSelected={isEditSelected}
            markAsComplete={idx => this.props.markAsComplete(id)}
            removeToDo={this.props.removeToDo.bind(this, id)}
            submitData={this.props.editToDo.bind(this, id)}
            showEditForm={this.props.showEditForm.bind(this, id)}
          />
        );
      }
    );
    return <div>{todoLis}</div>;
  }
}

// TodoList.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   isCompleted: PropTypes.boolean,
//   isEditSelected: PropTypes.boolean,
//   markAsComplete: PropTypes.func.isRequired,
//   removeToDo: PropTypes.func.isRequired,
//   addToDo: PropTypes.func.isRequired,
//   editToDo: PropTypes.func.isRequired,
//   showEditForm: PropTypes.func.isRequired
// };

export default TodoList;
