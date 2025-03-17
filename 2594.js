/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  let l = 0;
  let r = ranks[0] * cars * cars;
  while (l < r) {
    const m = Math.floor((r + l) / 2);
    let temp = 0;
    for (let r of ranks) {
      temp += Math.floor(Math.sqrt(m / r));
    }
    if (temp >= cars) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
