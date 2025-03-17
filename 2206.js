/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const map = new Map();
  for (let i of nums) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  return Array.from(map.values()).every((i) => i % 2 === 0);
};
