import { getPokemon } from '../../services/pokemonService';
import { arrayToObject } from '../../utils.js/arrayToObject';

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
  getPokemons: pokemonsNames => async (dispatch, getState) => {
    const { alreadySearchedPokemons } = getState().pokemons;
    const alreadySearchedPokemonsObject = arrayToObject(alreadySearchedPokemons, 'name');

    const pokemonsNamesToSearch = pokemonsNames.filter(
      pokemonName => !(pokemonName in alreadySearchedPokemonsObject)
    );

    let pokemons = null;
    try {
      pokemons = await Promise.all(pokemonsNamesToSearch.map(getPokemon));
    } catch (error) {
      // TODO: show error message
      return;
    }

    const pokemonsNamesNotToSearch = pokemonsNames.filter(
      pokemonName => pokemonName in alreadySearchedPokemonsObject
    );
    const pokemonsNotToSearch = pokemonsNamesNotToSearch.map(
      pokemonName => alreadySearchedPokemonsObject[pokemonName]
    );

    dispatch({
      type: actions.ADD_POKEMONS,
      payload: [...pokemons, ...pokemonsNotToSearch]
    });
  }
};
