[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [date](../README.md) / DurationMs

# Class: DurationMs

Helper class for converting durations to and from milliseconds

Duration units up to days supported.
Beyond that, calendars become significant.

## Constructors

### new DurationMs()

> **new DurationMs**(): [`DurationMs`](DurationMs.md)

#### Returns

[`DurationMs`](DurationMs.md)

## Properties

### multiplier

> `static` `private` `readonly` **multiplier**: `object`

#### days

> **days**: `number`

#### hours

> **hours**: `number`

#### milliseconds

> **milliseconds**: `number` = `1`

#### minutes

> **minutes**: `number`

#### seconds

> **seconds**: `number` = `1_000`

#### Source

[src/pure-immutable/date-time.ts:18](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/date-time.ts#L18)

## Methods

### fromDays()

> `static` **fromDays**(`count`): `number`

#### Parameters

• **count**: `number`

#### Returns

`number`

#### Source

[src/pure-immutable/date-time.ts:38](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/date-time.ts#L38)

***

### fromHours()

> `static` **fromHours**(`count`): `number`

#### Parameters

• **count**: `number`

#### Returns

`number`

#### Source

[src/pure-immutable/date-time.ts:35](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/date-time.ts#L35)

***

### fromMilliseconds()

> `static` **fromMilliseconds**(`count`): `number`

#### Parameters

• **count**: `number`

#### Returns

`number`

#### Source

[src/pure-immutable/date-time.ts:26](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/date-time.ts#L26)

***

### fromMinutes()

> `static` **fromMinutes**(`count`): `number`

#### Parameters

• **count**: `number`

#### Returns

`number`

#### Source

[src/pure-immutable/date-time.ts:32](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/date-time.ts#L32)

***

### fromSeconds()

> `static` **fromSeconds**(`count`): `number`

#### Parameters

• **count**: `number`

#### Returns

`number`

#### Source

[src/pure-immutable/date-time.ts:29](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/date-time.ts#L29)

***

### toDays()

> `static` **toDays**(`count`): `number`

#### Parameters

• **count**: `number`

#### Returns

`number`

#### Source

[src/pure-immutable/date-time.ts:54](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/date-time.ts#L54)

***

### toHours()

> `static` **toHours**(`count`): `number`

#### Parameters

• **count**: `number`

#### Returns

`number`

#### Source

[src/pure-immutable/date-time.ts:51](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/date-time.ts#L51)

***

### toMilliseconds()

> `static` **toMilliseconds**(`count`): `number`

#### Parameters

• **count**: `number`

#### Returns

`number`

#### Source

[src/pure-immutable/date-time.ts:42](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/date-time.ts#L42)

***

### toMinutes()

> `static` **toMinutes**(`count`): `number`

#### Parameters

• **count**: `number`

#### Returns

`number`

#### Source

[src/pure-immutable/date-time.ts:48](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/date-time.ts#L48)

***

### toSeconds()

> `static` **toSeconds**(`count`): `number`

#### Parameters

• **count**: `number`

#### Returns

`number`

#### Source

[src/pure-immutable/date-time.ts:45](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/date-time.ts#L45)
