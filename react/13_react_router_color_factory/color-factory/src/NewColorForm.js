import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      code: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.handleAdd(this.state);
    this.setState({ color: '', code: '' });
    this.props.history.push('/');
    e.target.reset();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name="color" />
        <input onChange={this.handleChange} type="color" name="code" />
        <input type="submit" value="Create a new color" />
      </form>
    );
  }
}

export default withRouter(Form);
