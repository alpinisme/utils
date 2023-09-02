import { identity } from './base'
import { matches } from './object'

/**
 * take first of each unique value, given the accessor function
 */
export function uniquesBy<T, Key>(arr: T[], accessor: (item: T) => Key) {
  // reduce right so that left-most one overwrites ones to right
  const map = arr.reduceRight((map, next) => map.set(accessor(next), next), new Map<Key, T>())
  return toArray(map.values()).reverse()
}

export function uniques<T>(values: T[]): T[] {
  const set = values.reduce((set, value) => set.add(value), new Set<T>())
  return toArray(set)
}

export function sortByString<T>(
  arr: T[],
  accessor: (item: T) => string,
  order: 'ASC' | 'DESC' = 'ASC',
): T[] {
  return order === 'ASC'
    ? arr.slice().sort((a, b) => accessor(a).localeCompare(accessor(b)))
    : arr.slice().sort((a, b) => accessor(b).localeCompare(accessor(a)))
}

export function sortByNumber<T>(
  arr: T[],
  accessor: (item: T) => number,
  order: 'ASC' | 'DESC' = 'ASC',
): T[] {
  return order === 'ASC'
    ? arr.slice().sort((a, b) => accessor(a) - accessor(b))
    : arr.slice().sort((a, b) => accessor(b) - accessor(a))
}

export function reverse<T>(arr: T[]): T[] {
  return arr.slice().reverse()
}

export function take<T>(arr: T[], count: number): T[] {
  if (count < 0) return []
  return arr.slice(0, count)
}

export function takeRight<T>(arr: T[], count: number): T[] {
  const length = arr.length
  if (count > length) return arr
  if (count <= 0) return []
  return arr.slice(length - count)
}

export function insertNth<T>(arr: T[], index: number, item: T): T[] {
  return take(arr, index)
    .concat([item])
    .concat(takeRight(arr, arr.length - index))
}

export function updateNth<T>(arr: T[], index: number, updater: (old: T) => T): T[] {
  if (index < -arr.length || index > arr.length) return arr
  const updatedValue = updater(arr.at(index) as T) // bounds checks above guarantee this
  return take(arr, index)
    .concat([updatedValue])
    .concat(takeRight(arr, arr.length - (index + 1)))
}

export function removeNth<T>(arr: T[], index: number): T[] {
  return take(arr, index).concat(takeRight(arr, arr.length - (index + 1)))
}

export function findAll<T, U>(haystack: T[], needle: U, accessor: (item: T) => U): T[] {
  return haystack.filter((item) => accessor(item) === needle)
}

export function duplicates<T>(values: T[]): T[] {
  return duplicatesBy(values, identity).map((x) => x.value) as T[]
}

export function duplicatesBy<T, U extends (item: T) => any>(
  values: T[],
  accessor: U,
): { value: U; matches: T[] }[] {
  const map = new Map<any, T[]>()
  values.forEach((val) => {
    const key = accessor(val)
    if (map.has(key)) {
      map.get(key)?.push(val)
    } else {
      map.set(key, [val])
    }
  })
  return toArray(map)
    .filter((entry) => entry[1].length > 1)
    .map((entry) => ({ value: entry[0], matches: entry[1] }))
}

export function toArray<X>(xs: Iterable<X>): X[] {
  return [...xs]
}

export function isEmpty<X>(arr: X[]): boolean {
  return arr.length === 0
}

export function isNonEmpty<X>(arr: X[]): boolean {
  return arr.length > 0
}

export function count<T extends string | number>(arr: T[]): Record<T, number> {
  return arr.reduce((counts, next) => {
    counts[next] ??= 0
    counts[next] += 1
    return counts
  }, {} as Record<T, number>)
}

export function countBy<T, Accessor extends (item: T) => string | number>(
  arr: T[],
  accessor: Accessor,
) {
  return arr.reduce((counts, next) => {
    const key = accessor(next)
    counts[key] ??= 0
    counts[key] += 1
    return counts
  }, {} as Record<string, number>) as Record<ReturnType<Accessor>, number>
}

export function groupBy<T, Accessor extends (item: T) => string | number>(
  arr: T[],
  accessor: Accessor,
) {
  return arr.reduce((counts, next) => {
    const key = accessor(next)
    counts[key] ??= []
    counts[key].push(next)
    return counts
  }, {} as Record<string, T[]>) as Record<ReturnType<Accessor>, T[]>
}

export function findMatches<T extends Record<string, any>>(arr: T[], match: Partial<T>): T[] {
  return arr.filter(matches(match))
}

// TODO: maybe combine some of the xBy into the base x and just have an optional second argument. typing that is a pain though, and the optional second argument would add overhead
