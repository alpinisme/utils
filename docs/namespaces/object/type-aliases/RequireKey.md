[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [object](../README.md) / RequireKey

# Type alias: RequireKey\<Obj, Key\>

> **RequireKey**\<`Obj`, `Key`\>: `Obj` & `{ [P in Key]-?: Obj[P] }`

turn optional field into required

## Type parameters

• **Obj**

• **Key** *extends* keyof `Obj`

## Source

[src/pure-immutable/object.ts:76](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/pure-immutable/object.ts#L76)
