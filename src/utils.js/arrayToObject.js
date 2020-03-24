export const arrayToObject = (array, keyProperty) =>
  array.reduce((result, element) => {
    result[keyProperty] = element;
    return result;
  }, {});
