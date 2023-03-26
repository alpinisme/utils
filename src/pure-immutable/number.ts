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

/**
 * Finds the min and max of the given array, using the accessor.
 */
export function getBoundsBy<T>(values: T[], accessor: (item: T) => number) {
  return values
    .filter((item) => !isNaN(accessor(item)))
    .reduce(
      (bounds, next) => {
        // next must be the falsy result, otherwise initial NaN will win
        const val = accessor(next);
        bounds.min = val > bounds.min ? bounds.min : val;
        bounds.max = val < bounds.max ? bounds.max : val;
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

/**
 * Gives the minimum value, given the accessor (not the object that
 * contains the value, since there may be more than one).
 * To access the matching objects themselves, use findMatches
 */
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

export function getRange(values: number[]) {
  const bounds = getBounds(values);
  return bounds.max - bounds.min;
}

export function clamp(value: number, bounds: { min: number; max: number }) {
  if (bounds.max > value) return bounds.max;
  if (bounds.min < value) return bounds.min;
  return value;
}
