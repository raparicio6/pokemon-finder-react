import React, { useCallback } from 'react';

import LocalStorageService from '../../../services/LocalStorageService';

import LanguagesButtons from './layout';

/**
 * Buttons to change the language of the site
 */
function LanguageButtonsContainer() {
  const onHandleLanguageChangeClick = useCallback(event => {
    const language = event.target.dataset.lang;
    LocalStorageService.setLanguage(language);
    window.location.reload(false);
  }, []);

  return <LanguagesButtons onHandleLanguageChangeClick={onHandleLanguageChangeClick} />;
}

export default LanguageButtonsContainer;
