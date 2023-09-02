import { isNull, toString } from './base'

export const { entries, fromEntries, keys } = Object

/**
 * Compares `checked` against `comparator`, to see if all fields in
 * `comparator` are equal in `checked`. Does not require that all
 * properties in `checked` exist in `comparator`, even when nested.
 *
 * @example
 * const checked = { a: 'a', b: { c: 'c', d: 'd' }}
 * const comparator = { b: { c: 'c' } }
 * isMatch(checked, comparator) // true
 */
export function isMatch<T extends Record<string, any>, U extends T>(
  checked: U,
  comparator: T,
): boolean {
  return keys(comparator).every((key) => {
    const comparatorValue = comparator[key]
    const checkedValue = checked[key]
    return typeof comparatorValue === 'object'
      ? isMatch(checkedValue, comparatorValue)
      : checkedValue === comparatorValue
  })
}

/**
 * Curried version of isMatch, useful in higher order functions,
 * such as array maps and filters.
 */
export function matches<T extends Record<string, any>>(
  comparator: Partial<T>,
): (checked: T) => boolean {
  return (checked) => isMatch(checked, comparator)
}

/**
 * Creates partial shallow copy of `item`, copying only the specified `keys` over.
 */
export function pick<T extends Record<string, any>, Keys extends (keyof T)[]>(
  keys: Keys,
  item: T,
): Pick<T, Keys[number]> {
  return fromEntries(entries(item).filter(([key]) => keys.map(toString).includes(key))) as Pick<
    T,
    Keys[number]
  >
}
/**
 * Creates partial shallow copy of `item`, omitting the specified `keys` when copying.
 */
export function omit<T extends Record<string, any>, Keys extends (keyof T)[]>(
  keys: Keys,
  item: T,
): Omit<T, Keys[number]> {
  return fromEntries(entries(item).filter(([key]) => !keys.map(toString).includes(key))) as Omit<
    T,
    Keys[number]
  >
}

/**
 *  extracts all keys that are guaranteed to be in T (i.e., if union type, only shared keys)
 */
export type Keys<T> = keyof T

/**
 * extracts all available keys from a union type, not just shared keys
 */
export type AllKeys<T> = T extends unknown ? Keys<T> : never

/**
 * turn optional field into required
 */
export type RequireKey<Obj, Key extends keyof Obj> = Obj & {
  [P in Key]-?: Obj[P]
}

/**
 *  filters union types to ones that have the specified key
 */
type SubtypesWithKey<Obj, Key extends PropertyKey> = Obj extends unknown
  ? Key extends keyof Obj
    ? Obj
    : never
  : never

type Nullable<T> = T | null | undefined
/**
 * check if obj has a key with a non-null value
 */
export function has<Key extends AllKeys<T>, T extends {}>(
  key: Key,
  obj: Nullable<T>,
): obj is RequireKey<SubtypesWithKey<T, Key>, Key> {
  if (isNull(obj)) {
    return false
  }
  return key in obj && obj[key] != null
}

/**
 * curried version of `has`
 */
export const curriedHas =
  <Key extends AllKeys<T>, T extends {}>(key: Key) =>
  (obj: Nullable<T>): obj is RequireKey<SubtypesWithKey<T, Key>, Key> => {
    return has(key, obj)
  }

export function mapKeys<T extends {}>(obj: T, mapFn: (key: keyof T) => string) {
  return fromEntries(entries(obj).map(([key, value]: any) => [mapFn(key), value])) as Record<
    string,
    T[keyof T]
  >
}

// todo: improve typings (this currently only really works with a dictionary, where all values are the same type)
export function filterMapKeys<T extends {}>(obj: T, mapFn: (key: keyof T) => string | undefined) {
  return fromEntries(
    entries(obj).reduce((acc: any, [key, value]: any) => {
      const newKey = mapFn(key)
      if (newKey != null) {
        acc.push([newKey, value])
      }
      return acc
    }, []),
  ) as Record<string, T[keyof T]>
}

/**
 * Given a keyMap object that maps old keys to new keys, copy an object over
 * using the new keys and dropping any properties that are unmapped.
 *
 * Note that the generic type must be specified at the call site to get best type results,
 * since otherwise TypeScript may infer `never` for properties that did not exist on original obj.
 * This isn't an unsafe coercion, just helping TypeScript narrow the generic correctly.
 *
 * @example
 * const obj = {a: 1, b: 2}
 * const keyMap = {a: 'alpha'}
 * remapKeys(obj, keyMap) // {'alpha': 1}
 */
export function remapKeys<T extends {}, M extends Record<string, string>>(obj: T, keyMap: M) {
  const remappedObj = {} as {
    [K in M[keyof M]]: K extends keyof T ? T[K] : never
  }

  Object.keys(keyMap).forEach((key) => {
    if (key in obj) {
      const newKey = keyMap[key] as M[keyof M]
      remappedObj[newKey] = obj[key as keyof T] as any
    }
  })

  return remappedObj
}
