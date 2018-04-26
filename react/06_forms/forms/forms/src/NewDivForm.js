import React, { Component } from "react";

class NewDivForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      backgroundColor: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state);
    this.setState({ width: "", height: "", backgroundColor: "" });
  }
  render() {
    return (
      <div>
        <form onClick={this.handleSubmit.bind(this)}>
          <input
            name="width"
            value={this.state.width}
            onChange={this.handleChange.bind(this)}
          />
          <input
            name="height"
            value={this.state.height}
            onChange={this.handleChange.bind(this)}
          />
          <input
            name="backgroundColor"
            value={this.state.backgroundColor}
            onChange={this.handleChange.bind(this)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewDivForm;
