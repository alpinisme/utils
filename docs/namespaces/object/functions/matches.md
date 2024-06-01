[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [object](../README.md) / matches

# Function: matches()

> **matches**\<`T`\>(`comparator`): (`checked`) => `boolean`

Curried version of isMatch, useful in higher order functions,
such as array maps and filters.

## Type parameters

• **T** *extends* `Record`\<`string`, `any`\>

## Parameters

• **comparator**: `Partial`\<`T`\>

## Returns

`Function`

### Parameters

• **checked**: `T`

### Returns

`boolean`

## Source

[src/pure-immutable/object.ts:32](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/object.ts#L32)
