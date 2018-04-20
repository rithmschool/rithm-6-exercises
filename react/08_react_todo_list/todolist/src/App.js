import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // FIXME: this shoudl be a \list of todos DONE
      todos: [
        { name: 'code', description: 'finish homework', isEditing: false },
        { name: 'exercise', description: 'aerial yoga', isEditing: false },
        {
          name: 'laundry',
          description: 'wash towels',
          isEditing: false
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd(newTodoName, newTodoDescription) {
    const newTodo = {
      name: newTodoName,
      description: newTodoDescription,
      isEditing: false
    };
    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos]
    }));
  }

  handleEdit(idx, editedTodo, editedDescription) {
    const edited = {
      name: editedTodo,
      description: editedDescription,
      isEditing: false
    };
    this.setState(prevState => {
      const newTodos = [...prevState.todos];
      newTodos[idx] = edited;
      return { todos: newTodos };
    });
  }

  handleRemove(idx) {
    const { todos } = this.state;
    const remainingTodos = todos.filter((val, i) => i !== idx);
    this.setState({
      todos: remainingTodos
    });
  }

  toggleEdit(idx) {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo, i) => {
      if (i === idx) {
        // FIXME: you mutate the same todo obj DONE
        // { ...todo, isEditing: !todo.isEditing };

        todo.isEditing = !todo.isEditing;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    const TodoListWithTodos = () => {
      // fixme todos is an array of todos, not a single one with a name
      console.log(this.state.todos);
      return <TodoList todos={this.state.todos} />;
    };

    const showNewTodoForm = props => {
      console.log('showNewTodoForm render, props=', props);
      // fixme: definitely call it somethign other than name ;) DONE
      return <NewTodoForm handleAdd={this.handleAdd} />;
    };

    const showTodo = props => {
      // fixme: console.log your props
      console.log(props);
      const todoName = props.match.params.name;
      const todoDescription = props.match.params.description;
      const todo = this.state.todos[todoName];
      return todo ? (
        <Todo {...props} name={todoName} description={todoDescription} />
      ) : (
        <Redirect to="/todos" />
      );
    };

    return (
      <Switch>
        <Route exact path="/todos" render={TodoListWithTodos} />
        <Route exact path="/todos/new" render={showNewTodoForm} />
        <Route exact path="/todos/:id" render={showTodo} />
        <Route exact path="/todos/:id/edit" render={showTodo} />
      </Switch>
    );
  }
}

export default App;
