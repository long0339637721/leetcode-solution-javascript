/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const m = new Map();
  let res = 0;
  for (let num of nums) {
    const target = k - num;
    if (m.has(target) && m.get(target)) {
      res++;
      m.set(target, m.get(target) - 1);
    } else if (m.has(num)) {
      m.set(num, m.get(num) + 1);
    } else {
      m.set(num, 1);
    }
  }
  return res;
};
