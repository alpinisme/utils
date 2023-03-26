[utils](README.md) / Exports

# utils

## Table of contents

### Namespaces

- [arr](modules/arr.md)
- [base](modules/base.md)
- [dateTime](modules/dateTime.md)
- [fn](modules/fn.md)
- [io](modules/io.md)
- [num](modules/num.md)
- [obj](modules/obj.md)
- [str](modules/str.md)
- [timing](modules/timing.md)

### Enumerations

- [Duration](enums/Duration.md)

### Functions

- [addDuration](modules.md#addduration)
- [avg](modules.md#avg)
- [avgBy](modules.md#avgby)
- [capitalize](modules.md#capitalize)
- [clamp](modules.md#clamp)
- [count](modules.md#count)
- [countBy](modules.md#countby)
- [createMatcher](modules.md#creatematcher)
- [duplicates](modules.md#duplicates)
- [duplicatesBy](modules.md#duplicatesby)
- [findAll](modules.md#findall)
- [findMatches](modules.md#findmatches)
- [flipArgs](modules.md#flipargs)
- [getBounds](modules.md#getbounds)
- [getBoundsBy](modules.md#getboundsby)
- [getDurationBetween](modules.md#getdurationbetween)
- [getRange](modules.md#getrange)
- [groupBy](modules.md#groupby)
- [identity](modules.md#identity)
- [inRange](modules.md#inrange)
- [insertNth](modules.md#insertnth)
- [isEmpty](modules.md#isempty)
- [isError](modules.md#iserror)
- [isMatch](modules.md#ismatch)
- [isNonEmpty](modules.md#isnonempty)
- [log](modules.md#log)
- [max](modules.md#max)
- [maxBy](modules.md#maxby)
- [milliseconds](modules.md#milliseconds)
- [min](modules.md#min)
- [minBy](modules.md#minby)
- [numsFromTo](modules.md#numsfromto)
- [numsTo](modules.md#numsto)
- [omit](modules.md#omit)
- [pick](modules.md#pick)
- [removeNth](modules.md#removenth)
- [reverse](modules.md#reverse)
- [safeInvoke](modules.md#safeinvoke)
- [sortByNumber](modules.md#sortbynumber)
- [sortByString](modules.md#sortbystring)
- [sum](modules.md#sum)
- [sumBy](modules.md#sumby)
- [take](modules.md#take)
- [takeRight](modules.md#takeright)
- [toArray](modules.md#toarray)
- [toPascalCase](modules.md#topascalcase)
- [toSnakeCase](modules.md#tosnakecase)
- [toString](modules.md#tostring)
- [uniques](modules.md#uniques)
- [uniquesBy](modules.md#uniquesby)
- [updateNth](modules.md#updatenth)
- [wrap](modules.md#wrap)

## Functions

### addDuration

▸ **addDuration**(`date`, `duration`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `duration` | `DurationConfig` |

#### Returns

`Date`

#### Defined in

[pure-immutable/date-time.ts:11](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/date-time.ts#L11)

___

### avg

▸ **avg**(`arr`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `number`[] |

#### Returns

`number`

#### Defined in

[pure-immutable/number.ts:69](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L69)

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

[pure-immutable/number.ts:65](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L65)

___

### capitalize

▸ **capitalize**(`str`): `string`

Capitalize each word (e.g., 'this string' -> 'This String')

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[pure-immutable/string.ts:25](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/string.ts#L25)

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

[pure-immutable/number.ts:99](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L99)

___

### count

▸ **count**<`T`\>(`arr`): `Record`<`T`, `number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |

#### Returns

`Record`<`T`, `number`\>

#### Defined in

[pure-immutable/array.ts:110](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L110)

___

### countBy

▸ **countBy**<`T`, `Accessor`\>(`arr`, `accessor`): `Record`<`ReturnType`<`Accessor`\>, `number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Accessor` | extends (`item`: `T`) => `string` \| `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `accessor` | `Accessor` |

#### Returns

`Record`<`ReturnType`<`Accessor`\>, `number`\>

#### Defined in

[pure-immutable/array.ts:118](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L118)

___

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

[pure-immutable/object.ts:12](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/object.ts#L12)

___

### duplicates

▸ **duplicates**<`T`\>(`values`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `T`[] |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:76](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L76)

___

### duplicatesBy

▸ **duplicatesBy**<`T`, `U`\>(`values`, `accessor`): { `matches`: `T`[] ; `value`: `U`  }[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | extends (`item`: `T`) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `T`[] |
| `accessor` | `U` |

#### Returns

{ `matches`: `T`[] ; `value`: `U`  }[]

#### Defined in

[pure-immutable/array.ts:80](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L80)

___

### findAll

▸ **findAll**<`T`, `U`\>(`haystack`, `needle`, `accessor`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `haystack` | `T`[] |
| `needle` | `U` |
| `accessor` | (`item`: `T`) => `U` |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:72](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L72)

___

### findMatches

▸ **findMatches**<`T`\>(`arr`, `match`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `match` | `Partial`<`T`\> |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:142](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L142)

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

[pure-immutable/function.ts:18](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/function.ts#L18)

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

[pure-immutable/number.ts:13](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L13)

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

[pure-immutable/number.ts:28](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L28)

___

### getDurationBetween

▸ **getDurationBetween**(`from`, `to`, `units`): `number`

Durations up to days supported.
Beyond that, calendars become significant.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `Date` |
| `to` | `Date` |
| `units` | [`Duration`](enums/dateTime.Duration.md) |

#### Returns

`number`

#### Defined in

[pure-immutable/date-time.ts:49](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/date-time.ts#L49)

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

[pure-immutable/number.ts:94](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L94)

___

### groupBy

▸ **groupBy**<`T`, `Accessor`\>(`arr`, `accessor`): `Record`<`ReturnType`<`Accessor`\>, `T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Accessor` | extends (`item`: `T`) => `string` \| `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `accessor` | `Accessor` |

#### Returns

`Record`<`ReturnType`<`Accessor`\>, `T`[]\>

#### Defined in

[pure-immutable/array.ts:130](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L130)

___

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

[pure-immutable/base.ts:1](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/base.ts#L1)

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

[pure-immutable/number.ts:3](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L3)

___

### insertNth

▸ **insertNth**<`T`\>(`arr`, `index`, `item`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `index` | `number` |
| `item` | `T` |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:54](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L54)

___

### isEmpty

▸ **isEmpty**<`X`\>(`arr`): `boolean`

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `X`[] |

#### Returns

`boolean`

#### Defined in

[pure-immutable/array.ts:102](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L102)

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

[pure-immutable/base.ts:5](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/base.ts#L5)

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

[pure-immutable/object.ts:5](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/object.ts#L5)

___

### isNonEmpty

▸ **isNonEmpty**<`X`\>(`arr`): `boolean`

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `X`[] |

#### Returns

`boolean`

#### Defined in

[pure-immutable/array.ts:106](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L106)

___

### log

▸ **log**<`T`\>(`arg`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `T` |

#### Returns

`T`

#### Defined in

[impure-immutable/io.ts:1](https://github.com/alpinisme/utils/blob/a9c02a4/src/impure-immutable/io.ts#L1)

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

[pure-immutable/number.ts:90](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L90)

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

[pure-immutable/number.ts:86](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L86)

___

### milliseconds

▸ **milliseconds**(`ms`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[impure-immutable/timing.ts:1](https://github.com/alpinisme/utils/blob/a9c02a4/src/impure-immutable/timing.ts#L1)

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

[pure-immutable/number.ts:82](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L82)

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

[pure-immutable/number.ts:78](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L78)

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

[pure-immutable/number.ts:43](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L43)

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

[pure-immutable/number.ts:53](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L53)

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

[pure-immutable/object.ts:28](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/object.ts#L28)

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

[pure-immutable/object.ts:18](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/object.ts#L18)

___

### removeNth

▸ **removeNth**<`T`\>(`arr`, `index`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `index` | `number` |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:68](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L68)

___

### reverse

▸ **reverse**<`T`\>(`arr`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:38](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L38)

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

[pure-immutable/function.ts:1](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/function.ts#L1)

___

### sortByNumber

▸ **sortByNumber**<`T`\>(`arr`, `accessor`, `order?`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arr` | `T`[] | `undefined` |
| `accessor` | (`item`: `T`) => `number` | `undefined` |
| `order` | ``"ASC"`` \| ``"DESC"`` | `'ASC'` |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:28](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L28)

___

### sortByString

▸ **sortByString**<`T`\>(`arr`, `accessor`, `order?`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arr` | `T`[] | `undefined` |
| `accessor` | (`item`: `T`) => `string` | `undefined` |
| `order` | ``"ASC"`` \| ``"DESC"`` | `'ASC'` |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:18](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L18)

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

[pure-immutable/number.ts:61](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L61)

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

[pure-immutable/number.ts:57](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/number.ts#L57)

___

### take

▸ **take**<`T`\>(`arr`, `count`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `count` | `number` |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:42](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L42)

___

### takeRight

▸ **takeRight**<`T`\>(`arr`, `count`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `count` | `number` |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:47](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L47)

___

### toArray

▸ **toArray**<`X`\>(`xs`): `X`[]

#### Type parameters

| Name |
| :------ |
| `X` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `xs` | `Iterable`<`X`\> |

#### Returns

`X`[]

#### Defined in

[pure-immutable/array.ts:98](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L98)

___

### toPascalCase

▸ **toPascalCase**(`str`): `string`

Convert string to PASCAL_CASE,
collapsing non-alphameric sequences with a single underscore

**`Example`**

```ts
toPascalCase("My friend\n the     1st sharK") // -> MY_FRIEND_THE_1ST_SHARK
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[pure-immutable/string.ts:7](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/string.ts#L7)

___

### toSnakeCase

▸ **toSnakeCase**(`str`): `string`

Convert string to PASCAL_CASE,
collapsing non-alphameric sequences with a single underscore

**`Example`**

```ts
toPascalCase("My friend\n the     1st sharK") // -> my_friend_the_1st_shark
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[pure-immutable/string.ts:17](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/string.ts#L17)

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

[pure-immutable/base.ts:9](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/base.ts#L9)

___

### uniques

▸ **uniques**<`T`\>(`values`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `T`[] |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:13](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L13)

___

### uniquesBy

▸ **uniquesBy**<`T`, `Key`\>(`arr`, `accessor`): `T`[]

take first of each unique value, given the accessor function

#### Type parameters

| Name |
| :------ |
| `T` |
| `Key` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `accessor` | (`item`: `T`) => `Key` |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:7](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L7)

___

### updateNth

▸ **updateNth**<`T`\>(`arr`, `index`, `updater`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `index` | `number` |
| `updater` | (`old`: `T`) => `T` |

#### Returns

`T`[]

#### Defined in

[pure-immutable/array.ts:60](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/array.ts#L60)

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

[pure-immutable/function.ts:26](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/function.ts#L26)
