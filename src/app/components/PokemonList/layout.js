import React from 'react';
import { array } from 'prop-types';
import cn from 'classnames';
// import { t } from 'i18next';

import PokemonInfo from '../PokemonInfo';

import styles from './styles.module.scss';

function PokemonList({ pokemons }) {
  const arePokemons = pokemons.length > 0;

  return (
    <>
      {arePokemons ? (
        <div className={`row ${styles.pokemonsContainer}`}>
          {pokemons.map(({ name, baseExperience, weight, height, imageUrl, id }) => (
            <PokemonInfo
              baseExperience={baseExperience}
              name={name}
              weight={weight}
              height={height}
              imageUrl={imageUrl}
              className="m-right-7 m-bottom-7"
              key={id}
            />
          ))}
        </div>
      ) : (
        <p className={`${styles.noPokemonsMessage} full-width`}>
          ¡Usá el buscador para buscar tus pokemons favoritos!
        </p>
      )}
    </>
  );
}

PokemonList.propTypes = {
  pokemons: array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default PokemonList;
