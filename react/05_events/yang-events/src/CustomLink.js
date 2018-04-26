import React, { Component } from "react"

export default class CustomLink extends Component {
    render() {
        return ( <p onClick={() => this.props.handleClick(this.props.href)}> {this.props.text} </p>)
    }
}