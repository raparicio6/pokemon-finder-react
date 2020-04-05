import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { DIGITS_TO_START_SEARCH, DEFAULT_ERROR_MESSAGE, LANGUAGES } from '../../constants';
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
  const getPokemonsFailure = useCallback(
    errorMessage => dispatch(pokemonsActionsCreators.getPokemonsFailure(errorMessage)),
    [dispatch]
  );

  const handleOnChange = useCallback(
    event => {
      const pokemonsToSearch = event.target.value;
      if (pokemonsToSearch.length >= DIGITS_TO_START_SEARCH) {
        const allPokemonsHash = LocalStorageService.getAllPokemonsHash();
        if (!allPokemonsHash) {
          const language = LocalStorageService.getLanguage() || LANGUAGES.ES;
          const errorMessage = DEFAULT_ERROR_MESSAGE[language];
          getPokemonsFailure(errorMessage);
          return;
        }

        const allPokemonsHashCharsDepth = objectDepth(allPokemonsHash) - 1;
        let key = pokemonsToSearch[0];
        let namesOfPokemonsToBeSearched = allPokemonsHash[key];
        for (let i = 1; i < allPokemonsHashCharsDepth; i++) {
          if (!namesOfPokemonsToBeSearched) {
            break;
          }
          key = pokemonsToSearch[i];
          namesOfPokemonsToBeSearched = namesOfPokemonsToBeSearched[key];
        }

        if (namesOfPokemonsToBeSearched) {
          const restOfChars = pokemonsToSearch.substring(allPokemonsHashCharsDepth, pokemonsToSearch.length);
          namesOfPokemonsToBeSearched = namesOfPokemonsToBeSearched.filter(pokemonName => {
            const restOfPokemonName = pokemonName.substring(
              allPokemonsHashCharsDepth,
              allPokemonsHashCharsDepth + restOfChars.length
            );
            return restOfPokemonName === restOfChars;
          });
          if (namesOfPokemonsToBeSearched.length) {
            setPokemonsToBeSearched(namesOfPokemonsToBeSearched);
            return;
          }
        }
        setPokemonsToBeSearched([]);
      } else if (!pokemonsToSearch.length) {
        setPokemonsToBeSearched([]);
      }
    },
    [setPokemonsToBeSearched, getPokemonsFailure]
  );

  return <SearchBar handleOnChange={handleOnChange} />;
}

export default SearchBarContainer;
