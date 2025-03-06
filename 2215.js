/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  nums2.forEach((n) => {
    if (s1.has(n)) {
      s1.delete(n);
      s2.delete(n);
    }
  });
  return [Array.from(s1), Array.from(s2)];
};
