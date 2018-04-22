import React, { Component } from "react";
import './App.css';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleAdd(this.state)
        this.setState({
            searchValue: ""
        })
    }

    render() {
        return (
            <div className="form-container">
                <form className="container" onSubmit={this.handleSubmit}>
                    <label className="gif-label"> Find a GIF! </label><br/>
                    <input onChange={this.handleChange} name="searchValue" value={this.state.searchValue} type="text" />
                    <button> <i> S E A R C H </i> </button>
                </form>
            </div>
        )
    }
}
