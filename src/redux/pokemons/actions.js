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
  getPokemons: pokemonsNames => async (dispatch, getState) => {
    const { alreadySearchedPokemons } = getState().pokemons;
    const alreadySearchedPokemonsNames = alreadySearchedPokemons.map(pokemon => pokemon.name);
    const pokemonsToSearch = pokemonsNames.filter(
      pokemonName => !alreadySearchedPokemonsNames.includes(pokemonName)
    );
    const pokemonsNotToSearch = pokemonsNames.filter(pokemonName =>
      alreadySearchedPokemonsNames.includes(pokemonName)
    );
    const pokemons = await Promise.all(pokemonsToSearch.map(getPokemon));

    const otherPokemons = [];
    pokemonsNotToSearch.forEach(pokemonName => {
      alreadySearchedPokemons.forEach(pokemon => {
        if (pokemonName === pokemon.name) {
          otherPokemons.push(pokemon);
        }
      });
    });
    dispatch({
      type: actions.ADD_POKEMONS,
      payload: [...pokemons, ...otherPokemons]
    });
  }
};
