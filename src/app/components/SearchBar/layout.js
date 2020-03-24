import React from 'react';
import { func } from 'prop-types';

import styles from './styles.module.scss';

function SearchBar({ handleOnChange }) {
  return (
    <div className={styles.search}>
      <input
        onChange={handleOnChange}
        className={styles.searchBar}
        type="search"
        placeholder="Ingrese el nombre a buscar"
      />
    </div>
  );
}

SearchBar.propTypes = {
  handleOnChange: func.isRequired
};

export default SearchBar;
