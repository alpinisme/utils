[utils](../README.md) / [Exports](../modules.md) / dateTime

# Namespace: dateTime

## Table of contents

### Enumerations

- [Duration](../enums/dateTime.Duration.md)

### Functions

- [addDuration](dateTime.md#addduration)
- [getDurationBetween](dateTime.md#getdurationbetween)

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

### getDurationBetween

▸ **getDurationBetween**(`from`, `to`, `units`): `number`

Durations up to days supported.
Beyond that, calendars become significant.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `Date` |
| `to` | `Date` |
| `units` | [`Duration`](../enums/dateTime.Duration.md) |

#### Returns

`number`

#### Defined in

[pure-immutable/date-time.ts:49](https://github.com/alpinisme/utils/blob/a9c02a4/src/pure-immutable/date-time.ts#L49)
