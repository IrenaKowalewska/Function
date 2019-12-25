'use strict';

const random = (min, max) => {
  if (max === undefined) {
    min = 0;
    max = min;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = { random };
