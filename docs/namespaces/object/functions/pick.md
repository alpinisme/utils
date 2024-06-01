[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [object](../README.md) / pick

# Function: pick()

> **pick**\<`T`, `Keys`\>(`keys`, `item`): `Pick`\<`T`, `Keys`\[`number`\]\>

Creates partial shallow copy of `item`, copying only the specified `keys` over.

## Type parameters

• **T** *extends* `Record`\<`string`, `any`\>

• **Keys** *extends* keyof `T`[]

## Parameters

• **keys**: `Keys`

• **item**: `T`

## Returns

`Pick`\<`T`, `Keys`\[`number`\]\>

## Source

[src/pure-immutable/object.ts:41](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/object.ts#L41)
