import { describe, expect, test } from 'vitest';
import { duplicates, insertNth, removeNth, sortByNumber, sortByString, take } from './array';

describe('sorting, finding duplicates, and finding uniques', () => {
  const people = () => [
    { name: 'Matthew', age: 24 },
    { name: 'Matt', age: 35 },
    { name: 'Jo', age: 14 },
    { name: 'Matthew', age: 14 },
  ];

  const expectedSortedByAge = [
    { name: 'Jo', age: 14 },
    { name: 'Matthew', age: 14 },
    { name: 'Matthew', age: 24 },
    { name: 'Matt', age: 35 },
  ];

  const expectedSortedByName = [
    { name: 'Jo', age: 14 },
    { name: 'Matt', age: 35 },
    { name: 'Matthew', age: 24 },
    { name: 'Matthew', age: 14 },
  ];

  test('ascending sort by name', () => {
    const sortedByName = sortByString(people(), (p) => p.name);
    expect(sortedByName).toEqual(expectedSortedByName);
  });

  test('ascending sort by number', () => {
    const sortedByAge = sortByNumber(people(), (p) => p.age);
    expect(sortedByAge).toEqual(expectedSortedByAge);
  });

  test('descending sort by string', () => {
    const sortedByNameRev = sortByString(people(), (p) => p.name, 'DESC');
    expect(sortedByNameRev.map((p) => p.name)).toEqual(
      expectedSortedByName.reverse().map((p) => p.name),
    );
  });

  test('descending sort by number', () => {
    const sortedByAgeRev = sortByNumber(people(), (p) => p.age, 'DESC');
    expect(sortedByAgeRev.map((p) => p.age)).toEqual(
      expectedSortedByAge.reverse().map((p) => p.age),
    );
  });

  test('finding duplicate primitives', () => {
    const dupes = duplicates([1, 2, 2, 3, 4, 1, 2]);
    expect(dupes.map((d) => d.value)).toEqual([1, 2]);
  });

  test('finding objects with duplicate keys', () => {
    const dupes = duplicates(people(), (p) => p.name);
    expect(dupes.map((d) => d.value)).toEqual(['Matthew']);
  });

  test('including raw matches when reporting duplicates', () => {
    const dupes = duplicates(people(), (p) => p.name);
    expect(dupes).toHaveLength(1);
    expect(dupes[0].matches).toEqual([
      { name: 'Matthew', age: 24 },
      { name: 'Matthew', age: 14 },
    ]);
  });
});

describe('array manipulation', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  test('taking N items', () => {
    expect(take(arr, 3)).toEqual([1, 2, 3]);
  });

  test('taking more items than exist should return whole array', () => {
    expect(take(arr, 20)).toEqual(arr);
  });

  test('taking no items should return an empty array', () => {
    expect(take(arr, 0)).toEqual([]);
  });

  test('taking negative items should return an empty array', () => {
    expect(take(arr, -20)).toEqual([]);
  });

  test('removing items', () => {
    expect(removeNth(arr, 3)).toEqual([1, 2, 3, 5, 6, 7]);
  });

  test('inserting items', () => {
    expect(insertNth(arr, 3, 100)).toEqual([1, 2, 3, 100, 4, 5, 6, 7]);
  });

  test('inserting items beyond length of array should append to end', () => {
    expect(insertNth(arr, 100, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 100]);
  });

  test('inserting items at negative indexes should append to beginning', () => {
    expect(insertNth(arr, -100, 100)).toEqual([100, 1, 2, 3, 4, 5, 6, 7]);
  });
});
