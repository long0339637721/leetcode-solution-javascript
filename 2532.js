/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  let primes = [];
  let sieve = Array(right + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;
  for (let i = 2; i <= right; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= right; j += i) {
        sieve[j] = false;
      }
    }
  }
  for (let i = left; i <= right; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }
  if (primes.length < 2) {
    return [-1, -1];
  }
  const n = primes.length;
  let num1 = primes[0];
  let num2 = primes[1];
  for (let i = 2; i < n; i++) {
    if (num2 - num1 > primes[i] - primes[i - 1]) {
      num1 = primes[i - 1];
      num2 = primes[i];
    }
  }
  return [num1, num2];
};
