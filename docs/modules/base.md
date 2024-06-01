[utils](../README.md) / [Exports](../modules.md) / base

# Namespace: base

## Table of contents

### Functions

- [identity](base.md#identity)
- [isError](base.md#iserror)
- [isNonNull](base.md#isnonnull)
- [isNull](base.md#isnull)
- [toString](base.md#tostring)

## Functions

### identity

▸ **identity**<`T`\>(`item`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`T`

#### Defined in

[src/pure-immutable/base.ts:1](https://github.com/alpinisme/utils/blob/b18b845/src/pure-immutable/base.ts#L1)

___

### isError

▸ **isError**(`err`): err is Error

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `unknown` |

#### Returns

err is Error

#### Defined in

[src/pure-immutable/base.ts:5](https://github.com/alpinisme/utils/blob/b18b845/src/pure-immutable/base.ts#L5)

___

### isNonNull

▸ **isNonNull**<`T`\>(`val`): val is T

type guard to narrow out null and undefined values -- useful for array filtering

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `undefined` \| ``null`` \| `T` |

#### Returns

val is T

#### Defined in

[src/pure-immutable/base.ts:16](https://github.com/alpinisme/utils/blob/b18b845/src/pure-immutable/base.ts#L16)

___

### isNull

▸ **isNull**<`T`\>(`val`): val is undefined \| null

type guard to check if null or undefined

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `undefined` \| ``null`` \| `T` |

#### Returns

val is undefined \| null

#### Defined in

[src/pure-immutable/base.ts:23](https://github.com/alpinisme/utils/blob/b18b845/src/pure-immutable/base.ts#L23)

___

### toString

▸ **toString**<`T`\>(`val`): `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `T` |

#### Returns

`string`

#### Defined in

[src/pure-immutable/base.ts:9](https://github.com/alpinisme/utils/blob/b18b845/src/pure-immutable/base.ts#L9)
