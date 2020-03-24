import React, { useCallback } from 'react';

import { LANGUAGE } from '../../constants';

import LanguagesButtons from './layout';

function LanguageButtonsContainer() {
  const onHandleLanguageChangeClick = useCallback(event => {
    const language = event.target.dataset.lang;
    localStorage.setItem(LANGUAGE, language);
    window.location.reload(false);
  }, []);

  return <LanguagesButtons onHandleLanguageChangeClick={onHandleLanguageChangeClick} />;
}

export default LanguageButtonsContainer;