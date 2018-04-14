import React, { Component } from 'react';
import { choice } from './helpers';
import heads from './heads.png';
import tails from './tails.png';
import Coin from './Coin';
import Caption from './Caption';
import CoinButton from './CoinButton';

class CoinTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinState: '',
            headTracker: 0,
            tailTracker: 0
        }
        this.handleFlip = this.handleFlip.bind(this);
    }

    handleFlip() {
        this.setState(prevState => {
            let newState = {...prevState};
            newState.coinState = choice(this.props.coins);
            if(newState.coinState === heads) {
                newState.headTracker++;
            } else {
                newState.tailTracker++;
            }
            return newState;
        });
    }

    render() {
        return (
            <div className="coin-table">
                <h1>Part 2</h1>
                <h3>Let's flip a coin!</h3>
                <Coin src={this.state.coinState} />
                <CoinButton push={this.handleFlip} />
                <Caption headCount={this.state.headTracker} tailCount={this.state.tailTracker} />
            </div>
        )
    }

}

CoinTable.defaultProps = {
    coins: [
        heads,
        tails
    ]
}

export default CoinTable;