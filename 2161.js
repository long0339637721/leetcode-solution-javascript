/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const res1 = [];
  const res2 = [];
  const res3 = [];
  nums.forEach((num) => {
    if (num < pivot) {
      res1.push(num);
    } else if (num == pivot) {
      res2.push(num);
    } else {
      res3.push(num);
    }
  });
  res1.push(...res2);
  res1.push(...res3);
  return res1;
};
