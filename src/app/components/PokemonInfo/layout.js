import React from 'react';
import { string, number } from 'prop-types';
import { t } from 'i18next';

import { DEFAULT_IMAGE_URL } from '../../constants';

import styles from './styles.module.scss';

function PokemonInfo({ name, baseExperience, weight, height, imageUrl }) {
  const addDefaultSrc = event => {
    event.target.src = DEFAULT_IMAGE_URL;
  };

  return (
    <div className={`column ${styles.container} m-right-7 m-bottom-7`}>
      <img
        onError={addDefaultSrc}
        src={imageUrl || DEFAULT_IMAGE_URL}
        alt="Pokemon appearance"
        className={styles.pokemonAppearanceImage}
      />
      <h2 className={`${styles.name} m-top-2`}>{name}</h2>
      <span className={`${styles.field} m-top-2`}>
        {`${t('PokemonInfo:baseExperience')}: ${baseExperience}`}
      </span>
      <span className={`${styles.field} m-top-2`}>{`${t('PokemonInfo:weight')}: ${weight}`}</span>
      <span className={`${styles.field} m-top-2`}>{`${t('PokemonInfo:height')}: ${height}`}</span>
    </div>
  );
}

PokemonInfo.propTypes = {
  baseExperience: number.isRequired,
  height: number.isRequired,
  name: string.isRequired,
  weight: number.isRequired,
  imageUrl: string
};

PokemonInfo.defaultProps = {
  imageUrl: ''
};

export default PokemonInfo;
