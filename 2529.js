/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  const n = nums.length;
  let p = 0;
  while (p < n && nums[p] < 0) {
    p++;
  }
  let neg = p;
  while (neg < n && nums[neg] === 0) {
    neg++;
  }
  return Math.max(p, n - neg);
};
