import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class TodoShow extends Component {
  constructor(props) {
    super(props);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  editTodo(e) {
    this.props.handleEdit(this.props.todo_id);
  }

  deleteTodo(e) {
    this.props.handleDelete(this.props.todo_id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/">Go back to all Todos</Link>
          <div>
            <Link
              to={`/todos/${this.props.todo_id}/edit`}
              onClick={this.editTodo}
            >
              Edit this todo
            </Link>
            <button onClick={this.deleteTodo}>Delete this todo</button>
            <button>Mark as finished</button>
          </div>
        </div>

        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default withRouter(TodoShow);
