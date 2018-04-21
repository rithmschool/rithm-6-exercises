import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.currentVals[this.props.match.params.id],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
}
handleSubmit(e) {
    e.preventDefault();
    this.props.handleEdit(this.state.task, this.props.match.params.id);
    this.setState({ task: "" });
    this.props.history.push("/todos");
}

handleDelete() {
    this.props.deleteTodo(this.props.match.params.id)
    this.props.history.push('/todos');
}

render() {
    return(
        <div>
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} name="task" type="text" value={this.state.task}/>
            <input type="submit"/>
        </form>
        <button onClick={this.handleDelete}>x</button>
        </div>
    )
}
}

export default withRouter(EditTodo)