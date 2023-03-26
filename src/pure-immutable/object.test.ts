import { describe, expect, test } from 'vitest';
import { omit, pick } from './object';

describe('picking and omitting', () => {
  test('pick includes specified keys and excludes others', () => {
    expect(pick(['hello'], { test: 1, hello: 'there' })).toEqual({ hello: 'there' });
  });

  test('omit excludes specified keys and includes others', () => {
    expect(omit(['hello'], { test: 1, hello: 'there' })).toEqual({ test: 1 });
  });

  test('omit gives empty object if all keys listed', () => {
    expect(omit(['hello', 'test'], { test: 1, hello: 'there' })).toEqual({});
  });

  test('omit works with number keys too', () => {
    expect(omit(['hello', 0], { 0: 1, hello: 'there' })).toEqual({});
  });
});
