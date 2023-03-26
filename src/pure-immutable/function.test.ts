import { describe, expect, test } from 'vitest';
import { identity } from './base';
import { wrap } from './function';

describe('wrapping function', () => {
  test('wrapping an incrementing function with identity before and after should end up as +1', () => {
    const inc = (x: number) => x + 1;
    expect(wrap(inc, { before: identity, after: identity })(1)).toBe(2);
  });

  test('wrapping an incrementing function with itself before and after should end up as +3', () => {
    const inc = (x: number) => x + 1;
    expect(wrap(inc, { before: inc, after: inc })(1)).toBe(4);
  });

  test('wrapping should not require both before and after', () => {
    const inc = (x: number) => x + 1;
    expect(wrap(inc, { after: inc })(1)).toBe(3);
  });
});
