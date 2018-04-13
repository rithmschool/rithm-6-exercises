import React, { Component } from 'react'

export default class Pokecard extends Component {
    render() {
        return (
            <div className="poke-card" key={this.props.id}>
                <h2 className="poke-name">{this.props.name}</h2>
                <img className="poke-img" src={this.props.image} alt={this.props.name}/>
                <h5 className="poke-type">Type: {this.props.type}</h5>
            </div>
        )
    }
}