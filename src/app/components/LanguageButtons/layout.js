import React from 'react';
import { func } from 'prop-types';

import { LANGUAGES, ES, EN } from '../../constants';

import styles from './styles.module.scss';

function LanguageButtons({ onHandleClick }) {
  return (
    <div className={`row ${styles.container}`}>
      <button type="button" className={styles.esButton} data-lang={LANGUAGES.ES} onClick={onHandleClick}>
        {ES}
      </button>
      <button type="button" className={styles.enButton} data-lang={LANGUAGES.EN} onClick={onHandleClick}>
        {EN}
      </button>
    </div>
  );
}

LanguageButtons.propTypes = {
  onHandleClick: func.isRequired
};

export default LanguageButtons;
