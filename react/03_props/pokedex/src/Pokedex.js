import React, { Component } from 'react';
import { Pokecard } from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const pokemon = this.props.pokemon.map(p => (
      <Pokecard key={p.id} name={p.name} image={p.image} type={p.type} />
    ));
    return (
      <div className="Pokedex">
        <h1 className="Pokedex-title">Kelson's Pokedex</h1>
        <div className="Pokedex-cards">{pokemon}</div>
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
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    },
    {
      id: 2,
      name: 'Squirtle',
      type: 'water',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
    },
    {
      id: 3,
      name: 'Butterfree',
      type: 'flying',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png'
    },
    {
      id: 4,
      name: 'Rattata',
      type: 'normal',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png'
    },
    {
      id: 5,
      name: 'Metapod',
      type: 'bug',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'
    }
  ]
};

export default Pokedex;
