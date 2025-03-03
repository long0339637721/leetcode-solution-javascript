/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  var v = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  var arr = s.split("");
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    while (i < j && !v.has(arr[i])) {
      i++;
    }
    while (i < j && !v.has(arr[j])) {
      j--;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
};
