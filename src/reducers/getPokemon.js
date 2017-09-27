
const pokemonState = (state = {}, action) => {

  switch(action.type) {
      case 'GET_POKEMON_PENDING':
      console.log("action pending", action);
        return state
      case 'GET_POKEMON_FULFILLED':
      console.log("action", action.payload);
        return Object.assign({}, action.payload.data)


    default:
      return state
  }
}


export default pokemonState;
