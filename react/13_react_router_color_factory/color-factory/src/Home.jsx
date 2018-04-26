import React from 'react';
import { Link } from 'react-router-dom'

const Home = ({ colors }) => {
    let colorLinks = colors.map(color => {
        let route = `/colors/${color.name}`;
        return <p><Link to={route}>{color.name}</Link></p>
    })
    
    return (
        <div className="home-page">
            <header className="App-header">
                <h3>Welcome to the color factory.</h3>
                <h1 className="App-title">
                    <Link to="/colors/new">Add a color</Link>
                </h1>
            </header>
            <div className="home-body">
                <p>Please select a color</p>
                {colorLinks}
            </div>
        </div>
    )
}

export default Home;