import { getPokemons } from '../../services/PokemonService';
import { arrayToObject } from '../../utils/arrayToObject';
import LocalStorageService from '../../services/LocalStorageService';
import { DEFAULT_ERROR_MESSAGE, LANGUAGES } from '../../app/constants';

export const actions = {
  SET_POKEMONS_TO_BE_SEARCHED: '@@POKEMONS/SET_POKEMONS_TO_BE_SEARCHED',
  GET_POKEMONS: '@@POKEMONS/GET_POKEMONS',
  GET_POKEMONS_LOADING: '@@POKEMONS/GET_POKEMONS_LOADING',
  GET_POKEMONS_SUCCESS: '@@POKEMONS/GET_POKEMONS_SUCCESS',
  GET_POKEMONS_FAILURE: '@@POKEMONS/GET_POKEMONS_FAILURE'
};

export const actionCreators = {
  setPokemonsToBeSearched: pokemonsNames => ({
    type: actions.SET_POKEMONS_TO_BE_SEARCHED,
    payload: pokemonsNames
  }),
  getPokemons: pokemonsNames => async (dispatch, getState) => {
    const { alreadySearchedPokemons } = getState().pokemons;
    const alreadySearchedPokemonsObject = arrayToObject(alreadySearchedPokemons, 'name');

    const namesOfPokemonsToBeSearched = pokemonsNames.filter(
      pokemonName => !(pokemonName in alreadySearchedPokemonsObject)
    );

    if (namesOfPokemonsToBeSearched.length) {
      dispatch(actionCreators.getPokemonsLoading());
    }

    let searchedPokemons = [];
    try {
      searchedPokemons = await getPokemons(namesOfPokemonsToBeSearched);
      dispatch(
        actionCreators.getPokemonsSuccess(searchedPokemons, pokemonsNames, alreadySearchedPokemonsObject)
      );
    } catch {
      const language = LocalStorageService.getLanguage() || LANGUAGES.ES;
      const errorMessage = DEFAULT_ERROR_MESSAGE[language];
      dispatch(actionCreators.getPokemonsFailure(errorMessage));
    }
  },
  getPokemonsLoading: () => ({
    type: actions.GET_POKEMONS_LOADING
  }),
  getPokemonsSuccess: (searchedPokemons, pokemonsNames, alreadySearchedPokemonsObject) => {
    const namesOfPreviouslySearchedPokemons = pokemonsNames.filter(
      pokemonName => pokemonName in alreadySearchedPokemonsObject
    );
    const previouslySearchedPokemons = namesOfPreviouslySearchedPokemons.map(
      pokemonName => alreadySearchedPokemonsObject[pokemonName]
    );

    return {
      type: actions.GET_POKEMONS_SUCCESS,
      payload: [...searchedPokemons, ...previouslySearchedPokemons]
    };
  },
  getPokemonsFailure: errorMessage => ({
    type: actions.GET_POKEMONS_FAILURE,
    payload: errorMessage
  })
};
