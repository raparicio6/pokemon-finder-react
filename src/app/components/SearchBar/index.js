import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ALL_POKEMONS_HASH_KEY, DIGITS_TO_START_SEARCH } from '../../constants';
import { actionCreators as pokemonsActionsCreators } from '../../../redux/pokemons/actions';
import { objectDepth } from '../../../utils/objectDepth';

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
        const allPokemonsHash = JSON.parse(localStorage.getItem(ALL_POKEMONS_HASH_KEY));
        if (!allPokemonsHash) {
          return;
        }

        const allPokemonsHashCharsDepth = objectDepth(allPokemonsHash) - 1;
        let key = pokemonsToSearch[0];
        let completePokemonsNamesToFetch = allPokemonsHash[key];
        for (let i = 1; i < allPokemonsHashCharsDepth; i++) {
          if (!completePokemonsNamesToFetch) {
            break;
          }
          key = pokemonsToSearch[i];
          completePokemonsNamesToFetch = completePokemonsNamesToFetch[key];
        }

        if (completePokemonsNamesToFetch) {
          const restOfChars = pokemonsToSearch.substring(allPokemonsHashCharsDepth, pokemonsToSearch.length);
          completePokemonsNamesToFetch = completePokemonsNamesToFetch.filter(pokemonName => {
            const restOfPokemonName = pokemonName.substring(
              allPokemonsHashCharsDepth,
              allPokemonsHashCharsDepth + restOfChars.length
            );
            return restOfPokemonName === restOfChars;
          });
          if (completePokemonsNamesToFetch.length) {
            setPokemonsToFetch(completePokemonsNamesToFetch);
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
