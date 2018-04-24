import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   todos: Array.from({ length: this.props.Todos.length }).map((item, id) => {
    //     return {
    //       ...this.props.Todos.id,
    //       isCompleted: false,
    //       isEditSelected: false
    //     };
    //   }),
    //   redirect: false
    // };
    this.markAsComplete = this.markAsComplete.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }

  addToDo(newTodo) {
    console.log('in adding todo');
    this.props.dispatch({
      type: 'ADD_TODO',
      newTodo
    });
    // this.setState(prevState => {
    //   return { todos: [...prevState.todos, newTodo] };
    // });
  }

  removeToDo(id) {
    console.log('in removing todo');
    //debugger;
    // () =>
    this.props.dispatch({
      type: 'REMOVE_TODO',
      payload: { id, redirect: false }
    });

    // this.setState(prevState => {
    //   let todosCopy = [...prevState.todos].filter(todo => {
    //     return todo.id !== id;
    //   });
    //   // console.log(todosCopy);
    //   return { todos: todosCopy, redirect: true };
    // });
  }

  editToDo(id, editedTodo) {
    console.log('in edit to do');
    //debugger;
    this.props.dispatch({
      type: 'UPDATE_TODO',
      editedTodo,
      id
    });
    // this.setState(prevState => {
    //   let todosCopy = [...prevState.todos];
    //   todosCopy.id = {
    //     ...editedTodo
    //   };
    //   return { todos: todosCopy };
    // });
  }

  showEditForm(id) {
    console.log('in show edit form');
    //need to move isEditSelected and all into redux store

    // this.setState(prevState => {
    //   let todosCopy = [...prevState.todos];
    //   todosCopy.id.isEditSelected = !todosCopy.id.isEditSelected;
    //   console.log(todosCopy);
    //   return { todos: todosCopy };
    // });
  }

  //make sure it's being passed the new id
  markAsComplete(id) {
    console.log('in mark as complete');
    this.props.dispatch({
      type: 'TOGGLE_COMPLETION',
      id
    });
    // this.setState(prevState => {
    //   let todosCopy = [...prevState.todos];
    //   todosCopy.id.isCompleted = !todosCopy.id.isCompleted;
    //   return { todos: todosCopy };
    // });
  }

  render() {
    console.log('in renderTodoList');
    // console.log(this.props.todos);
    // debugger;
    const renderTodoList = props => {
      // debugger;
      console.log('in in renderTodoList', this.props.todos);
      console.log('in props', props, this.props);
      return (
        <div className="App">
          <h1>Dragon Todo List</h1>
          <Link to="/todos/new">Add New Todo</Link>
          <ToDoList
            key={0}
            markAsComplete={this.markAsComplete}
            removeToDo={this.removeToDo}
            editToDo={this.editToDo}
            showEditForm={this.showEditForm}
            todos={this.props.todos}
            // todos={this.state.todos}
          />
        </div>
      );
    };

    const renderNewTodoForm = props => {
      console.log('in renderNewTodoForm');
      //debugger;
      return (
        <div className="App">
          <h1>Dragon Todo List</h1>
          <NewToDoForm submitData={this.addToDo} />
        </div>
      );
    };

    const renderEditForm = props => {
      console.log('in renderEditForm');
      // debugger;
      const targetTodo = this.props.todos.filter(todo => {
        // debugger;

        return todo.id === props.match.params.id;
      })[0];
      console.log('Target todo id:', targetTodo.id);
      // debugger;
      return (
        <div className="App">
          <h1>Dragon Todo List</h1>
          <p>Edit Todo</p>
          <NewToDoForm
            submitData={this.editToDo.bind(this, targetTodo.id)}
            // submitData={this.editToDo.bind(this, props.match.params.id)}
          />
        </div>
      );
    };
    const renderSingleTodo = props => {
      console.log('in renderSingleTodo');
      const targetTodo = this.props.todos.filter(
        todo => props.match.params.id === todo.id
      )[0];
      return (
        <div className="App">
          <h1>Dragon Todo List</h1>
          <Link to="/todos">Back To All Todos</Link>
          <Todo
            title={targetTodo.title}
            description={targetTodo.description}
            isCompleted={targetTodo.isCompleted}
            markAsComplete={this.markAsComplete.bind(
              this,
              props.match.params.id
            )}
            removeToDo={this.removeToDo.bind(this, props.match.params.id)}
            submitData={this.editToDo.bind(this, props.match.params.id)}
            showEditForm={this.showEditForm.bind(this, props.match.params.id)}
            isEditSelected={targetTodo.isEditSelected}
          />
        </div>
      );
    };

    // if (this.state.redirect) {
    //   this.setState(prevState => {
    //     let newState = { ...prevState };
    //     newState.redirect = false;
    //     return { ...newState };
    //   });
    //   return <Redirect to="/todos" />;
    // }

    // //debugger;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/todos" exact render={renderTodoList} />
          <Route path="/todos/new" render={renderNewTodoForm} />
          <Route path="/todos/:id/edit" render={renderEditForm} />
          <Route path="/todos/:id" render={renderSingleTodo} />
          <Redirect to="/todos" />
        </Switch>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  console.log('entering mapStateToProps');
  return {
    todos: state.todos,
    redirect: state.redirect
  };
}

export default connect(mapStateToProps)(App);
