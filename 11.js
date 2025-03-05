/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0,
    i = 0,
    j = height.length - 1;
  while (i !== j) {
    if (height[i] <= height[j]) {
      const temp = height[i] * (j - i);
      if (temp > res) {
        res = temp;
      }
      i++;
    } else {
      const temp = height[j] * (j - i);
      if (temp > res) {
        res = temp;
      }
      j--;
    }
  }
  return res;
};
