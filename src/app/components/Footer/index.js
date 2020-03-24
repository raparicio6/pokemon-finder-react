import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function Footer({ className }) {
  return (
    <div className={`${className} ${styles.container} row middle`}>
      <span className={styles.information}>Hecho por Rodrigo Aparicio</span>
      <a className={styles.repoLink} href="https://github.com/raparicio6/pokemon-finder-react">
        Link a mi repo
      </a>
    </div>
  );
}

Footer.propTypes = {
  className: string
};

export default Footer;
