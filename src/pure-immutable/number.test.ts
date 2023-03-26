import { describe, expect, test } from 'vitest';
import { identity } from './base';
import { getBounds, getBoundsBy, numsFromTo, numsTo } from './number';

describe('bounds', () => {
  test('getBounds gets the min and max of array', () => {
    const testArr = [1, 2, 18, -3, 4, 5];
    const expected = {
      max: 18,
      min: -3,
    };
    expect(getBounds(testArr)).toEqual(expected);
  });

  test('getBounds has same min and max when only one number in array', () => {
    expect(getBounds([19])).toEqual({ min: 19, max: 19 });
  });

  test('getBounds gives min and max as NaN when array is empty', () => {
    expect(getBounds([])).toEqual({ min: NaN, max: NaN });
  });

  test('getBounds ignores NaNs in the array and reports normal min and max', () => {
    const testArr = [NaN, 1, 2, 18, -3, 4, NaN, 5];
    const expected = {
      max: 18,
      min: -3,
    };
    expect(getBounds(testArr)).toEqual(expected);
  });

  test('getBoundsBy behaves like getBounds when using identity as accessor', () => {
    const testArr = [1, 2, 18, -3, 4, 5];
    expect(getBoundsBy(testArr, identity)).toEqual(getBounds(testArr));
  });

  test('getBoundsBy gets bounds using a length-based accessor', () => {
    const testArr = ['a', 'abe', 'blah blah blah'];
    const expected = {
      max: 'blah blah blah'.length,
      min: 1,
    };
    expect(getBoundsBy(testArr, (x) => x.length)).toEqual(expected);
  });
});

describe('enumerating a range', () => {
  test('numsTo gives an array from 0 to the specified number', () => {
    expect(numsTo(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('numsTo allows a second argument to specify step size', () => {
    expect(numsTo(10, 2)).toEqual([0, 2, 4, 6, 8, 10]);
  });

  test('numsFromTo allows a starting offset', () => {
    expect(numsFromTo(10, 100, 10)).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
  });
});
