import React, { Component } from 'react';
import Meme from './Meme';

class MemeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addToDo({ ...this.state });
    this.setState({ url: '' });
    e.target.reset();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form className="MemeForm" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input name="url" onChange={this.handleChange} value={this.state.url} />
        <input type="submit" />
      </form>
    );
  }
}

export default MemeForm;
