[utils](../README.md) / [Exports](../modules.md) / object

# Namespace: object

## Table of contents

### Type Aliases

- [AllKeys](object.md#allkeys)
- [Keys](object.md#keys)
- [RequireKey](object.md#requirekey)

### Functions

- [curriedHas](object.md#curriedhas)
- [entries](object.md#entries)
- [filterMapKeys](object.md#filtermapkeys)
- [fromEntries](object.md#fromentries)
- [has](object.md#has)
- [isMatch](object.md#ismatch)
- [keys](object.md#keys-1)
- [mapKeys](object.md#mapkeys)
- [matches](object.md#matches)
- [omit](object.md#omit)
- [pick](object.md#pick)
- [remapKeys](object.md#remapkeys)

## Type Aliases

### AllKeys

Ƭ **AllKeys**<`T`\>: `T` extends `unknown` ? [`Keys`](object.md#keys)<`T`\> : `never`

extracts all available keys from a union type, not just shared keys

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/pure-immutable/object.ts:71](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/object.ts#L71)

___

### Keys

Ƭ **Keys**<`T`\>: keyof `T`

extracts all keys that are guaranteed to be in T (i.e., if union type, only shared keys)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/pure-immutable/object.ts:66](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/object.ts#L66)

___

### RequireKey

Ƭ **RequireKey**<`Obj`, `Key`\>: `Obj` & { [P in Key]-?: Obj[P] }

turn optional field into required

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Obj` | `Obj` |
| `Key` | extends keyof `Obj` |

#### Defined in

[src/pure-immutable/object.ts:76](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/object.ts#L76)

## Functions

### curriedHas

▸ **curriedHas**<`Key`, `T`\>(`key`): (`obj`: `Nullable`<`T`\>) => obj is RequireKey<SubtypesWithKey<T, Key\>, Key\>

curried version of `has`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` \| `number` \| `symbol` |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |

#### Returns

`fn`

▸ (`obj`): obj is RequireKey<SubtypesWithKey<T, Key\>, Key\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Nullable`<`T`\> |

##### Returns

obj is RequireKey<SubtypesWithKey<T, Key\>, Key\>

#### Defined in

[src/pure-immutable/object.ts:107](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/object.ts#L107)

___

### entries

▸ **entries**<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | { `[s: string]`: `T`;  } \| `ArrayLike`<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `T`][]

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es2017.object.d.ts:36

▸ **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `any`][]

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es2017.object.d.ts:42

___

### filterMapKeys

▸ **filterMapKeys**<`T`\>(`obj`, `mapFn`): `Record`<`string`, `T`[keyof `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `mapFn` | (`key`: keyof `T`) => `undefined` \| `string` |

#### Returns

`Record`<`string`, `T`[keyof `T`]\>

#### Defined in

[src/pure-immutable/object.ts:120](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/object.ts#L120)

___

### fromEntries

▸ **fromEntries**<`T`\>(`entries`): `Object`

Returns an object created by key-value entries for properties and methods

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`<readonly [`PropertyKey`, `T`]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`Object`

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es2019.object.d.ts:26

▸ **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`<readonly `any`[]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`any`

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es2019.object.d.ts:32

___

### has

▸ **has**<`Key`, `T`\>(`key`, `obj`): obj is RequireKey<SubtypesWithKey<T, Key\>, Key\>

check if obj has a key with a non-null value

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` \| `number` \| `symbol` |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `obj` | `Nullable`<`T`\> |

#### Returns

obj is RequireKey<SubtypesWithKey<T, Key\>, Key\>

#### Defined in

[src/pure-immutable/object.ts:93](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/object.ts#L93)

___

### isMatch

▸ **isMatch**<`T`, `U`\>(`checked`, `comparator`): `boolean`

Compares `checked` against `comparator`, to see if all fields in
`comparator` are equal in `checked`. Does not require that all
properties in `checked` exist in `comparator`, even when nested.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |
| `U` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `checked` | `U` |
| `comparator` | `T` |

#### Returns

`boolean`

**`Example`**

```ts
const checked = { a: 'a', b: { c: 'c', d: 'd' }}
const comparator = { b: { c: 'c' } }
isMatch(checked, comparator) // true
```

#### Defined in

[src/pure-immutable/object.ts:15](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/object.ts#L15)

___

### keys

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es5.d.ts:264

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### mapKeys

▸ **mapKeys**<`T`\>(`obj`, `mapFn`): `Record`<`string`, `T`[keyof `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `mapFn` | (`key`: keyof `T`) => `string` |

#### Returns

`Record`<`string`, `T`[keyof `T`]\>

#### Defined in

[src/pure-immutable/object.ts:112](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/object.ts#L112)

___

### matches

▸ **matches**<`T`\>(`comparator`): (`checked`: `T`) => `boolean`

Curried version of isMatch, useful in higher order functions,
such as array maps and filters.

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

▸ (`checked`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `checked` | `T` |

##### Returns

`boolean`

#### Defined in

[src/pure-immutable/object.ts:32](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/object.ts#L32)

___

### omit

▸ **omit**<`T`, `Keys`\>(`keys`, `item`): `Omit`<`T`, `Keys`[`number`]\>

Creates partial shallow copy of `item`, omitting the specified `keys` when copying.

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

[src/pure-immutable/object.ts:53](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/object.ts#L53)

___

### pick

▸ **pick**<`T`, `Keys`\>(`keys`, `item`): `Pick`<`T`, `Keys`[`number`]\>

Creates partial shallow copy of `item`, copying only the specified `keys` over.

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

[src/pure-immutable/object.ts:41](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/object.ts#L41)

___

### remapKeys

▸ **remapKeys**<`T`, `M`\>(`obj`, `keyMap`): { [K in string]: K extends keyof T ? T[K] : never }

Given a keyMap object that maps old keys to new keys, copy an object over
using the new keys and dropping any properties that are unmapped.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `M` | extends `Record`<`string`, `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `keyMap` | `M` |

#### Returns

{ [K in string]: K extends keyof T ? T[K] : never }

**`Example`**

```ts
const obj = {a: 1, b: 2}
const keyMap = {a: 'alpha'}
remapKeys(obj, keyMap) // {'alpha': 1}
```

#### Defined in

[src/pure-immutable/object.ts:141](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/object.ts#L141)
