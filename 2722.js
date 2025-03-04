/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const d = arr1.reduce((acc, x) => ((acc[x.id] = x), acc), {});

  arr2.forEach((x) => {
    if (d[x.id]) {
      Object.assign(d[x.id], x);
    } else {
      d[x.id] = x;
    }
  });
  return Object.values(d);
};
