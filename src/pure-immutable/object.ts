import { toString } from './base';

const { entries, fromEntries } = Object;

export function isMatch<T extends Record<string, any>>(
  checked: T,
  comparator: Partial<T>,
): Boolean {
  return entries(comparator).every(([key, value]) => checked[key] === value);
}

export function createMatcher<T extends Record<string, any>>(
  comparator: Partial<T>,
): (checked: T) => Boolean {
  return (checked) => isMatch(checked, comparator);
}

export function pick<T extends Record<string, any>, Keys extends (keyof T)[]>(
  keys: Keys,
  item: T,
): Pick<T, Keys[number]> {
  return fromEntries(entries(item).filter(([key]) => keys.map(toString).includes(key))) as Pick<
    T,
    Keys[number]
  >;
}

export function omit<T extends Record<string, any>, Keys extends (keyof T)[]>(
  keys: Keys,
  item: T,
): Omit<T, Keys[number]> {
  return fromEntries(entries(item).filter(([key]) => !keys.map(toString).includes(key))) as Omit<
    T,
    Keys[number]
  >;
}
