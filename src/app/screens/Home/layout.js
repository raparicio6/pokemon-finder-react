import React from 'react';

import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={`column center background-wild-sand all-screen-height ${styles.container}`}>
      <h1 className={styles.title}>Pokemon finder</h1>
      <h2 className={styles.field}>El que quiere pokemons, que los busque.</h2>
      <SearchBar />
      <PokemonList />
      <Footer className={styles.footer} />
    </div>
  );
}

export default Home;
