/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const res = [];
  temp = 1;
  for (let i = 0; i < n; i++) {
    res[i] = temp;
    temp *= nums[i];
  }
  temp = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= temp;
    temp *= nums[i];
  }
  return res;
};
