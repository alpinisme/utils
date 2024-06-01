[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [object](../README.md) / remapKeys

# Function: remapKeys()

> **remapKeys**\<`T`, `M`\>(`obj`, `keyMap`): `{ [K in string]: K extends keyof T ? T[K<K>] : never }`

Given a keyMap object that maps old keys to new keys, copy an object over
using the new keys and dropping any properties that are unmapped.

Note that the generic type must be specified at the call site to get best type results,
since otherwise TypeScript may infer `never` for properties that did not exist on original obj.
This isn't an unsafe coercion, just helping TypeScript narrow the generic correctly.

## Type parameters

• **T** *extends* `object`

• **M** *extends* `Record`\<`string`, `string`\>

## Parameters

• **obj**: `T`

• **keyMap**: `M`

## Returns

`{ [K in string]: K extends keyof T ? T[K<K>] : never }`

## Example

```ts
const obj = {a: 1, b: 2}
const keyMap = {a: 'alpha'}
remapKeys(obj, keyMap) // {'alpha': 1}
```

## Source

[src/pure-immutable/object.ts:145](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/object.ts#L145)
