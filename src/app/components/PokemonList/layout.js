import React from 'react';
import { array, bool } from 'prop-types';
import { t } from 'i18next';

import PokemonInfo from '../PokemonInfo';
import Spinner from '../Spinner';

import styles from './styles.module.scss';

function PokemonList({ pokemons, pokemonsLoading }) {
  const areTherePokemons = pokemons.length > 0;

  return (
    <>
      {pokemonsLoading ? (
        <Spinner />
      ) : areTherePokemons ? (
        <div className={`row ${styles.pokemonsContainer} m-top-8 m-bottom-6`}>
          {pokemons.map(({ name, baseExperience, weight, height, imageUrl, id }) => (
            <PokemonInfo
              baseExperience={baseExperience}
              name={name}
              weight={weight}
              height={height}
              imageUrl={imageUrl}
              key={id}
            />
          ))}
        </div>
      ) : (
        <p className={`row center ${styles.noPokemonsMessage} m-top-16`}>{t('PokemonList:searchMessage')}</p>
      )}
    </>
  );
}

PokemonList.propTypes = {
  pokemons: array.isRequired, // eslint-disable-line react/forbid-prop-types
  pokemonsLoading: bool.isRequired
};

export default PokemonList;
