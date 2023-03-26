import { describe, expect, test } from 'vitest';
import {
  count,
  countBy,
  duplicates,
  duplicatesBy,
  findAll,
  findMatches,
  groupBy,
  insertNth,
  isEmpty,
  isNonEmpty,
  removeNth,
  reverse,
  sortByNumber,
  sortByString,
  take,
  takeRight,
  toArray,
  uniques,
  uniquesBy,
  updateNth,
} from './array';

const people = () => [
  { name: 'Matthew', age: 24 },
  { name: 'Matt', age: 35 },
  { name: 'Jo', age: 14 },
  { name: 'Matthew', age: 14 },
];

describe('length checking', () => {
  test('isEmpty detects empties', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('isEmpty returns false for nonEmpty arrays', () => {
    expect(isEmpty([1])).toBe(false);
  });

  // TODO: consider changing this behavior -- maybe compact first
  test('isEmpty returns false for sparse nonEmpty arrays', () => {
    expect(isEmpty([,])).toBe(false);
    expect(isEmpty(new Array(10))).toBe(false);
  });

  test('isNonEmpty returns false for empty arrays', () => {
    expect(isNonEmpty([])).toBe(false);
  });

  test('isNonEmpty returns true for populated arrays', () => {
    expect(isNonEmpty([1])).toBe(true);
  });
});

describe('sorting', () => {
  const expectedSortedByAge = () => [
    { name: 'Jo', age: 14 },
    { name: 'Matthew', age: 14 },
    { name: 'Matthew', age: 24 },
    { name: 'Matt', age: 35 },
  ];

  const expectedSortedByName = () => [
    { name: 'Jo', age: 14 },
    { name: 'Matt', age: 35 },
    { name: 'Matthew', age: 24 },
    { name: 'Matthew', age: 14 },
  ];

  test('ascending sort by name', () => {
    const sortedByName = sortByString(people(), (p) => p.name);
    expect(sortedByName).toEqual(expectedSortedByName());
  });

  test('ascending sort by number', () => {
    const sortedByAge = sortByNumber(people(), (p) => p.age);
    expect(sortedByAge).toEqual(expectedSortedByAge());
  });

  test('descending sort by string', () => {
    const sortedByNameRev = sortByString(people(), (p) => p.name, 'DESC');
    expect(sortedByNameRev.map((p) => p.name)).toEqual(
      expectedSortedByName()
        .reverse()
        .map((p) => p.name),
    );
  });

  test('descending sort by number', () => {
    const sortedByAgeRev = sortByNumber(people(), (p) => p.age, 'DESC');
    expect(sortedByAgeRev.map((p) => p.age)).toEqual(
      expectedSortedByAge()
        .reverse()
        .map((p) => p.age),
    );
  });
});

describe('array manipulation', () => {
  const arr = () => [1, 2, 3, 4, 5, 6, 7];

  test('reversing an array should not affect the input array', () => {
    const reference = arr();
    expect(reverse(reference)).not.toBe(reference);
    expect(reference).toEqual(arr());
  });

  test('reversing an array should actually reverse it', () => {
    expect(reverse(arr())).toEqual(arr().reverse());
  });

  test('taking N items', () => {
    expect(take(arr(), 3)).toEqual([1, 2, 3]);
  });

  test('taking N items from right', () => {
    expect(takeRight(arr(), 2)).toEqual([6, 7]);
  });

  test('taking negative items from right should return empty array', () => {
    expect(takeRight(arr(), -2)).toEqual([]);
  });

  test('taking more items from right than exist should return full array', () => {
    expect(takeRight(arr(), 200)).toEqual(arr());
  });

  test('taking more items than exist should return whole array', () => {
    expect(take(arr(), 20)).toEqual(arr());
  });

  test('taking no items should return an empty array', () => {
    expect(take(arr(), 0)).toEqual([]);
  });

  test('taking negative items should return an empty array', () => {
    expect(take(arr(), -20)).toEqual([]);
  });

  test('removing items', () => {
    expect(removeNth(arr(), 3)).toEqual([1, 2, 3, 5, 6, 7]);
  });

  test('inserting items', () => {
    expect(insertNth(arr(), 3, 100)).toEqual([1, 2, 3, 100, 4, 5, 6, 7]);
  });

  test('inserting items beyond length of array should append to end', () => {
    expect(insertNth(arr(), 100, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 100]);
  });

  test('inserting items at negative indexes should append to beginning', () => {
    expect(insertNth(arr(), -100, 100)).toEqual([100, 1, 2, 3, 4, 5, 6, 7]);
  });

  test('updating item at Nth index', () => {
    expect(updateNth(arr(), 0, (x) => x + 1)).toEqual([2, 2, 3, 4, 5, 6, 7]);
  });

  test('updating out of bounds does not modify array', () => {
    expect(updateNth(arr(), 20, (x) => x + 1)).toEqual(arr());
  });
});

describe('collections: grouping, counting, etc.', () => {
  const arr = () => [{ who: 'Me' }, { who: 'Me' }, { who: 'You' }];
  const accessor = (p) => p.who;

  test('grouping by accessor', () => {
    expect(groupBy(arr(), accessor)).toEqual({
      Me: [{ who: 'Me' }, { who: 'Me' }],
      You: [{ who: 'You' }],
    });
  });

  test('counting primitive values', () => {
    expect(count([1, 2, 1, 1, 1, 2])).toEqual({
      1: 4,
      2: 2,
    });
  });

  test('counting by accessor', () => {
    expect(countBy(arr(), accessor)).toEqual({
      Me: 2,
      You: 1,
    });
  });

  test('finding unique primitives', () => {
    const u = uniques([1, 2, 2, 3, 4, 1, 2]);
    expect(u).toEqual([1, 2, 3, 4]);
  });

  test('finding duplicate primitives', () => {
    const dupes = duplicates([1, 2, 2, 3, 4, 1, 2]);
    expect(dupes).toEqual([1, 2]);
  });

  test('finding uniques among duplicate keys', () => {
    const u = uniquesBy(people(), (p) => p.name);
    expect(u.map((d) => d.name)).toEqual(['Matt', 'Jo', 'Matthew']);
  });

  test('finding objects with duplicate keys', () => {
    const dupes = duplicatesBy(people(), (p) => p.name);
    expect(dupes.map((d) => d.value)).toEqual(['Matthew']);
  });

  test('including raw matches when reporting duplicates', () => {
    const dupes = duplicatesBy(people(), (p) => p.name);
    expect(dupes).toHaveLength(1);
    expect(dupes[0].matches).toEqual([
      { name: 'Matthew', age: 24 },
      { name: 'Matthew', age: 14 },
    ]);
  });

  test('find matches', () => {
    const testArr = [{ who: 'Me' }, { who: 'Me' }, { who: 'You', yes: 'You' }];
    expect(findMatches(testArr, { yes: 'You' })).toEqual([{ who: 'You', yes: 'You' }]);
  });

  test('find all that match accessor', () => {
    const testArr = [{ who: 'Me' }, { who: 'Me' }, { who: 'You', yes: 'You' }];
    expect(findAll(testArr, 'Me', (x) => x.who)).toEqual(testArr.slice(0, 2));
  });

  test('find all should return references to the original objects', () => {
    const testArr = [{ who: 'Me' }, { who: 'Me' }, { who: 'You', yes: 'You' }];
    expect(findAll(testArr, 'Me', (x) => x.who)[0]).toBe(testArr[0]);
  });
});

describe('conversion to array', () => {
  test('set values and map entries both convert to arrays', () => {
    const setArray = ['a', 'b'];
    const mapArray = [['a', 'b']] as const;
    const set = new Set(setArray);
    const map = new Map(mapArray);
    expect(toArray(set)).toEqual(setArray);
    expect(toArray(set.values())).toEqual(setArray);
    expect(toArray(map)).toEqual(mapArray);
    expect(toArray(map.entries())).toEqual(mapArray);
    expect(toArray(map.values())).toEqual(['b']);
    expect(toArray(map.keys())).toEqual(['a']);
  });
});
