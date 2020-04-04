import { getPokemons } from '../../services/PokemonService';
import { arrayToObject } from '../../utils/arrayToObject';

export const actions = {
  SET_POKEMONS_TO_BE_SEARCHED: '@@POKEMONS/SET_POKEMONS_TO_BE_SEARCHED',
  GET_POKEMONS: '@@POKEMONS/GET_POKEMONS',
  GET_POKEMONS_SUCCESS: '@@POKEMONS/GET_POKEMONS_SUCCESS',
  GET_POKEMONS_LOADER: '@@POKEMONS/GET_POKEMONS_LOADER'
};

export const actionCreators = {
  setPokemonsToBeSearched: pokemonsNames => ({
    type: actions.SET_POKEMONS_TO_BE_SEARCHED,
    payload: pokemonsNames
  }),
  getPokemons: pokemonsNames => async (dispatch, getState) => {
    const { alreadySearchedPokemons } = getState().pokemons;
    const alreadySearchedPokemonsObject = arrayToObject(alreadySearchedPokemons, 'name');

    const pokemonsNamesToBeSearched = pokemonsNames.filter(
      pokemonName => !(pokemonName in alreadySearchedPokemonsObject)
    );

    if (pokemonsNamesToBeSearched.length) {
      dispatch(actionCreators.getPokemonsLoader(true));
    }

    let pokemonsSearched = [];
    try {
      pokemonsSearched = await getPokemons(pokemonsNamesToBeSearched);
      return dispatch(
        actionCreators.getPokemonsSuccess(pokemonsSearched, pokemonsNames, alreadySearchedPokemonsObject)
      );
    } catch {
      // TODO: show error message
      return 'todo';
    }
  },
  getPokemonsLoader: isLoading => ({
    type: actions.GET_POKEMONS_LOADER,
    payload: isLoading
  }),
  getPokemonsSuccess: (pokemonsSearched, pokemonsNames, alreadySearchedPokemonsObject) => {
    const pokemonsNamesNotToBeSearched = pokemonsNames.filter(
      pokemonName => pokemonName in alreadySearchedPokemonsObject
    );
    const pokemonsNotToBeSearched = pokemonsNamesNotToBeSearched.map(
      pokemonName => alreadySearchedPokemonsObject[pokemonName]
    );

    return { type: actions.GET_POKEMONS_SUCCESS, payload: [...pokemonsSearched, ...pokemonsNotToBeSearched] };
  }
};
