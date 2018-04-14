import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (
            <div
                className="square"
                style={{backgroundColor: this.props.color}}
                onClick={this.props.listener}
            />
        )
    }
}

export default Square;