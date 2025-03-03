/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const n = arr.length;
  const d = new Set(arr);
  const m = new Map();
  for (let i = 2; i < n; i++) {
    const c = arr[i];
    for (let j = 1; j < i; j++) {
      const b = arr[j];
      const a = c - b;
      if (d.has(a) && a < b) {
        m.set("" + b + c, (m.get("" + a + b) ?? 2) + 1);
      }
    }
  }
  return Math.max(0, ...m.values());
};
// 28.86%
