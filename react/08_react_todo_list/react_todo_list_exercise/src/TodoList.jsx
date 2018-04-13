import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    let todoComponents = this.props.todos.map(item => {
      return <Todo todoItem={item} />
    })
    return (
      <div>
        <h1>Todo List</h1>
        <ol>
          {todoComponents}
        </ol>
      </div>
    );
  }
}

TodoList.defaultProps = {
  todos: ['buy ice cream', 'order pizza', 'walk 20 miles']
};
