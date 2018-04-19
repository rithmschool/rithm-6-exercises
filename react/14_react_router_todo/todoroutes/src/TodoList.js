import React, { Component } from "react";
import Itodo from "./Itodo";
import EditTodo from "./EditTodo";

export default class TodoList extends Component {
  handleRemove = idx => {
    this.props.handleRemove();
  };
  render() {
    let todos = this.props.allTodos.map((todo, idx) => {
      if (todo.toEdit === false) {
        return (
          <Itodo
            key={idx}
            title={todo.title}
            desc={todo.desc}
            finished={todo.complete}
            handleRemove={this.props.handleRemove.bind(this, idx)}
            updateStatus={this.props.updateStatus.bind(this, idx)}
            handleEdit={this.props.handleEdit.bind(this, idx)}
          />
        );
      } else {
        return (
          <EditTodo
            key={idx}
            title={todo.title}
            desc={todo.desc}
            id={todo.id}
            addEdit={this.props.addEdit.bind(this, idx)}
          />
        );
      }
    });
    return <div>{todos}</div>;
  }
}
