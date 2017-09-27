import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as getPokemon from '../actions/getPokemon';
import { bindActionCreators } from 'redux';

class Body extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.pokemonName}</h1>
        <button onClick={() => this.props.actions.getPokemon()}>Catch a pokemon</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(getPokemon, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Body);
