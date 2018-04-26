import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

export default class Pokedex extends Component {
  render() {
    const pokecards = this.props.pokemon.map(pokemon => <Pokecard key={pokemon.name} name={pokemon.name} image={pokemon.image} type={pokemon.type} />);
    return (
      <div className="Pokedex">
        <h1 className="Pokedex__title">Pokedex</h1>
        <div className="Pokedex__cards">{pokecards}</div>
      </div>
    );
  }
}

Pokedex.defaultProps = {
  pokemon: [
    {
      id: 1,
      name: 'Charmander',
      type: 'fire',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    },
    {
      id: 2,
      name: 'Squirtle',
      type: 'water',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
    },
    {
      id: 3,
      name: 'Butterfree',
      type: 'flying',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png'
    },
    {
      id: 4,
      name: 'Rattata',
      type: 'normal',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png'
    },
    {
      id: 5,
      name: 'Metapod',
      type: 'bug',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'
    }
  ]
};
