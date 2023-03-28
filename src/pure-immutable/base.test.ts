import { describe, expect, test } from 'vitest'
import { isError } from './base'

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
