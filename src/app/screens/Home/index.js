import React, { useEffect } from 'react';

import { getAllPokemonsNames } from '../../../services/PokemonService';
import LocalStorageService from '../../../services/LocalStorageService';

import Home from './layout';

function HomeContainer() {
  useEffect(() => {
    const setAllPokemonsNamesInStorage = async () => {
      if (!LocalStorageService.getAllPokemonsHash()) {
        let allPokemons = null;
        try {
          allPokemons = await getAllPokemonsNames();
        } catch {
          return;
        }

        LocalStorageService.setAllPokemonsHash(allPokemons);
      }
    };
    setAllPokemonsNamesInStorage();
  }, []);

  return <Home />;
}

export default HomeContainer;
