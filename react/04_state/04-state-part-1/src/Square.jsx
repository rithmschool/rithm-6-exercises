import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    
    render() {
        return (
            <div className="square" style={this.props.color}></div>
        )
    }
}

export default Square;