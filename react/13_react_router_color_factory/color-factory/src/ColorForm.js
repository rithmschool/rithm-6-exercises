import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";

class ColorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            value: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleAdd(this.state);
        this.setState({ name: "", value: ""});
        this.props.history.push("/colors")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        name="name" 
                        type="text" 
                        onChange={this.handleChange} 
                        value={this.state.name}
                    />
                </div>
                <div>
                    <label htmlFor="value">Color</label>
                    <input 
                        name="value" 
                        type="color" 
                        onChange={this.handleChange} 
                        value={this.state.value}
                    />
                </div>
                <input type="submit" value="Add this color"/>
            </form>
        );
    }
}

export default withRouter(ColorForm);