import { describe, expect, expectTypeOf, test } from 'vitest'
import { isError, isNonNull } from './base'

describe('error', () => {
  test('isError identifies errors correctly', () => {
    expect(isError(new Error())).toBe(true)
    try {
      throw 'oops'
    } catch (e) {
      expect(isError(e)).toBe(false)
    }
  })
})


describe('null checks', () => {
  test('filtering an array by isNonNull should result in an array typed as non-null values', () => {
    let stringsAndNulls = ['oh', null, 'hey']
    let strings = stringsAndNulls.filter(isNonNull)
    expectTypeOf(strings).toMatchTypeOf(['key'])
    expectTypeOf(strings).not.toMatchTypeOf([null])
    expectTypeOf(stringsAndNulls).not.toMatchTypeOf(strings)
  })

  test('filtering an array by isNonNull should result in an array stripped of null', () => {
    let stringsAndNulls = ['oh', null, 'hey', undefined]
    let strings = stringsAndNulls.filter(isNonNull)
    expect(strings).not.toEqual(stringsAndNulls)
    expect(strings).toEqual(['oh', 'hey'])
  })
})