/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  const [n, m] = [nums.length, queries.length];
  const d = Array(n + 1);
  let [l, r] = [0, m + 1];
  const check = (k) => {
    d.fill(0);
    for (let i = 0; i < k; ++i) {
      const [l, r, val] = queries[i];
      d[l] += val;
      d[r + 1] -= val;
    }
    for (let i = 0, s = 0; i < n; ++i) {
      s += d[i];
      if (nums[i] > s) {
        return false;
      }
    }
    return true;
  };
  while (l < r) {
    const mid = (l + r) >> 1;
    if (check(mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l > m ? -1 : l;
};
