export function identity<T>(item: T) {
  return item
}

export function isError(err: unknown): err is Error {
  return err instanceof Error
}

export function toString<T extends { toString: () => string }>(val: T): string {
  return val.toString()
}

/**
 * type guard to narrow out null and undefined values -- useful for array filtering
 */
export const isNonNull = <T>(val: T | undefined | null): val is T => {
  return val != null
}

/**
 * type guard to check if null or undefined
 */
export const isNull = <T>(
  val: T | undefined | null
): val is undefined | null => {
  return val == null
}