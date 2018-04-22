import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      title: nextProps.title,
      description: nextProps.description
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitData({ ...this.state });
    this.setState({ title: '', description: '' });
    e.target.reset();
    //why am I using this over a redirect?
    this.props.history.push('/todo');
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

NewToDoForm.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  submitData: PropTypes.func.isRequired
};

export default withRouter(NewToDoForm);
