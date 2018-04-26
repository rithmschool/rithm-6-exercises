import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      hex: ''
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
    this.setState(this.initialState);
    this.props.history.push('/colors');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Color Name</label>
          <input type="text" name="color" onChange={this.handleChange} />
          <label>Pick a color!</label>
          <input type="color" name="hex" onChange={this.handleChange} />
          <input type="submit" value="Add new color!" />
        </form>
        <Link to="/colors">Back to List</Link>
      </div>
    );
  }
}

export default withRouter(NewForm);
