import immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  namesOfPokemonsToBeSearched: [],
  pokemons: [],
  alreadySearchedPokemons: [],
  pokemonsLoading: false,
  errorMessage: null
};

function reducer(state = immutable(initialState), action) {
  switch (action.type) {
    case actions.SET_POKEMONS_TO_BE_SEARCHED:
      return { ...state, namesOfPokemonsToBeSearched: action.payload, errorMessage: null };
    case actions.GET_POKEMONS_LOADING:
      return { ...state, pokemonsLoading: true };
    case actions.GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        alreadySearchedPokemons: [...new Set([...state.alreadySearchedPokemons, ...action.payload])],
        pokemonsLoading: false
      };
    case actions.GET_POKEMONS_FAILURE:
      return { ...state, errorMessage: action.payload, pokemonsLoading: false };
    default:
      return state;
  }
}

export default reducer;
