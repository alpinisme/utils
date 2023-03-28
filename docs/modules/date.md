[utils](../README.md) / [Exports](../modules.md) / date

# Namespace: date

## Table of contents

### Enumerations

- [DurationUnits](../enums/date.DurationUnits.md)

### Classes

- [DurationMs](../classes/date.DurationMs.md)

### Functions

- [addDuration](date.md#addduration)
- [durationBetween](date.md#durationbetween)
- [isValidDate](date.md#isvaliddate)

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

[src/pure-immutable/date-time.ts:61](https://github.com/alpinisme/utils/blob/5571690/src/pure-immutable/date-time.ts#L61)

___

### durationBetween

▸ **durationBetween**(`start`, `stop`, `units`): `number`

Durations up to days supported.
Beyond that, calendars become significant.

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `Date` |
| `stop` | `Date` |
| `units` | [`DurationUnits`](../enums/date.DurationUnits.md) |

#### Returns

`number`

#### Defined in

[src/pure-immutable/date-time.ts:91](https://github.com/alpinisme/utils/blob/5571690/src/pure-immutable/date-time.ts#L91)

___

### isValidDate

▸ **isValidDate**(`date`): `boolean`

Checks if date object contains a valid date

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`boolean`

#### Defined in

[src/pure-immutable/date-time.ts:102](https://github.com/alpinisme/utils/blob/5571690/src/pure-immutable/date-time.ts#L102)
