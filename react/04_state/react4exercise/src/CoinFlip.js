import React, { Component } from 'react';
import Tails from './tails.jpg';
import Heads from './heads.jpg';

export default class CoinFlip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalFlips: 0,
            headCount: 0,
            tailCount: 0,
            side: this.props.heads
        }
        this.changeSide = this.changeSide.bind(this);
        this.randomSide = this.randomSide.bind(this);
    }
    randomSide() {
        let num = Math.random()
        console.log("wtf");
        console.log(num);
        if (num >= 0.5) {
            this.setState((prevState, props) => ({
                side: this.props.heads,
                headCount: this.state.headCount + 1
            }));

        }
        else {
            this.setState((prevState, props) => ({
                side: this.props.tails,
                tailCount: this.state.tailCount + 1
            }));
        }
        
    }
    changeSide() {
        let side = this.randomSide()
        this.setState({
            totalFlips: this.state.totalFlips + 1,
        })
        return;
    }
    render() {
        return (
            <div>
                <p> Let's flip a coin! </p>
                <img src={this.state.side} alt="coin"/>
                <br/>
                <br/>
                <button onClick={this.changeSide}> Flip! </button>
                <p> Out of {this.state.totalFlips} flips, there have been {this.state.headCount} heads and {this.state.tailCount} tails. </p>
            </div>
        )
    }
}

CoinFlip.defaultProps = {
    heads: Heads,
    tails: Tails
}
