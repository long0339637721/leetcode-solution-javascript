/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let bedSim = flowerbed;

  for (var i = 0; i < flowerbed.length; i++) {
    if (bedSim[i - 1] != 1 && bedSim[i + 1] != 1 && bedSim[i] != 1) {
      n--;
      bedSim[i] = 1;
    }
  }

  return n <= 0;
};
