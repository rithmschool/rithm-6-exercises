import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
}
handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.state, this.props.history);
    this.setState({ task: "" });
    
}
render() {
    return(
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} name="task" type="text" value={this.state.task}/>
            <input type="submit"/>
        </form>
    )
}

}

export default withRouter(TodoForm)