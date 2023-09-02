[utils](../README.md) / [Exports](../modules.md) / [http](../modules/http.md) / ClientSideApiError

# Class: ClientSideApiError

[http](../modules/http.md).ClientSideApiError

represents 400-series http responses

## Hierarchy

- [`ApiError`](http.ApiError.md)

  ↳ **`ClientSideApiError`**

## Table of contents

### Constructors

- [constructor](http.ClientSideApiError.md#constructor)

### Properties

- [cause](http.ClientSideApiError.md#cause)
- [message](http.ClientSideApiError.md#message)
- [name](http.ClientSideApiError.md#name)
- [responseText](http.ClientSideApiError.md#responsetext)
- [stack](http.ClientSideApiError.md#stack)
- [status](http.ClientSideApiError.md#status)
- [url](http.ClientSideApiError.md#url)

## Constructors

### constructor

• **new ClientSideApiError**(`response`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Overrides

[ApiError](http.ApiError.md).[constructor](http.ApiError.md#constructor)

#### Defined in

[src/mutable/http.ts:135](https://github.com/alpinisme/utils/blob/08ceb73/src/mutable/http.ts#L135)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[ApiError](http.ApiError.md).[cause](http.ApiError.md#cause)

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

[ApiError](http.ApiError.md).[message](http.ApiError.md#message)

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

[ApiError](http.ApiError.md).[name](http.ApiError.md#name)

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es5.d.ts:1067

___

### responseText

• **responseText**: `Promise`<`string`\>

#### Inherited from

[ApiError](http.ApiError.md).[responseText](http.ApiError.md#responsetext)

#### Defined in

[src/mutable/http.ts:120](https://github.com/alpinisme/utils/blob/08ceb73/src/mutable/http.ts#L120)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ApiError](http.ApiError.md).[stack](http.ApiError.md#stack)

#### Defined in

.yarn/cache/typescript-patch-2e8dbfb8ab-0f4da2f15e.zip/node_modules/typescript/lib/lib.es5.d.ts:1069

___

### status

• **status**: `number`

#### Inherited from

[ApiError](http.ApiError.md).[status](http.ApiError.md#status)

#### Defined in

[src/mutable/http.ts:122](https://github.com/alpinisme/utils/blob/08ceb73/src/mutable/http.ts#L122)

___

### url

• **url**: `string`

#### Inherited from

[ApiError](http.ApiError.md).[url](http.ApiError.md#url)

#### Defined in

[src/mutable/http.ts:121](https://github.com/alpinisme/utils/blob/08ceb73/src/mutable/http.ts#L121)
