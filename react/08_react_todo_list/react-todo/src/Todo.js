import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      title: nextProps.title,
      description: nextProps.description
    };
  }

  render() {
    const Todo = {
      //where does this need to happen?
      this.props.title,
      this.props.description,
      this.props.isCompleted,
      this.props.markAsComplete,
      this.props.removeToDo,
      this.props.showEditForm,
      this.props.editToDo,
      this.props.isEditSelected
    };
    return (
      <div>
        <p>Title: {title}</p>
        <p>Description: {description}</p>

        <p>Is Completed: {isCompleted ? 'True' : 'False'}</p>
        <button onClick={markAsComplete}>Toggle Completion Status</button>
        <button onClick={removeToDo}>Delete</button>
        <button onClick={showEditForm}>Change</button>
        {isEditSelected ? (
          <form onSubmit={editToDo}>
            <label htmlFor="title">Title: </label>
            <input name="title" />
            <label htmlFor="description">Description: </label>
            <input name="description" />
            <input type="submit" />
          </form>
        ) : null}
      </div>
    );
  }
}
export default Todo;
