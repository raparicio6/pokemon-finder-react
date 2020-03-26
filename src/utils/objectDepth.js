/* eslint-disable */
export const objectDepth = object => {
  let level = 1;
  for (const key in object) {
    if (!object.hasOwnProperty(key)) {
      continue;
    }

    if (typeof object[key] === 'object') {
      const depth = objectDepth(object[key]) + 1;
      level = Math.max(depth, level);
    }
  }
  return level;
};
