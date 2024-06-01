[utils](../README.md) / [Exports](../modules.md) / func

# Namespace: func

## Table of contents

### Functions

- [asyncBatchWithBisectingRetries](func.md#asyncbatchwithbisectingretries)
- [batchWithBisectingRetries](func.md#batchwithbisectingretries)
- [flipArgs](func.md#flipargs)
- [safeInvoke](func.md#safeinvoke)
- [wrap](func.md#wrap)

## Functions

### asyncBatchWithBisectingRetries

▸ **asyncBatchWithBisectingRetries**<`Item`, `R`\>(`fn`, `arr`): `Promise`<`Result`<`Item`, `R`\>\>

Asynchronous version of `batchWithBisectingRetries`

#### Type parameters

| Name |
| :------ |
| `Item` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arr`: `Item`[]) => `Promise`<`R`\> |
| `arr` | `Item`[] |

#### Returns

`Promise`<`Result`<`Item`, `R`\>\>

#### Defined in

[src/pure-immutable/function.ts:98](https://github.com/alpinisme/utils/blob/b18b845/src/pure-immutable/function.ts#L98)

___

### batchWithBisectingRetries

▸ **batchWithBisectingRetries**<`Item`, `R`\>(`fn`, `arr`): `Result`<`Item`, `R`\>

Do a batch job on an array, or if the job fails, split the array
and retry on each half, recursively. Accumulate the results, as well
as the unprocessed items and the errors they triggered.

This function is useful when there may be some items that are simply
unprocessable.

#### Type parameters

| Name |
| :------ |
| `Item` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arr`: `Item`[]) => `R` |
| `arr` | `Item`[] |

#### Returns

`Result`<`Item`, `R`\>

#### Defined in

[src/pure-immutable/function.ts:63](https://github.com/alpinisme/utils/blob/b18b845/src/pure-immutable/function.ts#L63)

___

### flipArgs

▸ **flipArgs**<`A`, `B`, `C`\>(`fn`): (`b`: `B`, `a`: `A`) => `C`

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`a`: `A`, `b`: `B`) => `C` |

#### Returns

`fn`

▸ (`b`, `a`): `C`

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `B` |
| `a` | `A` |

##### Returns

`C`

#### Defined in

[src/pure-immutable/function.ts:18](https://github.com/alpinisme/utils/blob/b18b845/src/pure-immutable/function.ts#L18)

___

### safeInvoke

▸ **safeInvoke**<`Fn`\>(`fn`, `...args`): { `result`: `ReturnType`<`Fn`\> ; `success`: ``true``  } \| { `error`: `unknown` ; `success`: ``false``  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fn` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `Fn` |
| `...args` | `Parameters`<`Fn`\> |

#### Returns

{ `result`: `ReturnType`<`Fn`\> ; `success`: ``true``  } \| { `error`: `unknown` ; `success`: ``false``  }

#### Defined in

[src/pure-immutable/function.ts:1](https://github.com/alpinisme/utils/blob/b18b845/src/pure-immutable/function.ts#L1)

___

### wrap

▸ **wrap**<`T`, `U`\>(`fn`, `wrapper`): (`arg`: `T`) => `U`

helper to transform inputs and outputs to a function (without changing their types).
 This is particularly useful for adding logging or other imputer logic around a pure core

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`arg`: `T`) => `U` |
| `wrapper` | `Object` |
| `wrapper.after?` | (`result`: `U`) => `U` |
| `wrapper.before?` | (`arg`: `T`) => `T` |

#### Returns

`fn`

▸ (`arg`): `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `T` |

##### Returns

`U`

#### Defined in

[src/pure-immutable/function.ts:26](https://github.com/alpinisme/utils/blob/b18b845/src/pure-immutable/function.ts#L26)
