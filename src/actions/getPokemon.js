import axios from 'axios';

export const getPokemon = () => {
  return {
    type: "GET_POKEMON",
    pokeName: axios.get('http://pokeapi.co/api/v2/pokemon/4')
  }
}
