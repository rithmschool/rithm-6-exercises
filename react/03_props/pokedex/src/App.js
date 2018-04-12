import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pokedex from "./Pokedex";
import Pokecard from "./Pokecard";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

    {
      pokemon: [
      {
        id: 1,
        name: "Charmander",
        type: "fire",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      },
      {
        id: 2,
        name: "Squirtle",
        type: "water",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      },
      {
        id: 3,
        name: "Butterfree",
        type: "flying",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
      },
      {
        id: 4,
        name: "Rattata",
        type: "normal",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
      },
      {
        id: 5,
        name: "Metapod",
        type: "bug",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
      }
    ]
  }

      </div>
    );
  }
}

export default App;
