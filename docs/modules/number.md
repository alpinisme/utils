[utils](../README.md) / [Exports](../modules.md) / number

# Namespace: number

## Table of contents

### Functions

- [avg](number.md#avg)
- [avgBy](number.md#avgby)
- [clamp](number.md#clamp)
- [deviations](number.md#deviations)
- [getBounds](number.md#getbounds)
- [getBoundsBy](number.md#getboundsby)
- [getRange](number.md#getrange)
- [inRange](number.md#inrange)
- [max](number.md#max)
- [maxBy](number.md#maxby)
- [min](number.md#min)
- [minBy](number.md#minby)
- [numsFromTo](number.md#numsfromto)
- [numsTo](number.md#numsto)
- [pctDev](number.md#pctdev)
- [stdDev](number.md#stddev)
- [sum](number.md#sum)
- [sumBy](number.md#sumby)
- [variance](number.md#variance)

## Functions

### avg

▸ **avg**(`arr`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `number`[] |

#### Returns

`number`

#### Defined in

[src/pure-immutable/number.ts:69](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L69)

___

### avgBy

▸ **avgBy**<`T`\>(`arr`, `accessor`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `accessor` | (`item`: `T`) => `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/number.ts:65](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L65)

___

### clamp

▸ **clamp**(`value`, `bounds`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `bounds` | `Object` |
| `bounds.max` | `number` |
| `bounds.min` | `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/number.ts:99](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L99)

___

### deviations

▸ **deviations**(`values`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`number`[]

#### Defined in

[src/pure-immutable/number.ts:113](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L113)

___

### getBounds

▸ **getBounds**(`values`): `Object`

Finds the min and max of the given array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `max` | `number` |
| `min` | `number` |

#### Defined in

[src/pure-immutable/number.ts:13](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L13)

___

### getBoundsBy

▸ **getBoundsBy**<`T`\>(`values`, `accessor`): `Object`

Finds the min and max of the given array, using the accessor.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `T`[] |
| `accessor` | (`item`: `T`) => `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `max` | `number` |
| `min` | `number` |

#### Defined in

[src/pure-immutable/number.ts:28](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L28)

___

### getRange

▸ **getRange**(`values`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`number`

#### Defined in

[src/pure-immutable/number.ts:94](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L94)

___

### inRange

▸ **inRange**(`value`, `range`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `range` | `Object` |
| `range.max` | `number` |
| `range.min` | `number` |

#### Returns

`boolean`

#### Defined in

[src/pure-immutable/number.ts:3](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L3)

___

### max

▸ **max**(`arr`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `number`[] |

#### Returns

`number`

#### Defined in

[src/pure-immutable/number.ts:90](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L90)

___

### maxBy

▸ **maxBy**<`T`\>(`arr`, `accessor`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `accessor` | (`n`: `T`) => `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/number.ts:86](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L86)

___

### min

▸ **min**(`arr`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `number`[] |

#### Returns

`number`

#### Defined in

[src/pure-immutable/number.ts:82](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L82)

___

### minBy

▸ **minBy**<`T`\>(`arr`, `accessor`): `number`

Gives the minimum value, given the accessor (not the object that
contains the value, since there may be more than one).
To access the matching objects themselves, use findMatches

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `accessor` | (`n`: `T`) => `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/number.ts:78](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L78)

___

### numsFromTo

▸ **numsFromTo**(`lowerBound`, `upperBound`, `step?`): `number`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `lowerBound` | `number` | `undefined` |
| `upperBound` | `number` | `undefined` |
| `step` | `number` | `1` |

#### Returns

`number`[]

#### Defined in

[src/pure-immutable/number.ts:43](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L43)

___

### numsTo

▸ **numsTo**(`upperBound`, `step?`): `number`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `upperBound` | `number` | `undefined` |
| `step` | `number` | `1` |

#### Returns

`number`[]

#### Defined in

[src/pure-immutable/number.ts:53](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L53)

___

### pctDev

▸ **pctDev**(`values`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`number`[]

#### Defined in

[src/pure-immutable/number.ts:118](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L118)

___

### stdDev

▸ **stdDev**(`values`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`number`

#### Defined in

[src/pure-immutable/number.ts:109](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L109)

___

### sum

▸ **sum**(`nums`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nums` | `number`[] |

#### Returns

`number`

#### Defined in

[src/pure-immutable/number.ts:61](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L61)

___

### sumBy

▸ **sumBy**<`T`\>(`items`, `accessor`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `T`[] |
| `accessor` | (`item`: `T`) => `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/number.ts:57](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L57)

___

### variance

▸ **variance**(`values`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`number`

#### Defined in

[src/pure-immutable/number.ts:105](https://github.com/alpinisme/utils/blob/c0860b6/src/pure-immutable/number.ts#L105)
