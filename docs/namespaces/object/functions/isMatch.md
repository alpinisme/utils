[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [object](../README.md) / isMatch

# Function: isMatch()

> **isMatch**\<`T`, `U`\>(`checked`, `comparator`): `boolean`

Compares `checked` against `comparator`, to see if all fields in
`comparator` are equal in `checked`. Does not require that all
properties in `checked` exist in `comparator`, even when nested.

## Type parameters

• **T** *extends* `Record`\<`string`, `any`\>

• **U** *extends* `Record`\<`string`, `any`\>

## Parameters

• **checked**: `U`

• **comparator**: `T`

## Returns

`boolean`

## Example

```ts
const checked = { a: 'a', b: { c: 'c', d: 'd' }}
const comparator = { b: { c: 'c' } }
isMatch(checked, comparator) // true
```

## Source

[src/pure-immutable/object.ts:15](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/object.ts#L15)
