/* eslint-disable valid-jsdoc */
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllPokemonsNames } from '../../../services/pokemonService';
import { ALL_POKEMONS_NAMES_KEY } from '../../constants';
import { actionCreators as pokemonsActionsCreators } from '../../../redux/pokemons/actions';

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
      if (!localStorage.getItem(ALL_POKEMONS_NAMES_KEY)) {
        let allPokemons = null;
        try {
          allPokemons = await getAllPokemonsNames();
        } catch {
          // TODO: show error message
          return;
        }

        localStorage.setItem(ALL_POKEMONS_NAMES_KEY, JSON.stringify(allPokemons));
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
