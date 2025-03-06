/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const res = [];
  for (let i of s) {
    if (i === "*") {
      res.pop();
    } else {
      res.push(i);
    }
  }
  return res.join("");
};
