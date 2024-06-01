[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [object](../README.md) / has

# Function: has()

> **has**\<`Key`, `T`\>(`key`, `obj`): `obj is RequireKey<SubtypesWithKey<T, Key>, Key>`

check if obj has a key with a non-null value

## Type parameters

• **Key** *extends* `string` \| `number` \| `symbol`

• **T** *extends* `object`

## Parameters

• **key**: `Key`

• **obj**: `Nullable`\<`T`\>

## Returns

`obj is RequireKey<SubtypesWithKey<T, Key>, Key>`

## Source

[src/pure-immutable/object.ts:93](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/object.ts#L93)
