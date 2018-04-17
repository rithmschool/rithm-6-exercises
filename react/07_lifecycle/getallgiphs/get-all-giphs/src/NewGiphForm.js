import React, { Component } from 'react';

export default class GiphForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.getGiphs(this.state.keyword);
    this.setState({ keyword: '' });
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit} action="">
        <input name="keyword" type="text" />
        <input type="submit" value="Find some Giphs" />
      </form>
    );
  }
}
