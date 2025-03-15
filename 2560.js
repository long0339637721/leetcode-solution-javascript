/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  const n = nums.length;
  const foo = (mid) => {
    let res = 0;
    let j = -2;
    for (let i = 0; i < n; i++) {
      if (nums[i] <= mid && i - j > 1) {
        res++;
        j = i;
      }
    }
    return res >= k;
  };
  let l = 0;
  let r = Math.max(...nums);
  while (l < r) {
    const mid = (l + r) >> 1;
    if (foo(mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};
