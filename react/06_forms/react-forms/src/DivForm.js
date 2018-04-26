import React, { Component } from "react";

class DivForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      width: "",
      backgroundColor: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addDiv(this.state);
  }

  render() {
    return (
      <div id="con">
        <form onSubmit={this.handleSubmit}>
          <header />
          <div id="inputFields">
            <div>
              <label>Width</label>
              <input
                type="number"
                name="width"
                value={this.state.width}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Height</label>
              <input
                type="number"
                name="height"
                value={this.state.height}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Color</label>
              <input
                type="string"
                name="backgroundColor"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button> Submit </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default DivForm;
