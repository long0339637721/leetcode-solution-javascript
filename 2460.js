/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  const n = nums.length;
  const res = Array(n).fill(0);
  let x = 0;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
    if (nums[i] > 0) {
      res[x++] = nums[i];
    }
  }
  if (nums[n - 1] > 0) {
    res[x] = nums[n - 1];
  }
  return res;
};
