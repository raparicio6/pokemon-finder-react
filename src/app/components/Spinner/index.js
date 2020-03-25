import React from 'react';

import styles from './styles.module.scss';
import spinner from './assets/spinner.svg';

/**
 * Animation to use while loading information
 */
function Spinner() {
  return <img src={spinner} alt="Loading" className={styles.spinner} />;
}

export default Spinner;
