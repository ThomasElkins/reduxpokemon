import React, { Component } from 'react';

class Body extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.pokemonName}</h1>
        <button onClick={this.props.getPokemon}>Catch a pokemon</button>
      </div>
    )
  }
}
export default Body;
