/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, item) => {
    k = fn(item);
    if (acc[k]) {
      acc[k].push(item);
    } else {
      acc[k] = [item];
    }
    return acc;
  }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
