import { describe, expect, test } from 'vitest'
import { identity } from './base'
import {
  asyncBatchWithBisectingRetries,
  batchWithBisectingRetries,
  flipArgs,
  safeInvoke,
  wrap,
} from './function'

describe('wrapping function', () => {
  test('wrapping an incrementing function with identity before and after should end up as +1', () => {
    const inc = (x: number) => x + 1
    expect(wrap(inc, { before: identity, after: identity })(1)).toBe(2)
  })

  test('wrapping an incrementing function with itself before and after should end up as +3', () => {
    const inc = (x: number) => x + 1
    expect(wrap(inc, { before: inc, after: inc })(1)).toBe(4)
  })

  test('wrapping should not require both before and after', () => {
    const inc = (x: number) => x + 1
    expect(wrap(inc, { after: inc })(1)).toBe(3)
    expect(wrap(inc, { before: inc })(1)).toBe(3)
    expect(wrap(inc, {})(1)).toBe(2) // technically allowed, maybe shouldn't be
  })
})
// ts

describe('arity, argument ordering, and partial application', () => {
  test('flipping arguments works', () => {
    const subtract = (x, y) => x - y
    expect(flipArgs(subtract)(1, 10)).toBe(9)
  })
})

describe('safeInvoke', () => {
  test('a function that throws an error should have that error caught and shown calmly', () => {
    const thrower = () => {
      throw new Error('HEY')
    }
    expect(safeInvoke(thrower).success).toBe(false)
    expect((safeInvoke(thrower) as any).error.message).toBe('HEY')
  })

  test('a function that does not throw an error should report its results with a success state', () => {
    const thrower = () => {
      return 2
    }
    expect(safeInvoke(thrower).success).toBe(true)
    expect((safeInvoke(thrower) as any).result).toBe(2)
  })

  test('safe invoke should allow multiple args to the function', () => {
    const add = (x: number, y: number) => {
      return x + y
    }
    expect(safeInvoke(add, 1, 2).success).toBe(true)
    expect((safeInvoke(add, 1, 2) as any).result).toBe(3)
  })
})

describe('batchWithBisectingRetries', () => {
  test('should return results for arrays that do not cause errors', () => {
    const exampleFn = (arr: number[]): number => arr.reduce((a, b) => a + b, 0)
    const arr = [1, 2, 3, 4, 5, 6]
    const result = batchWithBisectingRetries(exampleFn, arr)
    expect(result.results).toEqual([21])
    expect(result.failures).toEqual([])
  })

  test('should handle errors by bisecting the array', () => {
    const exampleFn = (arr: number[]): number[] => {
      if (arr.includes(3)) {
        throw new Error('Contains 3')
      }
      return arr
    }
    const arr = [1, 2, 3, 4, 5, 6]
    const result = batchWithBisectingRetries(exampleFn, arr)
    expect(result.results).toEqual([[1], [2], [4, 5, 6]])
    expect(result.failures.length).toBe(1)
    expect((result.failures[0].error as Error).message).toBe('Contains 3')
  })

  test('should handle errors correctly with multiple error-prone elements', () => {
    const exampleFn = (arr: number[]) => {
      if (arr.includes(3) || arr.includes(5)) {
        throw new Error('Contains 3 or 5')
      }
      return arr
    }
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = batchWithBisectingRetries(exampleFn, arr)
    expect(result.results).toEqual([[1, 2], [4], [6, 7, 8, 9, 10]])
    expect(result.failures.length).toBe(2)
    expect(result.failures.map((d) => d.item)).toEqual([3, 5])
    expect((result.failures[0].error as Error).message).toBe('Contains 3 or 5')
    expect((result.failures[1].error as Error).message).toBe('Contains 3 or 5')
  })

  test('should handle an empty array', () => {
    const exampleFn = (arr: number[]): number => arr.reduce((a, b) => a + b, 0)
    const arr: number[] = []
    const result = batchWithBisectingRetries(exampleFn, arr)
    expect(result.results).toEqual([])
    expect(result.failures).toEqual([])
  })

  test('should handle an array with one element that causes an error', () => {
    const exampleFn = (arr: number[]): number => {
      if (arr[0] === 1) {
        throw new Error('Contains 1')
      }
      return arr[0]
    }
    const arr = [1]
    const result = batchWithBisectingRetries(exampleFn, arr)
    expect(result.results).toEqual([])
    expect(result.failures.length).toBe(1)
    expect(result.failures[0].item).toBe(1)
    expect((result.failures[0].error as Error).message).toBe('Contains 1')
  })

  test('should handle an array with one element that does not cause an error', () => {
    const exampleFn = (arr: number[]): number => arr[0]
    const arr = [1]
    const result = batchWithBisectingRetries(exampleFn, arr)
    expect(result.results).toEqual([1])
    expect(result.failures).toEqual([])
  })
})

describe('asyncBatchWithBisectingRetries', () => {
  test('should return results for arrays that do not cause errors', async () => {
    const exampleFn = async (arr: number[]) => arr.reduce((a, b) => a + b, 0)
    const arr = [1, 2, 3, 4, 5, 6]
    const result = await asyncBatchWithBisectingRetries(exampleFn, arr)
    expect(result.results).toEqual([21])
    expect(result.failures).toEqual([])
  })

  test('should handle errors by bisecting the array', async () => {
    const exampleFn = async (arr: number[]) => {
      if (arr.includes(3)) {
        throw new Error('Contains 3')
      }
      return arr
    }
    const arr = [1, 2, 3, 4, 5, 6]
    const result = await asyncBatchWithBisectingRetries(exampleFn, arr)
    expect(result.results).toEqual([[1], [2], [4, 5, 6]])
    expect(result.failures.length).toBe(1)
    expect((result.failures[0].error as Error).message).toBe('Contains 3')
  })

  test('should handle errors correctly with multiple error-prone elements', async () => {
    const exampleFn = (arr: number[]) => {
      if (arr.includes(3) || arr.includes(5)) {
        throw new Error('Contains 3 or 5')
      }
      return arr
    }
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = batchWithBisectingRetries(exampleFn, arr)
    expect(result.results).toEqual([[1, 2], [4], [6, 7, 8, 9, 10]])
    expect(result.failures.length).toBe(2)
    expect(result.failures.map((d) => d.item)).toEqual([3, 5])
    expect((result.failures[0].error as Error).message).toBe('Contains 3 or 5')
    expect((result.failures[1].error as Error).message).toBe('Contains 3 or 5')
  })

  test('should handle an empty array', async () => {
    const exampleFn = async (arr: number[]) => arr.reduce((a, b) => a + b, 0)
    const arr: number[] = []
    const result = await asyncBatchWithBisectingRetries(exampleFn, arr)
    expect(result.results).toEqual([])
    expect(result.failures).toEqual([])
  })

  test('should handle an array with one element that causes an error', async () => {
    const exampleFn = async (arr: number[]) => {
      if (arr[0] === 1) {
        throw new Error('Contains 1')
      }
      return arr[0]
    }
    const arr = [1]
    const result = await asyncBatchWithBisectingRetries(exampleFn, arr)
    expect(result.results).toEqual([])
    expect(result.failures.length).toBe(1)
    expect(result.failures[0].item).toBe(1)
    expect((result.failures[0].error as Error).message).toBe('Contains 1')
  })

  test('should handle an array with one element that does not cause an error', async () => {
    const exampleFn = async (arr: number[]) => arr[0]
    const arr = [1]
    const result = await asyncBatchWithBisectingRetries(exampleFn, arr)
    expect(result.results).toEqual([1])
    expect(result.failures).toEqual([])
  })
})
