/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
  for (let i = 0; i < k - 1; i++) {
    colors.push(colors[i]);
  }
  const n = colors.length;
  let res = 0,
    count = 1;
  for (let i = 1; i < n; i++) {
    if (colors[i] != colors[i - 1]) {
      count++;
    } else {
      if (count >= k) {
        res += count - k + 1;
      }
      count = 1;
    }
  }
  if (count >= k) {
    res += count - k + 1;
  }
  return res;
};
