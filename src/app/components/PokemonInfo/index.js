import React from 'react';
import { string, number } from 'prop-types';

import PokemonInfo from './layout';

function PokemonInfoContainer({ name, baseExperience, weight, height, imageUrl, className }) {
  return (
    <PokemonInfo
      baseExperience={baseExperience}
      className={className}
      height={height}
      imageUrl={imageUrl}
      name={name}
      weight={weight}
    />
  );
}

PokemonInfoContainer.propTypes = {
  baseExperience: number.isRequired,
  height: number.isRequired,
  name: string.isRequired,
  weight: number.isRequired,
  className: string,
  imageUrl: string
};

PokemonInfoContainer.defaultProps = {
  className: '',
  imageUrl: ''
};

export default PokemonInfoContainer;
