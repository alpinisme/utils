[utils](../README.md) / [Exports](../modules.md) / [http](../modules/http.md) / ApiError

# Class: ApiError

[http](../modules/http.md).ApiError

represents any non-ok http response

## Hierarchy

- `Error`

  ↳ **`ApiError`**

  ↳↳ [`ClientSideApiError`](http.ClientSideApiError.md)

  ↳↳ [`ServerSideApiError`](http.ServerSideApiError.md)

## Table of contents

### Constructors

- [constructor](http.ApiError.md#constructor)

### Properties

- [cause](http.ApiError.md#cause)
- [message](http.ApiError.md#message)
- [name](http.ApiError.md#name)
- [responseText](http.ApiError.md#responsetext)
- [stack](http.ApiError.md#stack)
- [status](http.ApiError.md#status)
- [url](http.ApiError.md#url)

## Constructors

### constructor

• **new ApiError**(`response`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Overrides

Error.constructor

#### Defined in

[src/mutable/http.ts:124](https://github.com/alpinisme/utils/blob/08ceb73/src/mutable/http.ts#L124)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es5.d.ts:1067

___

### responseText

• **responseText**: `Promise`<`string`\>

#### Defined in

[src/mutable/http.ts:120](https://github.com/alpinisme/utils/blob/08ceb73/src/mutable/http.ts#L120)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es5.d.ts:1069

___

### status

• **status**: `number`

#### Defined in

[src/mutable/http.ts:122](https://github.com/alpinisme/utils/blob/08ceb73/src/mutable/http.ts#L122)

___

### url

• **url**: `string`

#### Defined in

[src/mutable/http.ts:121](https://github.com/alpinisme/utils/blob/08ceb73/src/mutable/http.ts#L121)
