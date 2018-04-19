import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewColorForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            value: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addColor({
            name: this.state.name,
            value: this.state.value
        })
    }

    render() {
        return (
            <div className="new-color-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" id="name" onChange={this.handleChange} />
                    <input type="color" name="value" id="value" onChange={this.handleChange} />
                    <button type="submit">Add new color</button>
                </form>
                <Link to="/colors">back to your colors</Link>
            </div>
        )
    }
}

export default NewColorForm;