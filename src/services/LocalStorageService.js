const tempStorage = {};

const getValue = key => {
  const encodedKey = window.btoa(key);
  let encodedValue = undefined;

  try {
    encodedValue = window.localStorage.getItem(encodedKey);
  } catch {
    encodedValue = tempStorage[encodedKey];
  }
  const stringValue = encodedValue && window.atob(encodedValue);

  return stringValue && JSON.parse(stringValue);
};

const setValue = (key, value) => {
  const encodedKey = window.btoa(key);
  const stringValue = JSON.stringify(value);
  const encodedValue = window.btoa(stringValue);

  try {
    window.localStorage.setItem(encodedKey, encodedValue);
  } catch {
    tempStorage[encodedKey] = encodedValue;
  }
};

const removeValue = key => {
  const encodedKey = window.btoa(key);

  try {
    window.localStorage.removeItem(encodedKey);
  } catch {
    tempStorage[encodedKey] = undefined;
  }
};

const defineProperty = (prop, defaultKey = '', tag = '') => {
  const projectName = 'pokemon-finder-react'.replace(/-/g, '_').toUpperCase();
  const capitalizedKey = `${prop[0].toUpperCase()}${prop.substring(1)}`;

  module.exports[`set${capitalizedKey}`] = (val, key = defaultKey) =>
    setValue(`@@${projectName}:${prop}${tag}${key}`, val);
  module.exports[`get${capitalizedKey}`] = (key = defaultKey) =>
    getValue(`@@${projectName}:${prop}${tag}${key}`);
};

// ------------------------------ LOCAL STORAGE PROPERTIES ------------------------------
defineProperty('allPokemonsHash');
defineProperty('language');
