import React, { Component } from 'react';
import './App.css';

export default class ColorSquare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: Math.floor(Math.random()* this.props.colors.length-1)
        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        this.setState({
            num: Math.floor(Math.random()* this.props.colors.length-1)
        })
    }
    render() {
        return (
            <span class="square" style={{ "backgroundColor": this.props.colors[this.state.num] }} onClick={this.changeColor} ></span>
        )
    }
}

ColorSquare.defaultProps = {
    colors: ["aqua", "black", "chartreuse", "darkturquoise","deeppink", "lightcyan", "magenta", "mediumorchid", "mediumspringgreen","palegreen","salmon","orange", "white"]
}

