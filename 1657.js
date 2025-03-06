/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  const n1 = word1.length;
  const n2 = word2.length;
  if (n1 !== n2) {
    return false;
  }
  const m1 = new Map();
  const m2 = new Map();
  for (let i of word1) {
    m1.set(i, m1.get(i) + 1 || 1);
  }
  for (let i of word2) {
    m2.set(i, m2.get(i) + 1 || 1);
  }

  return (
    Array.from(m1.values()).sort().join() ===
      Array.from(m2.values()).sort().join() &&
    Array.from(m1.keys()).sort().join() === Array.from(m2.keys()).sort().join()
  );
};
