import immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  pokemonsNamesToFetch: [],
  pokemons: [],
  alreadySearchedPokemons: [],
  pokemonsLoading: false
};

function reducer(state = immutable(initialState), action) {
  switch (action.type) {
    case actions.SET_POKEMONS_TO_FETCH:
      return { ...state, pokemonsNamesToFetch: action.payload };
    case actions.ADD_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        alreadySearchedPokemons: [...new Set([...state.alreadySearchedPokemons, ...action.payload])],
        pokemonsLoading: false
      };
    case actions.SET_POKEMON_LOADER:
      return { ...state, pokemonsLoading: true };
    default:
      return state;
  }
}

export default reducer;
