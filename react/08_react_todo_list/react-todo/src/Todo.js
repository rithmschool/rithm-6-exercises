import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewToDoForm from './NewToDoForm';

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
    this.props.submitData({ ...this.state });
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
    let completionText = 'Mark Completed';
    if (isCompleted) completionText = 'Mark Incomplete';
    // if (isEditSelected) {
    //   //debugger;;;
    //   this.props.history.push(`/todo/${this.props.match.params.id}`);
    // }
    return (
      <div
        className="Todo"
        style={isCompleted ? { backgroundColor: 'rgba(68, 57, 57, .5)' } : {}}
      >
        {this.props.id !== undefined ? (
          <Link
            style={isCompleted ? { textDecoration: 'line-through' } : {}}
            to={`/todos/${this.props.id}`}
          >
            {title}
          </Link>
        ) : (
          <p style={isCompleted ? { textDecoration: 'line-through' } : {}}>
            Title: {title}
          </p>
        )}
        <p style={isCompleted ? { textDecoration: 'line-through' } : {}}>
          Description: {description}
        </p>
        <button onClick={markAsComplete}>{completionText}</button>
        <button onClick={removeToDo}>Delete</button>
        <button onClick={showEditForm}>Change</button>
        {isEditSelected ? (
          <NewToDoForm submitData={this.props.submitData} />
        ) : null}

        {/* // <form onSubmit={this.handleSubmit}>
          //   <label htmlFor="title">Title: </label>
          //   <input
          //     id="title"
          //     name="title"
          //     onChange={this.handleChange}
          //     value={this.state.title}
          //   />
          //   <label htmlFor="description">Description: </label>
          //   <input
          //     id="description"
          //     name="description"
          //     onChange={this.handleChange}
          //     value={this.state.description}
          //   />
          //   <input type="submit" />
          // </form>
        // ) : (null)} */}
      </div>
    );
  }
}
export default Todo;
