import api from '../config/api';

export const getPokemon = async pokemonName => {
  const response = await api.get(`/pokemons/${pokemonName}`);

  if (response.ok) {
    return response.data.pokemon;
  }
  throw response;
};

export const getAllPokemonsNames = async () => {
  const response = await api.get('/pokemons');

  if (response.ok) {
    return response.data;
  }
  throw response;
};
