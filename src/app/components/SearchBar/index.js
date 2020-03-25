import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ALL_POKEMONS_NAMES_KEY, DIGITS_TO_START_SEARCH } from '../../constants';
import { actionCreators as pokemonsActionsCreators } from '../../../redux/pokemons/actions';

import SearchBar from './layout';

/**
 * Search bar to search for the desired pokemons
 */
function SearchBarContainer() {
  const dispatch = useDispatch();
  const setPokemonsToFetch = useCallback(
    pokemonsNamesToFetch => dispatch(pokemonsActionsCreators.setPokemonsToFetch(pokemonsNamesToFetch)),
    [dispatch]
  );

  const handleOnChange = useCallback(
    event => {
      const pokemonsToSearch = event.target.value;
      if (pokemonsToSearch.length >= DIGITS_TO_START_SEARCH) {
        const allPokemonsNames = JSON.parse(localStorage.getItem(ALL_POKEMONS_NAMES_KEY));
        if (!allPokemonsNames) {
          return;
        }
        let pokemonsNamesToFetch = allPokemonsNames[pokemonsToSearch[0]][pokemonsToSearch[1]];
        if (pokemonsNamesToFetch) {
          const restOfChars = pokemonsToSearch.substring(DIGITS_TO_START_SEARCH, pokemonsToSearch.length);
          pokemonsNamesToFetch = pokemonsNamesToFetch.filter(pokemonName => {
            const restOfPokemonName = pokemonName.substring(
              DIGITS_TO_START_SEARCH,
              DIGITS_TO_START_SEARCH + restOfChars.length
            );
            return restOfPokemonName === restOfChars;
          });
          if (pokemonsNamesToFetch.length) {
            setPokemonsToFetch(pokemonsNamesToFetch);
          } else {
            setPokemonsToFetch([]);
          }
        } else {
          setPokemonsToFetch([]);
        }
      } else if (!pokemonsToSearch.length) {
        setPokemonsToFetch([]);
      }
    },
    [setPokemonsToFetch]
  );

  return <SearchBar handleOnChange={handleOnChange} />;
}

export default SearchBarContainer;
