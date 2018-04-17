import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <form onSubmit={this.props.add}>
        <label> Todo List </label>
        <input type="text" name="title" />
        <input type="text" name="description" />
        <br />
        <input type="submit" value="Submit" className="App-btn" />
      </form>
    );
  }
}

//this render a form that when submitted will create a new todo.
//no state has one props called add( function)
