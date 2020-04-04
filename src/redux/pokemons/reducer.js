import immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  pokemonsNamesToBeSearched: [],
  pokemons: [],
  alreadySearchedPokemons: [],
  pokemonsLoading: false,
  pokemonsError: false
};

function reducer(state = immutable(initialState), action) {
  switch (action.type) {
    case actions.SET_POKEMONS_TO_BE_SEARCHED:
      return { ...state, pokemonsNamesToBeSearched: action.payload };
    case actions.GET_POKEMONS_LOADER:
      return { ...state, pokemonsLoading: action.payload };
    case actions.GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        alreadySearchedPokemons: [...new Set([...state.alreadySearchedPokemons, ...action.payload])],
        pokemonsLoading: false
      };

    default:
      return state;
  }
}

export default reducer;
