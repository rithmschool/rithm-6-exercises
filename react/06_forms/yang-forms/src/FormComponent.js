import React, { Component } from "react"

export default class FormComponent extends Component {

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleAdd({
            height: event.target.h.value,
            width: event.target.w.value,
            bgc: event.target.bgc.value
        })
        event.target.reset();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label> Width: </label>
                <input onChange={this.handleChange} name="w"/>
                <label> Height: </label>
                <input onChange={this.handleChange} name="h"/> 
                <label> Background-Color: </label>
                <input onChange={this.handleChange} name="bgc"/>
                <input type="submit"/>
            </form>
        )
    }
}
