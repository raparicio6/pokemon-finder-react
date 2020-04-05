import React from 'react';
import { func } from 'prop-types';

import { LANGUAGES, ES, EN } from '../../constants';

import styles from './styles.module.scss';

function LanguageButtons({ handleOnClick }) {
  return (
    <div className={`row ${styles.container}`}>
      <button type="button" className={styles.esButton} data-lang={LANGUAGES.ES} onClick={handleOnClick}>
        {ES}
      </button>
      <button type="button" className={styles.enButton} data-lang={LANGUAGES.EN} onClick={handleOnClick}>
        {EN}
      </button>
    </div>
  );
}

LanguageButtons.propTypes = {
  handleOnClick: func.isRequired
};

export default LanguageButtons;
