import React from "react";
import { Link } from "react-router-dom";

const Home = ({ colors }) => {
  let colorLinks = colors.map(color => {
    let route = `/colors/${color.name}`;
    return (
      <p>
        {" "}
        <Link to={route}>{color.name}</Link>{" "}
      </p>
    );
  });

  //maping through colors and also getting colors array from the parent

  return (
    <div>
      <header className="App-header">
        <h3>Welcome to the color factory.</h3>
        <h1 className="App-title" />
        <Link to="/colors/new">add new color</Link>
      </header>
      <div className="home-body">
        <p>Please select a color</p>
        {colorLinks}
      </div>
    </div>
  );
};

export default Home;
