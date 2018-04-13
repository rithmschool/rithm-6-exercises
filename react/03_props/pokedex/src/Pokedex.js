import React, { Component } from "react";
// import React from "react";
import Pokecard from "./Pokecard";
import PropTypes from "prop-types";
import "./Pokedex.css";
// const Pokedex = props => {
export default class Pokedex extends Component {
  render() {
    const pokecards = this.props.pokemon.map(pokecard => {
      return (
        <Pokecard
          id={pokecard.id}
          name={pokecard.name}
          type={pokecard.type}
          image={pokecard.image}
        />
      );
    });
    return <div className="pokedex">{pokecards}</div>;
  }
}
Pokedex.propTypes = {
  pokemon: PropTypes.array
};

Pokedex.defaultProps = {
  pokemon: [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    }
  ]
};

// export default class Pokedex extends Component {
//   render() {
//     var pokedex = this.props.pokemon.map(pokecard => {
//       return (
//         <Pokecard
//           key={pokecard.id}
//           name={pokecard.name}
//           type={pokecard.type}
//           image={pokecard.image}
//         />
//       );
//     });
//     return (
//       <div>
//         <h1>Pokedex</h1>
//         <ul id="pokedex">{pokedex}</ul>
//       </div>
//     );
//   }
// }
