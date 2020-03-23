import React from 'react';

import Home from './layout';

const pokemons = [
  {
    id: 1,
    name: 'pikachu',
    weight: 20,
    height: 10,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    baseExperience: 100
  },
  {
    id: 2,
    name: 'ditto',
    weight: 8,
    height: 17,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
    baseExperience: 164
  }
];

function HomeContainer() {
  return <Home pokemons={pokemons} />;
}

export default HomeContainer;
