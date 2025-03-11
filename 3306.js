/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  return foo(word, k) - foo(word, k - 1);
};

var foo = function (word, k) {
  let a = 0,
    e = 0,
    i = 0,
    o = 0,
    u = 0;
  let res = 0;
  const n = word.length;
  for (let l = 0, r = 0; r < n; r++) {
    switch (word[r]) {
      case "a":
        a++;
        break;
      case "e":
        e++;
        break;
      case "i":
        i++;
        break;
      case "o":
        o++;
        break;
      case "u":
        u++;
        break;
      default:
        k--;
    }
    while (a && i && e && o && u && k < 0) {
      switch (word[l++]) {
        case "a":
          a--;
          break;
        case "e":
          e--;
          break;
        case "i":
          i--;
          break;
        case "o":
          o--;
          break;
        case "u":
          u--;
          break;
        default:
          k++;
      }
    }
    res += r - l + 1;
  }
  return res;
};

// Need review
