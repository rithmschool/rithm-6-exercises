import React, { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
}
