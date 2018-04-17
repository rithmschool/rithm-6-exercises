import React, { Component } from 'react';

class NewGiphyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      searchTerm: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd({ ...this.state });
    this.setState({ src: '', searchTerm: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="searchTerm"
          onChange={this.handleChange}
          value={this.state.searchTerm}
        />
        <input type="submit" />
      </form>
    );
  }
}

export { NewGiphyForm };
