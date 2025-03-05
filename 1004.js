/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let i = 0,
    j = 0,
    res = 0,
    kt = k;
  const n = nums.length;
  while (j < n) {
    if (nums[j] === 0) {
      kt--;
    }
    while (kt < 0) {
      if (nums[i++] === 0) {
        kt++;
      }
    }
    res = Math.max(res, j - i + 1);
    j++;
  }
  return res;
};
