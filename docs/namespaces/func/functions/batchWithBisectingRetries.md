[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [func](../README.md) / batchWithBisectingRetries

# Function: batchWithBisectingRetries()

> **batchWithBisectingRetries**\<`Item`, `R`\>(`fn`, `arr`): `Result`\<`Item`, `R`\>

Do a batch job on an array, or if the job fails, split the array
and retry on each half, recursively. Accumulate the results, as well
as the unprocessed items and the errors they triggered.

This function is useful when there may be some items that are simply
unprocessable.

## Type parameters

• **Item**

• **R**

## Parameters

• **fn**

• **arr**: `Item`[]

## Returns

`Result`\<`Item`, `R`\>

## Source

[src/pure-immutable/function.ts:63](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/function.ts#L63)
