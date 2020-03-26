import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ALL_POKEMONS_NAMES_KEY, DIGITS_TO_START_SEARCH, ALL_POKEMONS_DEPTH_KEY } from '../../constants';
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

        const allPokemonsDepth = localStorage.getItem(ALL_POKEMONS_DEPTH_KEY);
        let key = pokemonsToSearch[0];
        let pokemonsNamesToFetch = allPokemonsNames[key];
        for (let i = 1; i < allPokemonsDepth; i++) {
          if (!pokemonsNamesToFetch) {
            break;
          }
          key = pokemonsToSearch[i];
          pokemonsNamesToFetch = pokemonsNamesToFetch[key];
        }

        if (pokemonsNamesToFetch) {
          const difference = DIGITS_TO_START_SEARCH - (DIGITS_TO_START_SEARCH - allPokemonsDepth);
          const restOfChars = pokemonsToSearch.substring(difference, pokemonsToSearch.length);
          pokemonsNamesToFetch = pokemonsNamesToFetch.filter(pokemonName => {
            const restOfPokemonName = pokemonName.substring(difference, difference + restOfChars.length);
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
