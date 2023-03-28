[utils](../README.md) / [Exports](../modules.md) / object

# Namespace: object

## Table of contents

### Functions

- [createMatcher](object.md#creatematcher)
- [isMatch](object.md#ismatch)
- [omit](object.md#omit)
- [pick](object.md#pick)

## Functions

### createMatcher

▸ **createMatcher**<`T`\>(`comparator`): (`checked`: `T`) => `Boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `comparator` | `Partial`<`T`\> |

#### Returns

`fn`

▸ (`checked`): `Boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `checked` | `T` |

##### Returns

`Boolean`

#### Defined in

[src/pure-immutable/object.ts:12](https://github.com/alpinisme/utils/blob/dc5e134/src/pure-immutable/object.ts#L12)

___

### isMatch

▸ **isMatch**<`T`\>(`checked`, `comparator`): `Boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `checked` | `T` |
| `comparator` | `Partial`<`T`\> |

#### Returns

`Boolean`

#### Defined in

[src/pure-immutable/object.ts:5](https://github.com/alpinisme/utils/blob/dc5e134/src/pure-immutable/object.ts#L5)

___

### omit

▸ **omit**<`T`, `Keys`\>(`keys`, `item`): `Omit`<`T`, `Keys`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |
| `Keys` | extends keyof `T`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Keys` |
| `item` | `T` |

#### Returns

`Omit`<`T`, `Keys`[`number`]\>

#### Defined in

[src/pure-immutable/object.ts:28](https://github.com/alpinisme/utils/blob/dc5e134/src/pure-immutable/object.ts#L28)

___

### pick

▸ **pick**<`T`, `Keys`\>(`keys`, `item`): `Pick`<`T`, `Keys`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |
| `Keys` | extends keyof `T`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Keys` |
| `item` | `T` |

#### Returns

`Pick`<`T`, `Keys`[`number`]\>

#### Defined in

[src/pure-immutable/object.ts:18](https://github.com/alpinisme/utils/blob/dc5e134/src/pure-immutable/object.ts#L18)
