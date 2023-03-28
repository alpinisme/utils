import { describe, expect, test } from 'vitest'
import { identity } from './base'
import { flipArgs, safeInvoke, wrap } from './function'

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
