import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-comp">
        <div className="home-left">
            <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
        </div>
        <div className="home-right">
            <h1><Link to="#">SODA</Link></h1>
            <h1><Link to="#">CHIPS</Link></h1>
            <h1><Link to="/sardines">FRESH SARDINES</Link></h1>
        </div>
    </div>
)

export default Home;