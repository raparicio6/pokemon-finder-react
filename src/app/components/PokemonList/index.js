import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actionCreators as pokemonsActionsCreators } from '../../../redux/pokemons/actions';

import PokemonList from './layout';

/**
 * List of all displayed Pokemons
 */
function PokemonListContainer() {
  const namesOfPokemonsToBeSearched = useSelector(state => state.pokemons.namesOfPokemonsToBeSearched);
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const pokemonsLoading = useSelector(state => state.pokemons.pokemonsLoading);
  const errorMessage = useSelector(state => state.pokemons.errorMessage);
  const dispatch = useDispatch();
  const getPokemons = useCallback(
    pokemonsNames => dispatch(pokemonsActionsCreators.getPokemons(pokemonsNames)),
    [dispatch]
  );

  useEffect(() => {
    getPokemons(namesOfPokemonsToBeSearched);
  }, [getPokemons, namesOfPokemonsToBeSearched]);

  return <PokemonList pokemons={pokemons} pokemonsLoading={pokemonsLoading} errorMessage={errorMessage} />;
}

export default PokemonListContainer;
