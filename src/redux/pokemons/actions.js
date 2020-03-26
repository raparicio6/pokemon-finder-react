import { getPokemon } from '../../services/PokemonService';
import { arrayToObject } from '../../utils/arrayToObject';

export const actions = {
  SET_POKEMONS_TO_FETCH: '@@POKEMONS/SET_POKEMONS_TO_FETCH',
  GET_POKEMONS: '@@POKEMONS/GET_POKEMONS',
  ADD_POKEMONS: '@@POKEMONS/ADD_POKEMONS',
  SET_POKEMON_LOADER: '@@POKEMONS/SET_POKEMON_LOADER'
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
    if (pokemonsNamesToSearch.length) {
      dispatch(actionCreators.setPokemonLoader());
    }
    const pokemons = await Promise.all(pokemonsNamesToSearch.map(getPokemon));

    const pokemonsNamesNotToSearch = pokemonsNames.filter(
      pokemonName => pokemonName in alreadySearchedPokemonsObject
    );
    const pokemonsNotToSearch = pokemonsNamesNotToSearch.map(
      pokemonName => alreadySearchedPokemonsObject[pokemonName]
    );

    dispatch(actionCreators.addPokemons([...pokemons, ...pokemonsNotToSearch]));
  },
  setPokemonLoader: () => ({
    type: actions.SET_POKEMON_LOADER
  })
};
