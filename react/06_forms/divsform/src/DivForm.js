import React, { Component } from 'react';

class DivForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      color: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = e => {
    e.preventDefault();
    this.props.addChange(this.state);
    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <label>Width</label>
        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.width}
          id="width"
          name="width"
        />
        <label>Height</label>
        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.height}
          id="height"
          name="height"
        />
        <label>Color</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.color}
          id="bgc"
          name="color"
        />
        <input type="submit" />
      </form>
    );
  }
}

export default DivForm;
