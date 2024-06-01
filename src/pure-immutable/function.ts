export function safeInvoke<Fn extends (...args: any[]) => any>(
  fn: Fn,
  ...args: Parameters<Fn>
): { success: true; result: ReturnType<Fn> } | { success: false; error: unknown } {
  try {
    return {
      success: true,
      result: fn(...args),
    }
  } catch (e) {
    return {
      success: false,
      error: e,
    }
  }
}

export function flipArgs<A, B, C>(fn: (a: A, b: B) => C) {
  return (b: B, a: A) => fn(a, b)
}

/**
 *  helper to transform inputs and outputs to a function (without changing their types).
 *  This is particularly useful for adding logging or other imputer logic around a pure core
 */
export function wrap<T, U>(
  fn: (arg: T) => U,
  wrapper: {
    before?: (arg: T) => T
    after?: (result: U) => U
  },
): (arg: T) => U {
  return (arg) => {
    let input = arg

    if (wrapper.before) {
      input = wrapper.before(arg)
    }

    if (wrapper.after) {
      return wrapper.after(fn(input))
    }

    return fn(input)
  }
}

// TODO: partial application would be nice

type Result<Item, R> = {
  results: R[]
  failures: { error: unknown; item: Item }[]
}

/**
 * Do a batch job on an array, or if the job fails, split the array
 * and retry on each half, recursively. Accumulate the results, as well
 * as the unprocessed items and the errors they triggered.
 *
 * This function is useful when there may be some items that are simply
 * unprocessable.
 */
export function batchWithBisectingRetries<Item, R>(
  fn: (arr: Item[]) => R,
  arr: Item[],
): Result<Item, R> {
  const result: Result<Item, R> = {
    results: [],
    failures: [],
  }

  function helper(batch: Item[]) {
    if (batch.length === 0) {
      return
    }

    try {
      result.results.push(fn(batch))
    } catch (error) {
      if (batch.length === 1) {
        result.failures.push({ error, item: batch[0] })
        return
      }
      const mid = Math.floor(batch.length / 2)
      helper(batch.slice(0, mid))
      helper(batch.slice(mid))
    }
  }

  helper(arr)

  return result
}

/**
 * Asynchronous version of `batchWithBisectingRetries`
 */
export async function asyncBatchWithBisectingRetries<Item, R>(
  fn: (arr: Item[]) => Promise<R>,
  arr: Item[],
): Promise<Result<Item, R>> {
  const result: Result<Item, R> = {
    results: [],
    failures: [],
  }

  async function helper(batch: Item[]) {
    if (batch.length === 0) {
      return
    }

    try {
      result.results.push(await fn(batch))
    } catch (error) {
      if (batch.length === 1) {
        result.failures.push({ error, item: batch[0] })
        return
      }
      const mid = Math.floor(batch.length / 2)
      await helper(batch.slice(0, mid))
      await helper(batch.slice(mid))
    }
  }

  await helper(arr)

  return result
}
