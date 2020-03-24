import React from 'react';

import styles from './styles.module.scss';

function Footer() {
  return (
    <div className={`${styles.container} row middle`}>
      <span className={styles.information}>Hecho por Rodrigo Aparicio</span>
      <a className={styles.repoLink} href="https://github.com/raparicio6/pokemon-finder-react">
        Link a mi repo
      </a>
    </div>
  );
}

export default Footer;
