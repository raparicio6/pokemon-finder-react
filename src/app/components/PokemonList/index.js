import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllPokemonsNames } from '../../../services/PokemonService';
import { actionCreators as pokemonsActionsCreators } from '../../../redux/pokemons/actions';
import LocalStorageService from '../../../services/LocalStorageService';

import PokemonList from './layout';

/**
 * List of all displayed Pokemons
 */
function PokemonListContainer() {
  const pokemonsNamesToBeSearched = useSelector(state => state.pokemons.pokemonsNamesToBeSearched);
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const pokemonsLoading = useSelector(state => state.pokemons.pokemonsLoading);
  const dispatch = useDispatch();
  const getPokemons = useCallback(
    pokemonsNames => dispatch(pokemonsActionsCreators.getPokemons(pokemonsNames)),
    [dispatch]
  );

  useEffect(() => {
    const setAllPokemonsNamesInStorage = async () => {
      if (!LocalStorageService.getAllPokemonsHash()) {
        let allPokemons = null;
        try {
          allPokemons = await getAllPokemonsNames();
        } catch {
          // TODO: show error message
          return;
        }

        LocalStorageService.setAllPokemonsHash(allPokemons);
      }
    };
    setAllPokemonsNamesInStorage();
  }, []);

  useEffect(() => {
    getPokemons(pokemonsNamesToBeSearched);
  }, [getPokemons, pokemonsNamesToBeSearched]);

  return <PokemonList pokemons={pokemons} pokemonsLoading={pokemonsLoading} />;
}

export default PokemonListContainer;
