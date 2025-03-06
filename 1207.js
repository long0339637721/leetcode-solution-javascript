/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const m = new Map();
  for (let x of arr) {
    m.set(x, m.get(x) + 1 || 1);
  }
  const s = new Set(m.values());
  if (s.size === m.size) {
    return true;
  }
  return false;
};
