[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [object](../README.md) / curriedHas

# Function: curriedHas()

> **curriedHas**\<`Key`, `T`\>(`key`): (`obj`) => `obj is RequireKey<SubtypesWithKey<T, Key>, Key>`

curried version of `has`

## Type parameters

• **Key** *extends* `string` \| `number` \| `symbol`

• **T** *extends* `object`

## Parameters

• **key**: `Key`

## Returns

`Function`

### Parameters

• **obj**: `Nullable`\<`T`\>

### Returns

`obj is RequireKey<SubtypesWithKey<T, Key>, Key>`

## Source

[src/pure-immutable/object.ts:107](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/object.ts#L107)
