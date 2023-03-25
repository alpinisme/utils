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
