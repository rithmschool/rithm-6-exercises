import TodoList from "../components/TodoList";
import { addTodo, removeTodo, updateTodo } from "../Store/actions";
import { connect } from "react-redux";

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: () => dispatch(addTodo()),
    removeTodo: i => dispatch(removeTodo(i)),
    updateTodo: (newTask, i) => dispatch(updateTodo(newTask, i))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
