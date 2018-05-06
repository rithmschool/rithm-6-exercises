import { addTodo } from "../Store/actions";
import { connect } from "react-redux";
import NewTodoForm from "../components/NewTodoForm";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: task => dispatch(addTodo(task))
  };
}

export default connect(null, mapDispatchToProps)(NewTodoForm);
