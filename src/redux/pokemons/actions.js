import { getPokemon } from '../../services/pokemonService';

export const actions = {
  SET_POKEMONS_TO_FETCH: '@@POKEMONS/SET_POKEMONS_TO_FETCH',
  GET_POKEMONS: '@@POKEMONS/GET_POKEMONS',
  ADD_POKEMONS: '@@POKEMONS/ADD_POKEMONS'
};

export const actionCreators = {
  setPokemonsToFetch: pokemonsNames => ({
    type: actions.SET_POKEMONS_TO_FETCH,
    payload: pokemonsNames
  }),
  addPokemons: pokemons => ({
    type: actions.ADD_POKEMONS,
    payload: pokemons
  }),
  getPokemons: pokemonsNames => async dispatch => {
    const pokemons = await Promise.all(pokemonsNames.map(pokemonName => getPokemon(pokemonName)));
    dispatch({
      type: actions.ADD_POKEMONS,
      payload: pokemons
    });
  }
};
