/**
 *
 * @param {number} n
 * @param {[]} ar
 */
function solution(n, ar) {
  const pairs = {};
  for (const sock of ar) {
    if (pairs[sock]) {
      pairs[sock]++;
    } else {
      pairs[sock] = 1;
    }
  }

  return Object.keys(pairs).reduce((acc, currentSock) => {
    if (pairs[currentSock] % 2 === 0)
      return acc + Math.floor(pairs[currentSock] / 2);
    if (pairs[currentSock] > 2)
      return acc + Math.floor((pairs[currentSock] - 1) / 2);
    return acc;
  }, 0);
}

console.log(solution(7, [1, 2, 1, 2, 1, 3, 2]));
