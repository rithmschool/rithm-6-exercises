import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NewColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addColor({ ...this.state });
    this.setState({ name: '', color: '' });
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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        {/* change to be the color type input */}
        <label htmlFor="color">Color: </label>
        <input
          id="color"
          name="color"
          onChange={this.handleChange}
          value={this.state.color}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default withRouter(NewColorForm);
