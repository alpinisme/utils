import { assertType, describe, expect, expectTypeOf, test } from 'vitest'
import { has, isMatch, omit, pick } from './object'

describe('picking and omitting', () => {
  test('pick includes specified keys and excludes others', () => {
    expect(pick(['hello'], { test: 1, hello: 'there' })).toEqual({ hello: 'there' })
  })

  test('omit excludes specified keys and includes others', () => {
    expect(omit(['hello'], { test: 1, hello: 'there' })).toEqual({ test: 1 })
  })

  test('omit gives empty object if all keys listed', () => {
    expect(omit(['hello', 'test'], { test: 1, hello: 'there' })).toEqual({})
  })

  test('omit works with number keys too', () => {
    expect(omit(['hello', 0], { 0: 1, hello: 'there' })).toEqual({})
  })
})

describe('match testing', () => {
  test('isMatch finds matches', () => {
    expect(isMatch({ yes: 'no', huh: 'cool' }, { yes: 'no' })).toBe(true)
  })

  test('isMatch rejects nonmatches', () => {
    expect(isMatch({ yes: 'no', huh: 'cool' }, { yes: 'yes' })).toBe(false)
  })
})

describe('property checking', () => {
  type Union = { max?: number } | { min: number; max: number } | { other: '' }

  test('types of `has` when given a union where at least one member has key', () => {
    const obj = {} as Union

    if (has('max', obj)) {
      expectTypeOf(obj.max).toBeNumber()
    } else {
      // @ts-expect-error obj.max is not known to exist
      assertType(obj.max)
    }
  })

  test('types of `has` when given a nullable union where at least one member has key', () => {
    const obj = {} as Union | null

    if (has('max', obj)) {
      expectTypeOf(obj.max).toBeNumber()
    } else {
      // @ts-expect-error obj.max is not known to exist
      assertType(obj.max)
    }
  })

  test('types of `has` when given a union where no member has key', () => {
    const obj = {} as Union

    // @ts-expect-error obj.random is not known to exist
    has('random', obj)
  })

  test('types of `has` when given a nullable union where no member has key', () => {
    const obj = {} as Union | undefined

    // @ts-expect-error obj.random is not known to exist
    has('random', obj)
  })

  test('`has` fails if object lacks specified key', () => {
    const obj = { other: '' } as Union

    expect(has('max', obj)).toBe(false)
  })

  test('`has` fails if object has key but it is undefined or null', () => {
    const obj = { max: null } as any

    expect(has('max', obj)).toBe(false)
  })

  test('`has` fails if object has key but it is undefined or null', () => {
    const obj = { max: undefined } as any

    expect(has('max', obj)).toBe(false)
  })

  test('`has` passes if object has non-null key', () => {
    const obj = { max: 19 } as Union

    expect(has('max', obj)).toBe(true)
  })
})
