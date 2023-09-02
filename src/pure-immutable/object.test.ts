import fc from 'fast-check'
import { assertType, describe, expect, expectTypeOf, test } from 'vitest'
import { filterMapKeys, has, isMatch, mapKeys, omit, pick, remapKeys } from './object'

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

describe('matching', () => {
  const target = {
    name: 'Max',
    age: 28,
    location: {
      city: 'George',
      state: 'WA',
    },
  }
  test('the same object should match itself', () => {
    expect(isMatch(target, target)).toBe(true)
  })

  test('a copy of an object should match', () => {
    const copy = { ...target, location: { ...target.location } }
    expect(isMatch(target, copy)).toBe(true)
  })

  test('a partial match should succeed', () => {
    const match = { name: target.name, age: target.age }
    expect(isMatch(target, match)).toBe(true)
  })

  test('a partial mismatch should fail', () => {
    const match = { name: target.name, age: target.age + 1 }
    expect(isMatch(target, match)).toBe(false)
  })

  test('a nested partial match should succeed', () => {
    const match = { ...target, location: { state: target.location.state } }
    expect(isMatch(target, match)).toBe(true)
  })

  test('example in code comment should work', () => {
    const checked = { a: 'a', b: { c: 'c', d: 'd' } }
    const comparator = { b: { c: 'c' } }
    expect(isMatch(checked, comparator)).toBe(true)
  })
})

describe('key mapping', () => {
  const person = {
    name: 'Max',
    age: 28,
    location: {
      city: 'George',
      state: 'WA',
    },
  }

  test('an id map should not change the object', () => {
    expect(mapKeys(person, (x) => x)).toMatchObject(person)
  })

  test('you should be able to append a constant string to all ', () => {
    fc.assert(
      fc.property(fc.dictionary(fc.string(), fc.anything()), (dict) => {
        const result = mapKeys(dict, (x) => x + 'abc')
        const resultKeys = Object.keys(result)
        expect(resultKeys.every((x) => x.slice(-3) === 'abc')).toBe(true)
      }),
    )
  })

  test('all values should remain deep equal to their original values after a key map', () => {
    fc.assert(
      fc.property(fc.dictionary(fc.string(), fc.anything()), (dict) => {
        const result = mapKeys(dict, (x) => x + 'abc')
        const resultValues = Object.values(result)
        const originalValues = Object.values(dict)
        expect(resultValues.every((x, i) => x === originalValues[i])).toBe(true)
      }),
    )
  })

  test('a map and its inverse applied in sequence should be the same as making a shallow copy', () => {
    fc.assert(
      fc.property(fc.dictionary(fc.string(), fc.anything()), (dict) => {
        const intermediate = mapKeys(dict, (x) => x + 'abc')
        const result = mapKeys(intermediate, (x) => x.slice(0, -3))
        expect(result).toEqual(dict)
      }),
    )
  })
})

describe('filterMapKeys', () => {
  const person = {
    name: 'Max',
    age: 28,
    location: {
      city: 'George',
      state: 'WA',
    },
  }

  test('when the mapper function returns undefined, the keys should be omitted', () => {
    const result = filterMapKeys(person, (key) =>
      typeof person[key] === 'object' ? undefined : key,
    )
    expect(result).toEqual(omit(['location'], person))
  })
})

describe('remapKeys', () => {
  const person = {
    n: 'Max',
    a: 28,
    location: {
      city: 'George',
      state: 'WA',
    },
    secret: 'shhh',
  } as const

  const keyMap = {
    n: 'name',
    a: 'age',
    location: 'loc',
  } as const

  test('when the mapper function returns undefined, the keys should be omitted', () => {
    const result = remapKeys(person, keyMap)
    expect(result).toEqual({ name: person.n, age: person.a, loc: person.location })
  })

  test('return type should be well typed', () => {
    const result = remapKeys(person, keyMap)
    expectTypeOf(result).toMatchTypeOf({
      name: person.n,
      age: person.a,
      loc: person.location,
    } as const)
  })

  test('return type should be well typed', () => {
    const result = remapKeys(person, keyMap)

    expectTypeOf(result).toMatchTypeOf({
      name: person.n,
      age: person.a,
      loc: person.location,
    } as const)
  })

  test('with explicit type annotations, all types should be maintained', () => {
    const expected = {
      name: person.n,
      age: person.a,
      loc: person.location,
    } as const
    const result: typeof expected = remapKeys(person, keyMap)

    expectTypeOf(result.age).toBeNumber()
    expectTypeOf(result.name).toBeString()
    expectTypeOf(result.loc).toBeObject()
  })
})
