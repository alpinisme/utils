[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [object](../README.md) / omit

# Function: omit()

> **omit**\<`T`, `Keys`\>(`keys`, `item`): `Omit`\<`T`, `Keys`\[`number`\]\>

Creates partial shallow copy of `item`, omitting the specified `keys` when copying.

## Type parameters

• **T** *extends* `Record`\<`string`, `any`\>

• **Keys** *extends* keyof `T`[]

## Parameters

• **keys**: `Keys`

• **item**: `T`

## Returns

`Omit`\<`T`, `Keys`\[`number`\]\>

## Source

[src/pure-immutable/object.ts:53](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/object.ts#L53)
