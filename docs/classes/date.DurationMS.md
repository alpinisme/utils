[utils](../README.md) / [Exports](../modules.md) / [date](../modules/date.md) / DurationMs

# Class: DurationMs

[date](../modules/date.md).DurationMs

Helper class for converting durations to and from milliseconds

Duration units up to days supported.
Beyond that, calendars become significant.

## Table of contents

### Constructors

- [constructor](date.DurationMs.md#constructor)

### Properties

- [multiplier](date.DurationMs.md#multiplier)

### Methods

- [fromDays](date.DurationMs.md#fromdays)
- [fromHours](date.DurationMs.md#fromhours)
- [fromMilliseconds](date.DurationMs.md#frommilliseconds)
- [fromMinutes](date.DurationMs.md#fromminutes)
- [fromSeconds](date.DurationMs.md#fromseconds)
- [toDays](date.DurationMs.md#todays)
- [toHours](date.DurationMs.md#tohours)
- [toMilliseconds](date.DurationMs.md#tomilliseconds)
- [toMinutes](date.DurationMs.md#tominutes)
- [toSeconds](date.DurationMs.md#toseconds)

## Constructors

### constructor

• **new DurationMs**()

## Properties

### multiplier

▪ `Static` `Private` `Readonly` **multiplier**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `days` | `number` |
| `hours` | `number` |
| `milliseconds` | `number` |
| `minutes` | `number` |
| `seconds` | `number` |

#### Defined in

[src/pure-immutable/date-time.ts:18](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/date-time.ts#L18)

## Methods

### fromDays

▸ `Static` **fromDays**(`count`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/date-time.ts:38](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/date-time.ts#L38)

___

### fromHours

▸ `Static` **fromHours**(`count`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/date-time.ts:35](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/date-time.ts#L35)

___

### fromMilliseconds

▸ `Static` **fromMilliseconds**(`count`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/date-time.ts:26](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/date-time.ts#L26)

___

### fromMinutes

▸ `Static` **fromMinutes**(`count`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/date-time.ts:32](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/date-time.ts#L32)

___

### fromSeconds

▸ `Static` **fromSeconds**(`count`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/date-time.ts:29](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/date-time.ts#L29)

___

### toDays

▸ `Static` **toDays**(`count`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/date-time.ts:54](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/date-time.ts#L54)

___

### toHours

▸ `Static` **toHours**(`count`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/date-time.ts:51](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/date-time.ts#L51)

___

### toMilliseconds

▸ `Static` **toMilliseconds**(`count`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/date-time.ts:42](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/date-time.ts#L42)

___

### toMinutes

▸ `Static` **toMinutes**(`count`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/date-time.ts:48](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/date-time.ts#L48)

___

### toSeconds

▸ `Static` **toSeconds**(`count`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`number`

#### Defined in

[src/pure-immutable/date-time.ts:45](https://github.com/alpinisme/utils/blob/08ceb73/src/pure-immutable/date-time.ts#L45)
