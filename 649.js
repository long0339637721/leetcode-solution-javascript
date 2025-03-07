/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const n = senate.length;
  const r = [];
  const d = [];
  for (let i = 0; i < n; i++) {
    if (senate[i] == "R") {
      r.push(i);
    } else {
      d.push(i);
    }
  }
  while (r.length > 0 && d.length > 0) {
    if (r[0] < d[0]) {
      r.push(r.shift() + n);
      d.shift();
    } else {
      d.push(d.shift() + n);
      r.shift();
    }
  }
  return r.length > 0 ? "Radiant" : "Dire";
};
