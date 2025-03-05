/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  res = 0;
  gain.reduce((acc, n) => {
    acc += n;
    if (acc > res) {
      res = acc;
    }
    return acc;
  }, 0);
  return res;
};
