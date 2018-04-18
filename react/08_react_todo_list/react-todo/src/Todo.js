import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      title: nextProps.title,
      description: nextProps.description
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editToDo({ ...this.state });
    this.setState({ title: '', description: '' });
    e.target.reset();
  }

  render() {
    const {
      title,
      description,
      isCompleted,
      markAsComplete,
      removeToDo,
      showEditForm,
      editToDo,
      isEditSelected
    } = this.props;
    return (
      <div>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Is Completed: {isCompleted ? 'True' : 'False'}</p>
        <button onClick={markAsComplete}>Toggle Completion Status</button>
        <button onClick={removeToDo}>Delete</button>
        <button onClick={showEditForm}>Change</button>
        {isEditSelected ? (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
            <input type="submit" />
          </form>
        ) : null}
      </div>
    );
  }
}
export default Todo;
