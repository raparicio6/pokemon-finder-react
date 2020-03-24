import React from 'react';
import { t } from 'i18next';

import styles from './styles.module.scss';

function Footer() {
  return (
    <div className={`${styles.container} row middle`}>
      <span className={styles.information}>{`${t('Footer:author')}`}</span>
      <a className={styles.repoLink} href="https://github.com/raparicio6/pokemon-finder-react">
        {`${t('Footer:repoLink')}`}
      </a>
    </div>
  );
}

export default Footer;
