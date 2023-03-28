[utils](../README.md) / [Exports](../modules.md) / func

# Namespace: func

## Table of contents

### Functions

- [flipArgs](func.md#flipargs)
- [safeInvoke](func.md#safeinvoke)
- [wrap](func.md#wrap)

## Functions

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

[src/pure-immutable/function.ts:18](https://github.com/alpinisme/utils/blob/5571690/src/pure-immutable/function.ts#L18)

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

[src/pure-immutable/function.ts:1](https://github.com/alpinisme/utils/blob/5571690/src/pure-immutable/function.ts#L1)

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

[src/pure-immutable/function.ts:26](https://github.com/alpinisme/utils/blob/5571690/src/pure-immutable/function.ts#L26)
