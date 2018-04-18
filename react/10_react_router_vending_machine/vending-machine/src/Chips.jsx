import React, { Component } from 'react';
import './Chips.css';
import { Link } from 'react-router-dom';

class Chips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bags: 0
        }
    }
    
    render() {
        return (
            <div className="chips-comp">
                <div className="chips-msg">
                    <h1>BAGS EATEN: {this.state.bags}</h1>
                    <button>NUM NUM NUM</button>
                    <h1>
                        <Link to="/">Go home!</Link>
                    </h1>
                </div>
            </div>
        )
    }
}

export default Chips;