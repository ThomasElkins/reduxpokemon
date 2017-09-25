import axios from 'axios';


const pokemonState = (state = {name: "default"}, action) => {

  let nextState = {name: state.name}

  switch(action.type) {
      case 'GET_POKEMON':
          action.pokeName.then(res => {
          nextState.name = res.data.name
        })
        return nextState


    default:
      return state
  }
}


export default pokemonState;
