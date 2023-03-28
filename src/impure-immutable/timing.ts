export function milliseconds(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
