/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  res = 0;
  const n = blocks.length;
  for (let i = 0; i < k; i++) {
    if (blocks[i] == "W") {
      res++;
    }
  }
  let count = res;
  for (let i = k; i < n; i++) {
    if (blocks[i] == "W") {
      count++;
    }
    if (blocks[i - k] == "W") {
      count--;
    }
    if (count < res) {
      res = count;
    }
  }
  return res;
};
