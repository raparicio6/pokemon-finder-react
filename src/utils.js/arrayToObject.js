export const arrayToObject = (array, keyProperty) =>
  array.reduce((result, element) => {
    result[element[keyProperty]] = element;
    return result;
  }, {});
