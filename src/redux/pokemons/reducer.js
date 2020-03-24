import { actions } from './actions';

const initialState = {
  pokemonsNamesToFetch: [],
  pokemons: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_POKEMONS_TO_FETCH:
      return { ...state, pokemonsNamesToFetch: action.payload };
    case actions.ADD_POKEMONS:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
}

export default reducer;
