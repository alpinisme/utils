export function safeInvoke<Fn extends (...args: any[]) => any>(
  fn: Fn,
  ...args: Parameters<Fn>
): { success: true; result: ReturnType<Fn> } | { success: false; error: unknown } {
  try {
    return {
      success: true,
      result: fn(args),
    };
  } catch (e) {
    return {
      success: false,
      error: e,
    };
  }
}

export function flipArgs<A, B, C>(fn: (a: A, b: B) => C) {
  return (b: B, a: A) => fn(a, b);
}

/**
 *  helper to transform inputs and outputs to a function (without changing their types).
 *  This is particularly useful for adding logging or other imputer logic around a pure core
 */
export function wrap<T, U>(
  fn: (arg: T) => U,
  wrapper: {
    before?: (arg: T) => T;
    after?: (result: U) => U;
  },
): (arg: T) => U {
  return (arg) => {
    let input = arg;

    if (wrapper.before) {
      input = wrapper.before(arg);
    }

    if (wrapper.after) {
      return wrapper.after(fn(input));
    }

    return fn(input);
  };
}
