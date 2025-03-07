/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const res = [];
  for (let i of asteroids) {
    if (i > 0) {
      res.push(i);
    } else {
      while (res.length && res.at(-1) > 0 && res.at(-1) < -i) {
        res.pop();
      }
      if (res.length && res.at(-1) === -i) {
        res.pop();
      } else if (!res.length || res.at(-1) < 0) {
        res.push(i);
      }
    }
  }
  return res;
};
