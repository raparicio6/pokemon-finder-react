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
  const pokemonsNamesToFetch = useSelector(state => state.pokemons.pokemonsNamesToFetch);
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const pokemonsLoading = useSelector(state => state.pokemons.pokemonsLoading);
  const dispatch = useDispatch();
  const getPokemons = useCallback(
    pokemonsNames => dispatch(pokemonsActionsCreators.getPokemons(pokemonsNames)),
    [dispatch]
  );

  useEffect(() => {
    const fetchAllPokemons = async () => {
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
    fetchAllPokemons();
  }, []);

  useEffect(() => {
    getPokemons(pokemonsNamesToFetch);
  }, [getPokemons, pokemonsNamesToFetch]);

  return <PokemonList pokemons={pokemons} pokemonsLoading={pokemonsLoading} />;
}

export default PokemonListContainer;
