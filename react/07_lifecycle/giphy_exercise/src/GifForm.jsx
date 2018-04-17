import React, { Component } from "react";

export default class GifForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  handleChange = e => {
    // let newState = { ...this.state };
    // newState[e.target.name] = e.target.value;
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addGif(this.state);
    this.setState({
      userInput: ""
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input
            placeholder="Enter a Search Term"
            onChange={this.handleChange}
            value={this.state.userInput}
          />
          <button>Search Giphy!</button>
          <button onClick={this.handleDelete} >Remove Images</button>
        </form>
      </div>
    );
  }
}
