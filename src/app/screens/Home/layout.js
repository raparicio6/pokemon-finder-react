import React from 'react';
import { t } from 'i18next';

import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';
import LanguageButtons from '../../components/LanguageButtons';

import styles from './styles.module.scss';

function Home() {
  return (
    <>
      <div className={`background-wild-sand ${styles.languageButtons}`}>
        <LanguageButtons />
      </div>
      <div className={`column center background-wild-sand all-screen-height ${styles.container}`}>
        <h1 className={`${styles.title} m-bottom-6`}>{t('Home:title')}</h1>
        <h2 className={`${styles.field} m-bottom-6`}>{t('Home:subtitle')}</h2>
        <SearchBar />
        <PokemonList />
        <Footer />
      </div>
    </>
  );
}

export default Home;
