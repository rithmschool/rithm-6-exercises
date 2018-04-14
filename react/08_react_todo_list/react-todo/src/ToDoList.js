import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentTodos: Array.from(
      //   { length: this.props.Todos.length },
      //   (item, index) => this.props.Todos[index]
      // )

      currentTodos: Array.from({ length: this.props.Todos.length }).map(
        (item, index) => {
          return { ...this.props.Todos[index], isCompleted: 'false' };
        }
      )

      // currentTodos: [
      //   {
      //     title: 'morning',
      //     description: 'it is the morning',
      //     isCompleted: true
      //   },
      //   {
      //     title: 'afternoon',
      //     description: 'it is the afternoon',
      //     isCompleted: false
      //   }
      // ]
    };
    this.markAsComplete = this.markAsComplete.bind(this);
    // this.handleAdd = this.handleAdd.bind(this);
    // this.handleAdd = this.handleAdd.bind(this);
  }

  // addToDo() {}
  // removeToDo() {}
  markAsComplete(index) {
    console.log('clicked');
    //trying to get click event handler to update state
    console.log(index);
    this.setState(prevState => {
      let todosCopy = [...prevState.currentTodos];
      todosCopy[index].isComplete = !todosCopy[index].isComplete;
      return { currentTodos: todosCopy };
    });
  }

  render() {
    let Todos = this.state.currentTodos.map(
      ({ title, description, isCompleted }, i) => {
        return (
          <Todo
            key={i}
            title={title}
            description={description}
            isCompleted={isCompleted}
            markAsComplete={this.markAsComplete.bind(this, i)}
            // onClick={() => console.log('murph')}
            // onClick={this.markAsComplete}
          />
        );
      }
    );
    // let Todos = this.props.Todos.map(({ title, description }) => {
    //   return <Todo title={title} description={description} />;
    // });
    return <div>{Todos}</div>;
  }
}

TodoList.defaultProps = {
  Todos: [
    {
      title: 'wake up',
      description: 'wake up and stuff.'
    },
    {
      title: 'attack',
      description: 'attack without mercy.'
    },
    {
      title: 'chill',
      description: 'just sorta chill or whatever.'
    }
  ]
};

export default TodoList;
