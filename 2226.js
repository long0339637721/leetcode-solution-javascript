/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  let l = 0;
  let r = Math.max(...candies);
  while (l < r) {
    const mid = Math.floor((l + r + 1) / 2);
    const t = candies.reduce((a, b) => a + Math.floor(b / mid), 0);
    if (t >= k) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return l;
};
