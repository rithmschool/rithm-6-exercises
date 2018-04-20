import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addToDo({ ...this.state });
    this.setState({ title: '', description: '' });
    e.target.reset();
    this.props.history.push('/');
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Link to="/todos">Back To All Todos</Link>
        <form className="TodoForm" onSubmit={this.handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(NewToDoForm);
