import React, { Component } from 'react';
import Pokedex from './Pokedex.js';
import './Pokecard.css';

export default class Pokecard extends Component {
    
    render() {
        var pokemonCards = Pokedex.defaultProps.pokemon.map((pokemon) => (
                <p className="pokecard">
                    <h3> <b>{pokemon.name} </b> </h3>
                    <img src={pokemon.image} alt={pokemon.name}/>
                    <p> <b>Type: {pokemon.type} </b> </p>
                </p>
        ))

        return (
            <div id="pokedex"> { pokemonCards } </div>
        )
    }
}