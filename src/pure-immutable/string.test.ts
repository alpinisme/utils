import { describe, expect, it } from 'vitest';
import { capitalize } from './string';

describe('capitalize', () => {
  it('should capitalize the first letter of a word but not affect later letters', () => {
    expect(capitalize('testInG')).toBe('TestInG');
  });

  it('should capitalize all words in a sentence', () => {
    expect(capitalize('my Name is matthew.')).toBe('My Name Is Matthew.');
  });

  it('should gracefully handle empty strings and numbers', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize('2')).toBe('2');
  });
});
