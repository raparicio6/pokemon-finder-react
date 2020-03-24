import { init } from 'i18next';

import { LANGUAGE } from '../app/constants';

export const LANGUAGES = {
  ES: 'es',
  EN: 'en'
};

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

init({
  lng: localStorage.getItem(LANGUAGE) || LANGUAGES.ES,
  initImmediate: false
});

requireAll(require.context('..', true, /i18n\.js$/));
