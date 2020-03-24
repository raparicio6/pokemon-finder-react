import React from 'react';
import { func } from 'prop-types';
import { t } from 'i18next';

import styles from './styles.module.scss';

function SearchBar({ handleOnChange }) {
  return (
    <input
      onChange={handleOnChange}
      className={styles.searchBar}
      type="search"
      placeholder={t('SearchBar:inputPlaceHolder')}
    />
  );
}

SearchBar.propTypes = {
  handleOnChange: func.isRequired
};

export default SearchBar;
