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

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('in getDerivedState');
    //debugger;
    return {
      title: nextProps.title,
      description: nextProps.description
    };
  }

  handleSubmit(e) {
    console.log('handling submit');
    e.preventDefault();
    this.props.submitData({ ...this.state });
    this.setState({ title: '', description: '' });
    e.target.reset();
    this.props.history.push('/todo');
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    console.log('in form');
    // debugger;
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
