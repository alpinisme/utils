[utils](../README.md) / [Exports](../modules.md) / dateTime

# Namespace: dateTime

## Table of contents

### Enumerations

- [DurationUnits](../enums/dateTime.DurationUnits.md)

### Classes

- [DurationMS](../classes/dateTime.DurationMS.md)

### Functions

- [addDuration](dateTime.md#addduration)
- [durationBetween](dateTime.md#durationbetween)

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

[src/pure-immutable/date-time.ts:61](https://github.com/alpinisme/utils/blob/a3a7f70/src/pure-immutable/date-time.ts#L61)

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
| `units` | [`DurationUnits`](../enums/dateTime.DurationUnits.md) |

#### Returns

`number`

#### Defined in

[src/pure-immutable/date-time.ts:91](https://github.com/alpinisme/utils/blob/a3a7f70/src/pure-immutable/date-time.ts#L91)
