import React, { useEffect, useState } from 'react';

import { getAllPokemonsNames, getPokemon } from '../../../services/pokemonService';
import { ALL_POKEMONS_NAMES_KEY } from '../../constants';

import PokemonList from './layout';

const hola = [
  {
    id: 1,
    name: 'pikachu',
    weight: 20,
    height: 10,
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    baseExperience: 100
  },
  {
    id: 2,
    name: 'ditto',
    weight: 8,
    height: 17,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
    baseExperience: 164
  },
  {
    id: 3,
    name: 'charmander',
    weight: 8,
    height: 17,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Pok%C3%A9mon_Charmander_art.png',
    baseExperience: 164
  },
  {
    id: 4,
    name: 'bulbasaur',
    weight: 8,
    height: 17,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    baseExperience: 164
  },
  {
    id: 5,
    name: 'ponyta',
    weight: 8,
    height: 17,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png',
    baseExperience: 164
  },
  {
    id: 6,
    name: 'magnemite',
    weight: 8,
    height: 17,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png',
    baseExperience: 164
  },
  {
    id: 7,
    name: 'chikorita',
    weight: 8,
    height: 17,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png',
    baseExperience: 164
  },
  {
    id: 8,
    name: 'charizard',
    weight: 8,
    height: 17,
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    baseExperience: 164
  },
  {
    id: 9,
    name: 'metwo',
    weight: 8,
    height: 17,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png',
    baseExperience: 164
  },
  {
    id: 10,
    name: 'metwo',
    weight: 8,
    height: 17,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png',
    baseExperience: 164
  },
  {
    id: 11,
    name: 'metwo',
    weight: 8,
    height: 17,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png',
    baseExperience: 164
  },
  {
    id: 12,
    name: 'metwo',
    weight: 8,
    height: 17,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png',
    baseExperience: 164
  },
  {
    id: 13,
    name: 'metwo',
    weight: 8,
    height: 17,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png',
    baseExperience: 164
  }
];

function PokemonListContainer() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      if (!localStorage.getItem(ALL_POKEMONS_NAMES_KEY)) {
        const allPokemons = await getAllPokemonsNames();
        localStorage.setItem(ALL_POKEMONS_NAMES_KEY, JSON.stringify(allPokemons));
      }
      // console.log('pp', localStorage.getItem(ALL_POKEMONS_NAMES_KEY))
      const pokes = JSON.parse(localStorage.getItem(ALL_POKEMONS_NAMES_KEY)).b.l;
      const data = await Promise.all(pokes.map(pokemon => getPokemon(pokemon)));
      setPokemons(data);
    };
    fetchAllPokemons();
  }, []);

  return <PokemonList pokemons={pokemons} />;
}

export default PokemonListContainer;
