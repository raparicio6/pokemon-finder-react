import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ALL_POKEMONS_NAMES_KEY } from '../../constants';
import { actionCreators as pokemonsActionsCreators } from '../../../redux/pokemons/actions';

import SearchBar from './layout';

function SearchBarContainer() {
  const dispatch = useDispatch();
  const setPokemonsToFetch = useCallback(
    pokemonsNamesToFetch => dispatch(pokemonsActionsCreators.setPokemonsToFetch(pokemonsNamesToFetch)),
    [dispatch]
  );

  const handleOnChange = useCallback(
    event => {
      const pokemonsToSearch = event.target.value;
      if (pokemonsToSearch.length >= 2) {
        const pokemonsNamesToFetch = JSON.parse(localStorage.getItem(ALL_POKEMONS_NAMES_KEY))[
          pokemonsToSearch[0]
        ][pokemonsToSearch[1]];
        setPokemonsToFetch(pokemonsNamesToFetch);
      }
    },
    [setPokemonsToFetch]
  );

  return <SearchBar handleOnChange={handleOnChange} />;
}

export default SearchBarContainer;
