import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-comp">
        <div className="home-left">
            <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
        </div>
        <div className="home-right">
            <h1><Link to="/soda">SODA</Link></h1>
            <h1><Link to="/chips">CHIPS</Link></h1>
            <h1><Link to="/sardines">FRESH SARDINES</Link></h1>
        </div>
    </div>
)

export default Home;