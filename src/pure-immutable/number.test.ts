import { describe, expect, test } from 'vitest'
import { identity } from './base'
import {
  avg,
  avgBy,
  clamp,
  deviations,
  getBounds,
  getBoundsBy,
  getRange,
  inRange,
  max,
  maxBy,
  min,
  minBy,
  numsFromTo,
  numsTo,
  pctDev as pctDevMap,
  stdDev,
  sum,
  sumBy,
  variance,
} from './number'

describe('bounds', () => {
  test('getBounds gets the min and max of array', () => {
    const testArr = [1, 2, 18, -3, 4, 5]
    const expected = {
      max: 18,
      min: -3,
    }
    expect(getBounds(testArr)).toEqual(expected)
  })

  test('getBounds has same min and max when only one number in array', () => {
    expect(getBounds([19])).toEqual({ min: 19, max: 19 })
  })

  test('getBounds gives min and max as NaN when array is empty', () => {
    expect(getBounds([])).toEqual({ min: NaN, max: NaN })
  })

  test('getBounds ignores NaNs in the array and reports normal min and max', () => {
    const testArr = [NaN, 1, 2, 18, -3, 4, NaN, 5]
    const expected = {
      max: 18,
      min: -3,
    }
    expect(getBounds(testArr)).toEqual(expected)
  })

  test('getBoundsBy behaves like getBounds when using identity as accessor', () => {
    const testArr = [1, 2, 18, -3, 4, 5]
    expect(getBoundsBy(testArr, identity)).toEqual(getBounds(testArr))
  })

  test('getBoundsBy gets bounds using a length-based accessor', () => {
    const testArr = ['a', 'abe', 'blah blah blah']
    const expected = {
      max: 'blah blah blah'.length,
      min: 1,
    }
    expect(getBoundsBy(testArr, (x) => x.length)).toEqual(expected)
  })
})

describe('enumerating a range', () => {
  test('numsTo gives an array from 0 to the specified number', () => {
    expect(numsTo(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  test('numsTo allows a second argument to specify step size', () => {
    expect(numsTo(10, 2)).toEqual([0, 2, 4, 6, 8, 10])
  })

  test('numsFromTo allows a starting offset', () => {
    expect(numsFromTo(10, 100, 10)).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
  })

  test('numsFromTo returns empty array if impossible request', () => {
    expect(numsFromTo(100, 10)).toEqual([])
  })

  test('numsFromTo just returns lower bound if step higher than distance to upper', () => {
    expect(numsFromTo(10, 100, 100)).toEqual([10])
  })
})

describe('number manipulation', () => {
  test('clamp returns the same number if in range', () => {
    expect(clamp(1, { min: 0, max: 10 })).toBe(1)
  })

  test('clamp returns the min if value below range', () => {
    expect(clamp(-1, { min: 0, max: 10 })).toBe(0)
  })

  test('clamp returns the max if value above range', () => {
    expect(clamp(100, { min: 0, max: 10 })).toBe(10)
  })

  test('inRange checks if number between min and max', () => {
    expect(inRange(10, { min: 0, max: 10 })).toBe(true)
  })

  test('inRange detects if number not between min and max', () => {
    expect(inRange(11, { min: 0, max: 10 })).toBe(false)
  })
})

describe('statistical summary', () => {
  test('sum works', () => {
    expect(sum(numsFromTo(9, 11))).toEqual(30)
  })

  test('sum gives 0 when empty array provided', () => {
    expect(sum([])).toEqual(0)
  })

  test('sumBy works', () => {
    expect(sumBy([{ n: 1 }, { n: 10 }, { n: 19 }], (d) => d.n)).toEqual(30)
  })

  test('average works', () => {
    expect(avg(numsTo(10))).toEqual(5)
  })

  test('average returns NaN when no data provided', () => {
    expect(avg([])).toEqual(NaN)
  })

  test('averageBy works', () => {
    expect(avgBy([{ n: 1 }, { n: 10 }, { n: 19 }], (d) => d.n)).toEqual(10)
  })

  test('max gives the highest value in array', () => {
    expect(max(numsTo(10))).toBe(10)
  })

  test('maxBy gives the highest value in array given the accessor', () => {
    expect(maxBy([{ n: 1 }, { n: 21 }, { n: 19 }], (d) => d.n)).toBe(21)
  })

  test('min gives the lowest value in array', () => {
    expect(min(numsTo(10))).toBe(0)
  })

  test('minBy gives the lowest value in array given the accessor', () => {
    expect(minBy([{ n: 1 }, { n: 10 }, { n: 19 }], (d) => d.n)).toBe(1)
  })

  test('max gives -Infinity if given empty array', () => {
    // this is the default js behavior of Math.max and I don't see any sane way to alter it,
    // except the equally awkward NaN and the worse undefined -- using a Maybe type could work
    // but it would break the pattern -- maybe later I'll add a safeMax etc.
    expect(max([])).toBe(-Infinity)
  })

  test('getRange returns range between min and max', () => {
    expect(getRange([-1, 4, 2])).toBe(5)
  })

  test('deviation map', () => {
    expect(deviations([10, 12, 23, 23, 16, 23, 21, 16])).toEqual([-8, -6, 5, 5, -2, 5, 3, -2])
  })

  test('variance', () => {
    expect(variance([10, 12, 23, 23, 16, 23, 21, 16])).toBe(24)
  })

  test('standard deviation', () => {
    expect(stdDev([10, 12, 23, 23, 16, 23, 21, 16]).toFixed(10)).toBe((4.8989794855664).toFixed(10))
  })

  test('percent deviation map', () => {
    expect(pctDevMap([10, 12, 23, 23, 16, 23, 21, 16]).map((x) => x.toFixed(10))).toEqual(
      [
        44.44444444444444, 33.33333333333333, 27.77777777777778, 27.77777777777778,
        11.11111111111111, 27.77777777777778, 16.666666666666664, 11.11111111111111,
      ].map((x) => x.toFixed(10)),
    )
  })
})
