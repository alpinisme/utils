import { isNull, toString } from './base'

const { entries, fromEntries } = Object

export function isMatch<T extends Record<string, any>>(
  checked: T,
  comparator: Partial<T>,
): Boolean {
  return entries(comparator).every(([key, value]) => checked[key] === value)
}

export function createMatcher<T extends Record<string, any>>(
  comparator: Partial<T>,
): (checked: T) => Boolean {
  return (checked) => isMatch(checked, comparator)
}

export function pick<T extends Record<string, any>, Keys extends (keyof T)[]>(
  keys: Keys,
  item: T,
): Pick<T, Keys[number]> {
  return fromEntries(entries(item).filter(([key]) => keys.map(toString).includes(key))) as Pick<
    T,
    Keys[number]
  >
}

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
