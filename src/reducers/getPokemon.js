


const pokemonState = (state = {name: ""}, action) => {
  let nextState = {name: state.name}

  switch(action.type) {
      case 'GET_POKEMON_RESOLVED':
        //   action.pokeName.then(res => {
        //   nextState.name = res.data.name
        // })
        return nextState


    default:
      return state
  }
}


export default pokemonState;
