import React from 'react';
import { array } from 'prop-types';
// import { t } from 'i18next';

import PokemonInfo from '../PokemonInfo';

import styles from './styles.module.scss';

function PokemonList({ pokemons }) {
  const areTherePokemons = pokemons.length > 0;

  return (
    <>
      {areTherePokemons ? (
        <div className={`row ${styles.pokemonsContainer} m-top-8 m-bottom-6`}>
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
        <p className={`row center ${styles.noPokemonsMessage} m-top-16`}>
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
