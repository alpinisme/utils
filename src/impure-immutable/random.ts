/**
 * generates values randomly according to specified weights
 *
 * @example weightedRandom({true: 75, false: 25}) // returns true 3 out of 4 times
 *
 */
export const weightedRandom = (weights: { value: number }) => {
  const table: number[] = [];
  Object.entries(weights).forEach(([value, weight]) => {
    while (weight--) table.push(Number(value));
  });
  const index = Math.floor(Math.random() * 100);
  return table[index];
};

/**
 * generates random float between lower and upper bounds (inclusive)
 */
export const random = (start: number, end: number): number => {
  const range = end - start;
  return range * Math.random() + start;
};

/**
 * generates random int between lower and upper bounds (inclusive)
 */
export const randomInt = (start: number, end: number): number => {
  return Math.round(random(start, end));
};
