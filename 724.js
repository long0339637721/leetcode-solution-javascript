/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sumL = [0];
  const n = nums.length;
  for (let i = n - 1; i > 0; i--) {
    sumL.push(sumL[n - i - 1] + nums[i]);
  }
  let temp = 0;
  for (let i = 0; i < n; i++) {
    if (temp === sumL[n - 1 - i]) {
      return i;
    }
    temp += nums[i];
  }
  return -1;
};
