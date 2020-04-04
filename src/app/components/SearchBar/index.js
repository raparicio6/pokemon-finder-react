import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { DIGITS_TO_START_SEARCH } from '../../constants';
import { actionCreators as pokemonsActionsCreators } from '../../../redux/pokemons/actions';
import { objectDepth } from '../../../utils/objectDepth';
import LocalStorageService from '../../../services/LocalStorageService';

import SearchBar from './layout';

/**
 * Search bar to search for the desired pokemons
 */
function SearchBarContainer() {
  const dispatch = useDispatch();
  const setPokemonsToBeSearched = useCallback(
    pokemonsToBeSearched => dispatch(pokemonsActionsCreators.setPokemonsToBeSearched(pokemonsToBeSearched)),
    [dispatch]
  );

  const handleOnChange = useCallback(
    event => {
      const pokemonsToSearch = event.target.value;
      if (pokemonsToSearch.length >= DIGITS_TO_START_SEARCH) {
        const allPokemonsHash = LocalStorageService.getAllPokemonsHash();
        if (!allPokemonsHash) {
          return;
        }

        const allPokemonsHashCharsDepth = objectDepth(allPokemonsHash) - 1;
        let key = pokemonsToSearch[0];
        let pokemonsNamesToBeSearched = allPokemonsHash[key];
        for (let i = 1; i < allPokemonsHashCharsDepth; i++) {
          if (!pokemonsNamesToBeSearched) {
            break;
          }
          key = pokemonsToSearch[i];
          pokemonsNamesToBeSearched = pokemonsNamesToBeSearched[key];
        }

        if (pokemonsNamesToBeSearched) {
          const restOfChars = pokemonsToSearch.substring(allPokemonsHashCharsDepth, pokemonsToSearch.length);
          pokemonsNamesToBeSearched = pokemonsNamesToBeSearched.filter(pokemonName => {
            const restOfPokemonName = pokemonName.substring(
              allPokemonsHashCharsDepth,
              allPokemonsHashCharsDepth + restOfChars.length
            );
            return restOfPokemonName === restOfChars;
          });
          if (pokemonsNamesToBeSearched.length) {
            setPokemonsToBeSearched(pokemonsNamesToBeSearched);
          } else {
            setPokemonsToBeSearched([]);
          }
        } else {
          setPokemonsToBeSearched([]);
        }
      } else if (!pokemonsToSearch.length) {
        setPokemonsToBeSearched([]);
      }
    },
    [setPokemonsToBeSearched]
  );

  return <SearchBar handleOnChange={handleOnChange} />;
}

export default SearchBarContainer;
