import React, { Component } from 'react';
import Body from '../components/Body';
import { connect } from 'react-redux';
import * as getPokemon from '../actions/getPokemon';
import { bindActionCreators } from 'redux';

class BodyContainer extends Component {

  render () {
    console.log("props", this.props);
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
    actions: bindActionCreators(getPokemon, dispatch)
}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContainer)
