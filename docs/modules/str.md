[utils](../README.md) / [Exports](../modules.md) / str

# Namespace: str

## Table of contents

### Functions

- [capitalize](str.md#capitalize)
- [toPascalCase](str.md#topascalcase)
- [toSnakeCase](str.md#tosnakecase)

## Functions

### capitalize

▸ **capitalize**(`str`): `string`

Capitalize each word (e.g., 'this string' -> 'This String')

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[pure-immutable/string.ts:25](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/string.ts#L25)

___

### toPascalCase

▸ **toPascalCase**(`str`): `string`

Convert string to PASCAL_CASE,
collapsing non-alphameric sequences with a single underscore

**`Example`**

```ts
toPascalCase("My friend\n the     1st sharK") // -> MY_FRIEND_THE_1ST_SHARK
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[pure-immutable/string.ts:7](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/string.ts#L7)

___

### toSnakeCase

▸ **toSnakeCase**(`str`): `string`

Convert string to PASCAL_CASE,
collapsing non-alphameric sequences with a single underscore

**`Example`**

```ts
toPascalCase("My friend\n the     1st sharK") // -> my_friend_the_1st_shark
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[pure-immutable/string.ts:17](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/string.ts#L17)
