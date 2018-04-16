import React from 'react';
import Pokedex from './pokedex';
import pokemon from '../pokemonData';

const PokecardFunc = () => {
  return <div>'this is the pokemon card function' </div>;
};

class Pokecard extends React.Component {
  render() {
    let pokemonCards = Pokedex.defaultProps.pokemon.map(pokemon => (
      <div className="pokecard">
        <h3>
          {' '}
          <b>{pokemon.name} </b>{' '}
        </h3>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>
          {' '}
          <b>Type: {pokemon.type} </b>{' '}
        </p>
      </div>
    ));
    return <div id="pokemon"> {pokemonCards} </div>;
  }
}

export default Pokecard;
