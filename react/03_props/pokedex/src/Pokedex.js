import React, { Component } from 'react';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { id, name, type, image } = this.props;
    const pokemonList = this.props.pokemon.map(p => {
      return (
        <div className="card">
          <li key={p.id}>
            <h2>{p.name}</h2>
            <img src={p.image} alt={p.name} />
            <p>Type: {p.type}</p>
          </li>
        </div>
      );
    });
    return (
      <div>
        <ul className="inlineList">{pokemonList}</ul>
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
