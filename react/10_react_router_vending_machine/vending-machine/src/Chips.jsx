import React, { Component } from 'react';
import './Chips.css';
import lays from './lays-flamin-hot.png'
import { Link } from 'react-router-dom';

class Chips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bags: [ ]
        }
        this.addOne = this.addOne.bind(this)
    }
    
    addOne() {
        this.setState(prevState => {
            let top = Math.round(Math.random() * 100);
            let left = Math.round(Math.random() * 100);
            let newBags = [ ...prevState.bags, {top, left} ];
            return {bags: newBags}
        });
    }

    render() {
        return (
            <div className="chips-comp">
                <div className="chips-msg">
                    <h1>BAGS EATEN: {this.state.bags.length}</h1>
                    <button onClick={this.addOne}><h3>NOM NOM NOM</h3></button>
                    <h1>
                        <Link to="/">Go home!</Link>
                    </h1>
                </div>
                <div className="chips-holder">
                    {this.state.bags.map(el => <img src={lays} className="chips-bag" style={{top: `${el.top}vh`, left: `${el.left}vw`}} />)}
                </div>
            </div>
        )
    }
}

export default Chips;