import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ALL_POKEMONS_NAMES_KEY } from '../../constants';
import { actionCreators as pokemonsActionsCreators } from '../../../redux/pokemons/actions';

import styles from './styles.module.scss';

// TODO separar en index y layout
function SearchBar() {
  const dispatch = useDispatch();
  const setPokemonsToFetch = useCallback(
    pokemonsNamesToFetch => dispatch(pokemonsActionsCreators.setPokemonsToFetch(pokemonsNamesToFetch)),
    [dispatch]
  );

  const hola = event => {
    const pokemonsToSearch = event.target.value;
    if (pokemonsToSearch.length >= 2) {
      const pokemonsNamesToFetch = JSON.parse(localStorage.getItem(ALL_POKEMONS_NAMES_KEY))[
        pokemonsToSearch[0]
      ][pokemonsToSearch[1]];
      setPokemonsToFetch(pokemonsNamesToFetch);
    }
  };

  return (
    <div className={styles.search}>
      <input
        onChange={hola}
        className={styles.searchBar}
        type="search"
        placeholder="Ingrese el nombre a buscar"
      />
    </div>
  );
}

export default SearchBar;
