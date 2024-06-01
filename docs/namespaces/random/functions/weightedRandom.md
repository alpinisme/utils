[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [random](../README.md) / weightedRandom

# Function: weightedRandom()

> **weightedRandom**(`weights`): `number`

generates values randomly according to specified weights

## Parameters

• **weights**

• **weights.value**: `number`

## Returns

`number`

## Example

```ts
weightedRandom({true: 75, false: 25}) // returns true 3 out of 4 times
```

## Source

[src/impure-immutable/random.ts:7](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/impure-immutable/random.ts#L7)
