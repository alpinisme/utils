export function identity<T>(item: T) {
  return item
}

export function isError(err: unknown): err is Error {
  return err instanceof Error
}

export function toString<T extends { toString: () => string }>(val: T): string {
  return val.toString()
}
