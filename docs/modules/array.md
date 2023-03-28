[utils](../README.md) / [Exports](../modules.md) / array

# Namespace: array

## Table of contents

### Functions

- [count](array.md#count)
- [countBy](array.md#countby)
- [duplicates](array.md#duplicates)
- [duplicatesBy](array.md#duplicatesby)
- [findAll](array.md#findall)
- [findMatches](array.md#findmatches)
- [groupBy](array.md#groupby)
- [insertNth](array.md#insertnth)
- [isEmpty](array.md#isempty)
- [isNonEmpty](array.md#isnonempty)
- [removeNth](array.md#removenth)
- [reverse](array.md#reverse)
- [sortByNumber](array.md#sortbynumber)
- [sortByString](array.md#sortbystring)
- [take](array.md#take)
- [takeRight](array.md#takeright)
- [toArray](array.md#toarray)
- [uniques](array.md#uniques)
- [uniquesBy](array.md#uniquesby)
- [updateNth](array.md#updatenth)

## Functions

### count

▸ **count**<`T`\>(`arr`): `Record`<`T`, `number`\>

#### Type parameters

| Name | Type                         |
| :--- | :--------------------------- |
| `T`  | extends `string` \| `number` |

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `arr` | `T`[] |

#### Returns

`Record`<`T`, `number`\>

#### Defined in

[src/pure-immutable/array.ts:110](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L110)

---

### countBy

▸ **countBy**<`T`, `Accessor`\>(`arr`, `accessor`): `Record`<`ReturnType`<`Accessor`\>, `number`\>

#### Type parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `T`        | `T`                                           |
| `Accessor` | extends (`item`: `T`) => `string` \| `number` |

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `arr`      | `T`[]      |
| `accessor` | `Accessor` |

#### Returns

`Record`<`ReturnType`<`Accessor`\>, `number`\>

#### Defined in

[src/pure-immutable/array.ts:118](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L118)

---

### duplicates

▸ **duplicates**<`T`\>(`values`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `values` | `T`[] |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:76](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L76)

---

### duplicatesBy

▸ **duplicatesBy**<`T`, `U`\>(`values`, `accessor`): { `matches`: `T`[] ; `value`: `U` }[]

#### Type parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `T`  | `T`                            |
| `U`  | extends (`item`: `T`) => `any` |

#### Parameters

| Name       | Type  |
| :--------- | :---- |
| `values`   | `T`[] |
| `accessor` | `U`   |

#### Returns

{ `matches`: `T`[] ; `value`: `U` }[]

#### Defined in

[src/pure-immutable/array.ts:80](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L80)

---

### findAll

▸ **findAll**<`T`, `U`\>(`haystack`, `needle`, `accessor`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |
| `U`  |

#### Parameters

| Name       | Type                 |
| :--------- | :------------------- |
| `haystack` | `T`[]                |
| `needle`   | `U`                  |
| `accessor` | (`item`: `T`) => `U` |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:72](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L72)

---

### findMatches

▸ **findMatches**<`T`\>(`arr`, `match`): `T`[]

#### Type parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `T`  | extends `Record`<`string`, `any`\> |

#### Parameters

| Name    | Type            |
| :------ | :-------------- |
| `arr`   | `T`[]           |
| `match` | `Partial`<`T`\> |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:142](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L142)

---

### groupBy

▸ **groupBy**<`T`, `Accessor`\>(`arr`, `accessor`): `Record`<`ReturnType`<`Accessor`\>, `T`[]\>

#### Type parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `T`        | `T`                                           |
| `Accessor` | extends (`item`: `T`) => `string` \| `number` |

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `arr`      | `T`[]      |
| `accessor` | `Accessor` |

#### Returns

`Record`<`ReturnType`<`Accessor`\>, `T`[]\>

#### Defined in

[src/pure-immutable/array.ts:130](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L130)

---

### insertNth

▸ **insertNth**<`T`\>(`arr`, `index`, `item`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `arr`   | `T`[]    |
| `index` | `number` |
| `item`  | `T`      |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:54](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L54)

---

### isEmpty

▸ **isEmpty**<`X`\>(`arr`): `boolean`

#### Type parameters

| Name |
| :--- |
| `X`  |

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `arr` | `X`[] |

#### Returns

`boolean`

#### Defined in

[src/pure-immutable/array.ts:102](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L102)

---

### isNonEmpty

▸ **isNonEmpty**<`X`\>(`arr`): `boolean`

#### Type parameters

| Name |
| :--- |
| `X`  |

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `arr` | `X`[] |

#### Returns

`boolean`

#### Defined in

[src/pure-immutable/array.ts:106](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L106)

---

### removeNth

▸ **removeNth**<`T`\>(`arr`, `index`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `arr`   | `T`[]    |
| `index` | `number` |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:68](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L68)

---

### reverse

▸ **reverse**<`T`\>(`arr`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `arr` | `T`[] |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:38](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L38)

---

### sortByNumber

▸ **sortByNumber**<`T`\>(`arr`, `accessor`, `order?`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type                      | Default value |
| :--------- | :------------------------ | :------------ |
| `arr`      | `T`[]                     | `undefined`   |
| `accessor` | (`item`: `T`) => `number` | `undefined`   |
| `order`    | `"ASC"` \| `"DESC"`       | `'ASC'`       |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:28](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L28)

---

### sortByString

▸ **sortByString**<`T`\>(`arr`, `accessor`, `order?`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type                      | Default value |
| :--------- | :------------------------ | :------------ |
| `arr`      | `T`[]                     | `undefined`   |
| `accessor` | (`item`: `T`) => `string` | `undefined`   |
| `order`    | `"ASC"` \| `"DESC"`       | `'ASC'`       |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:18](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L18)

---

### take

▸ **take**<`T`\>(`arr`, `count`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `arr`   | `T`[]    |
| `count` | `number` |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:42](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L42)

---

### takeRight

▸ **takeRight**<`T`\>(`arr`, `count`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `arr`   | `T`[]    |
| `count` | `number` |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:47](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L47)

---

### toArray

▸ **toArray**<`X`\>(`xs`): `X`[]

#### Type parameters

| Name |
| :--- |
| `X`  |

#### Parameters

| Name | Type             |
| :--- | :--------------- |
| `xs` | `Iterable`<`X`\> |

#### Returns

`X`[]

#### Defined in

[src/pure-immutable/array.ts:98](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L98)

---

### uniques

▸ **uniques**<`T`\>(`values`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `values` | `T`[] |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:13](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L13)

---

### uniquesBy

▸ **uniquesBy**<`T`, `Key`\>(`arr`, `accessor`): `T`[]

take first of each unique value, given the accessor function

#### Type parameters

| Name  |
| :---- |
| `T`   |
| `Key` |

#### Parameters

| Name       | Type                   |
| :--------- | :--------------------- |
| `arr`      | `T`[]                  |
| `accessor` | (`item`: `T`) => `Key` |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:7](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L7)

---

### updateNth

▸ **updateNth**<`T`\>(`arr`, `index`, `updater`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type                |
| :-------- | :------------------ |
| `arr`     | `T`[]               |
| `index`   | `number`            |
| `updater` | (`old`: `T`) => `T` |

#### Returns

`T`[]

#### Defined in

[src/pure-immutable/array.ts:60](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/array.ts#L60)
