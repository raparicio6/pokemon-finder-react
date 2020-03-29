import api from '../config/api';

export const getPokemons = async pokemonsNames => {
  const formattedPokemonsNames = pokemonsNames.map(pokemonName => `pokemonsNames[]=${pokemonName}&`).join('');
  const response = await api.get(`/pokemons?${formattedPokemonsNames}`);

  if (response.ok) {
    return response.data.pokemons;
  }
  throw response;
};

export const getAllPokemonsNames = async () => {
  const response = await api.get('/pokemons_names');

  if (response.ok) {
    return response.data;
  }
  throw response;
};
