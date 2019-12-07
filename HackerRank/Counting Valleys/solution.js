/** user starts at sea level */

/**
 *
 * @param {number} n
 * @param {string[]} s
 */
function solution(n, s) {
  let hikeLevel = 0;

  return s.reduce((acc, step) => {
    if (step === "U") {
      if (hikeLevel < 0 && hikeLevel + 1 === 0) {
        hikeLevel += 1;
        return acc + 1;
      } else {
        hikeLevel += 1;
      }
    } else {
      hikeLevel -= 1;
    }
    return acc;
  }, 0);
}
console.log(solution(8, ["D", "D", "U", "U", "U", "U", "D", "D"]));
