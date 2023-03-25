import { identity } from './base';

/**
 * take first of each unique value, given the accessor function
 */
export function uniqueBy<T, Key>(arr: T[], accessor: (item: T) => Key) {
  const map = arr.reduceRight((map, next) => map.set(accessor(next), next), new Map<Key, T>());
  return [...map.values()].reverse();
}

export function sortByString<T>(
  arr: T[],
  accessor: (item: T) => string,
  order: 'ASC' | 'DESC' = 'ASC',
) {
  return order === 'ASC'
    ? arr.slice().sort((a, b) => accessor(a).localeCompare(accessor(b)))
    : arr.slice().sort((a, b) => accessor(b).localeCompare(accessor(a)));
}

export function sortByNumber<T>(
  arr: T[],
  accessor: (item: T) => number,
  order: 'ASC' | 'DESC' = 'ASC',
) {
  return order === 'ASC'
    ? arr.slice().sort((a, b) => accessor(a) - accessor(b))
    : arr.slice().sort((a, b) => accessor(b) - accessor(a));
}

export function reverse<T>(arr: T[]) {
  return arr.slice().reverse();
}

export function take<T>(arr: T[], count: number) {
  if (count < 0) return [];
  return arr.slice(0, count);
}

export function takeRight<T>(arr: T[], count: number) {
  const length = arr.length;
  if (count > length) return arr;
  if (count <= 0) return [];
  return arr.slice(length - count);
}

export function insertNth<T>(arr: T[], index: number, item: T) {
  return take(arr, index)
    .concat([item])
    .concat(takeRight(arr, arr.length - index));
}

export function updateNth<T>(arr: T[], index: number, updater: (old: T) => T) {
  if (index < -arr.length || index > arr.length) return arr;
  const updatedValue = updater(arr.at(index) as T); // bounds checks above guarantee this
  return take(arr, index)
    .concat([updatedValue])
    .concat(takeRight(arr, arr.length - (index + 1)));
}

export function removeNth<T>(arr: T[], index: number) {
  return take(arr, index).concat(takeRight(arr, arr.length - (index + 1)));
}

export function findAll<Item, N>(haystack: Item[], needle: N, accessor: (item: Item) => N) {
  return haystack.filter((item) => accessor(item) === needle);
}

export function duplicates<T>(values: T[], accessor: (item: T) => any = identity) {
  const map = new Map<any, T[]>();
  values.forEach((val) => {
    const key = accessor(val);
    if (map.has(key)) {
      map.get(key)?.push(val);
    } else {
      map.set(key, [val]);
    }
  });
  return [...map.entries()]
    .filter((entry) => entry[1].length > 1)
    .map((entry) => ({ value: entry[0], matches: entry[1] }));
}

// TODO: add groupBy that takes an accessor and uses that as an object key (better: that takes a T -> Keyable and creates Record<Keyable, T>)
// TODO: better pick that takes  T and an array of `keyof T` and returns an object with just those keys (may not be useful with zod)
// TODO: add countBy (using logic of groupBy above)
// TODO: for that matter, even unique could use a `(val: T,accessor: (t: T) => U): number` signature (it doesn't even need Keyables, just things that can be equality checked)
