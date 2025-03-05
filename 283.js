/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroIndex = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[zeroIndex] === 0 && nums[i]) {
      nums[zeroIndex] = nums[i];
      nums[i] = 0;
    }
    if (nums[zeroIndex] !== 0) zeroIndex++;
  }
};
