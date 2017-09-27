import React, { Component } from 'react';
import Body from '../components/Body';
import { connect } from 'react-redux';

class BodyContainer extends Component {

  render () {

    return (
        <Body
          getPokemon={this.props.getPokemon}
          pokemonName={this.props.data.name}
          />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  getPokemon: () => dispatch ({
    type: "GET_POKEMON",
    pokeName: new Promise (resolve => {
      fetch(`http://pokeapi.co/api/v2/pokemon/4`).then(response => {
        resolve(response.json())
      })
    })
  })
}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContainer)
