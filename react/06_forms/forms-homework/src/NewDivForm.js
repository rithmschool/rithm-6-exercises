import React, { Component } from 'react';

export default class NewDivForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      backgroundColor: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state);
    this.setState({ height: '', width: '', backgroundColor: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name="height"
          placeholder="height"
          type="number"
          value={this.state.height}
        />
        <input
          onChange={this.handleChange}
          name="width"
          placeholder="width"
          type="number"
          value={this.state.width}
        />
        <input
          onChange={this.handleChange}
          name="backgroundColor"
          placeholder="backgroundColor"
          type="text"
          value={this.state.backgroundColor}
        />
        <input type="submit" />
      </form>
    );
  }
}
