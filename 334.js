/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let a = nums[0];
  let b = Number.MAX_SAFE_INTEGER;
  for (let num of nums) {
    if (num <= a) {
      a = num;
    } else if (num <= b) {
      b = num;
    } else if (num > b) {
      return true;
    }
  }
  return false;
};
