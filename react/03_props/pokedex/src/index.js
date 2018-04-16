import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokedex from './components/PokemonView/pokedex';
import Pokecard from './components/PokemonView/pokecard';
// import pokemon from './pokemonData';
import registerServiceWorker from './registerServiceWorker';

// here we are passing the pokemon data variable into the Pokedex function as an argument.
ReactDOM.render(
  (<Pokedex pokemon />, <Pokecard />),
  document.getElementById('root')
);
registerServiceWorker();
