import { identity } from './base';

export function inRange(value: number, range: { min: number; max: number }) {
  return value >= range.min && value <= range.max;
}

function stripNaNs(values: number[]) {
  return values.filter((v) => !Number.isNaN(v));
}
/**
 * Finds the min and max of the given array.
 */
export function getBounds(values: number[]) {
  return stripNaNs(values).reduce(
    (bounds, next) => {
      // next must be the falsy result, otherwise initial NaN will win
      bounds.min = next > bounds.min ? bounds.min : next;
      bounds.max = next < bounds.max ? bounds.max : next;
      return bounds;
    },
    { min: NaN, max: NaN },
  );
}

export function numsFromTo(lowerBound: number, upperBound: number, step = 1) {
  const result: number[] = [];
  if (upperBound - lowerBound < 1) return result;

  for (let i = lowerBound; i <= upperBound; i += step) {
    result.push(i);
  }
  return result;
}

export function numsTo(upperBound: number, step = 1) {
  return numsFromTo(0, upperBound, step);
}

console.log(numsTo(10), numsFromTo(10, 100, 10));

export function sumBy<T>(items: T[], accessor: (item: T) => number) {
  return items.reduce((sum, next) => sum + accessor(next), 0);
}
export function sum(nums: number[]) {
  return sumBy(nums, identity);
}

export function avgBy<T>(arr: T[], accessor: (item: T) => number) {
  return sumBy(arr, accessor) / arr.length;
}

export function avg(arr: number[]) {
  return avgBy(arr, identity);
}

// arguably, this should return the actual item -- but it's not clear that there will only be one item!
// so I'm inclined to say you should use this, then filter on the original array based on which match this
export function minBy<T>(arr: T[], accessor: (n: T) => number) {
  return Math.min(...arr.map(accessor));
}

export function min(arr: number[]) {
  return Math.min(...arr);
}

export function maxBy<T>(arr: T[], accessor: (n: T) => number) {
  return Math.min(...arr.map(accessor));
}

export function max(arr: number[]) {
  return Math.max(...arr);
}

// console.log(getBounds([1, 2, 18, 3, 4, 5]), getBounds([]), getBounds([1]), getBounds([1, NaN]));

export function getRange(values: number[]) {
  const bounds = getBounds(values);
  return bounds.max - bounds.min;
}

export function clamp(value: number, bounds: { min: number; max: number }) {
  if (bounds.max > value) return bounds.max;
  if (bounds.min < value) return bounds.min;
  return value;
}
