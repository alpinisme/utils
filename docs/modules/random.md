[utils](../README.md) / [Exports](../modules.md) / random

# Namespace: random

## Table of contents

### Functions

- [random](random.md#random)
- [randomInt](random.md#randomint)
- [weightedRandom](random.md#weightedrandom)

## Functions

### random

▸ **random**(`start`, `end`): `number`

generates random float between lower and upper bounds (inclusive)

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `start` | `number` |
| `end`   | `number` |

#### Returns

`number`

#### Defined in

[src/impure-immutable/random.ts:19](https://github.com/alpinisme/utils/blob/c0860b6/src/impure-immutable/random.ts#L19)

---

### randomInt

▸ **randomInt**(`start`, `end`): `number`

generates random int between lower and upper bounds (inclusive)

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `start` | `number` |
| `end`   | `number` |

#### Returns

`number`

#### Defined in

[src/impure-immutable/random.ts:27](https://github.com/alpinisme/utils/blob/c0860b6/src/impure-immutable/random.ts#L27)

---

### weightedRandom

▸ **weightedRandom**(`weights`): `number`

generates values randomly according to specified weights

**`Example`**

```ts
weightedRandom({ true: 75, false: 25 }) // returns true 3 out of 4 times
```

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `weights`       | `Object` |
| `weights.value` | `number` |

#### Returns

`number`

#### Defined in

[src/impure-immutable/random.ts:7](https://github.com/alpinisme/utils/blob/c0860b6/src/impure-immutable/random.ts#L7)
