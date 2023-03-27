[utils](../README.md) / [Exports](../modules.md) / [dateTime](../modules/dateTime.md) / DurationMS

# Class: DurationMS

[dateTime](../modules/dateTime.md).DurationMS

Helper class for converting durations to and from milliseconds

Duration units up to days supported.
Beyond that, calendars become significant.

## Table of contents

### Constructors

- [constructor](dateTime.DurationMS.md#constructor)

### Properties

- [multiplier](dateTime.DurationMS.md#multiplier)

### Methods

- [fromDays](dateTime.DurationMS.md#fromdays)
- [fromHours](dateTime.DurationMS.md#fromhours)
- [fromMilliseconds](dateTime.DurationMS.md#frommilliseconds)
- [fromMinutes](dateTime.DurationMS.md#fromminutes)
- [fromSeconds](dateTime.DurationMS.md#fromseconds)
- [toDays](dateTime.DurationMS.md#todays)
- [toHours](dateTime.DurationMS.md#tohours)
- [toMilliseconds](dateTime.DurationMS.md#tomilliseconds)
- [toMinutes](dateTime.DurationMS.md#tominutes)
- [toSeconds](dateTime.DurationMS.md#toseconds)

## Constructors

### constructor

• **new DurationMS**()

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

[src/pure-immutable/date-time.ts:18](https://github.com/alpinisme/utils/blob/ce14fad/src/pure-immutable/date-time.ts#L18)

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

[src/pure-immutable/date-time.ts:38](https://github.com/alpinisme/utils/blob/ce14fad/src/pure-immutable/date-time.ts#L38)

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

[src/pure-immutable/date-time.ts:35](https://github.com/alpinisme/utils/blob/ce14fad/src/pure-immutable/date-time.ts#L35)

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

[src/pure-immutable/date-time.ts:26](https://github.com/alpinisme/utils/blob/ce14fad/src/pure-immutable/date-time.ts#L26)

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

[src/pure-immutable/date-time.ts:32](https://github.com/alpinisme/utils/blob/ce14fad/src/pure-immutable/date-time.ts#L32)

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

[src/pure-immutable/date-time.ts:29](https://github.com/alpinisme/utils/blob/ce14fad/src/pure-immutable/date-time.ts#L29)

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

[src/pure-immutable/date-time.ts:54](https://github.com/alpinisme/utils/blob/ce14fad/src/pure-immutable/date-time.ts#L54)

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

[src/pure-immutable/date-time.ts:51](https://github.com/alpinisme/utils/blob/ce14fad/src/pure-immutable/date-time.ts#L51)

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

[src/pure-immutable/date-time.ts:42](https://github.com/alpinisme/utils/blob/ce14fad/src/pure-immutable/date-time.ts#L42)

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

[src/pure-immutable/date-time.ts:48](https://github.com/alpinisme/utils/blob/ce14fad/src/pure-immutable/date-time.ts#L48)

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

[src/pure-immutable/date-time.ts:45](https://github.com/alpinisme/utils/blob/ce14fad/src/pure-immutable/date-time.ts#L45)
