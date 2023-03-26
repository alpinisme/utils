/**
 * Convert string to PASCAL_CASE,
 * collapsing non-alphameric sequences with a single underscore
 *
 * @example toPascalCase("My friend\n the     1st sharK") // -> MY_FRIEND_THE_1ST_SHARK
 */
export function toPascalCase(str: string) {
  return str.replaceAll(/[^\w]+/g, '_').toUpperCase();
}

/**
 * Convert string to PASCAL_CASE,
 * collapsing non-alphameric sequences with a single underscore
 *
 * @example toPascalCase("My friend\n the     1st sharK") // -> my_friend_the_1st_shark
 */
export function toSnakeCase(str: string) {
  return str.replaceAll(/[^\w]+/g, '_').toLowerCase();
}

/**
 * Capitalize each word (e.g., 'this string' -> 'This String')
 *
 */
export function capitalize<T extends string>(str: T): Capitalize<T> {
  return str
    .split(/\s/)
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ') as Capitalize<T>;
}
