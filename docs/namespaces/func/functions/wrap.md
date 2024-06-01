[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [func](../README.md) / wrap

# Function: wrap()

> **wrap**\<`T`, `U`\>(`fn`, `wrapper`): (`arg`) => `U`

helper to transform inputs and outputs to a function (without changing their types).
 This is particularly useful for adding logging or other imputer logic around a pure core

## Type parameters

• **T**

• **U**

## Parameters

• **fn**

• **wrapper**

• **wrapper.after?**

• **wrapper.before?**

## Returns

`Function`

### Parameters

• **arg**: `T`

### Returns

`U`

## Source

[src/pure-immutable/function.ts:26](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/function.ts#L26)
