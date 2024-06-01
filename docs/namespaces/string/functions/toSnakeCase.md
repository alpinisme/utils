[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [string](../README.md) / toSnakeCase

# Function: toSnakeCase()

> **toSnakeCase**(`str`): `string`

Convert string to PASCAL_CASE,
collapsing non-alphameric sequences with a single underscore

## Parameters

• **str**: `string`

## Returns

`string`

## Example

```ts
toPascalCase("My friend\n the     1st sharK") // -> my_friend_the_1st_shark
```

## Source

[src/pure-immutable/string.ts:17](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/string.ts#L17)
