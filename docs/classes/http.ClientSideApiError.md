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
- [prepareStackTrace](http.ClientSideApiError.md#preparestacktrace)
- [stackTraceLimit](http.ClientSideApiError.md#stacktracelimit)

### Methods

- [captureStackTrace](http.ClientSideApiError.md#capturestacktrace)

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

[src/mutable/http.ts:131](https://github.com/alpinisme/utils/blob/a3a7f70/src/mutable/http.ts#L131)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[ApiError](http.ApiError.md).[cause](http.ApiError.md#cause)

#### Defined in

.yarn/cache/typescript-patch-772e75d75e-b63cb742fb.zip/node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

[ApiError](http.ApiError.md).[message](http.ApiError.md#message)

#### Defined in

.yarn/cache/typescript-patch-772e75d75e-b63cb742fb.zip/node_modules/typescript/lib/lib.es5.d.ts:1055

___

### name

• **name**: `string`

#### Inherited from

[ApiError](http.ApiError.md).[name](http.ApiError.md#name)

#### Defined in

.yarn/cache/typescript-patch-772e75d75e-b63cb742fb.zip/node_modules/typescript/lib/lib.es5.d.ts:1054

___

### responseText

• **responseText**: `Promise`<`string`\>

#### Inherited from

[ApiError](http.ApiError.md).[responseText](http.ApiError.md#responsetext)

#### Defined in

[src/mutable/http.ts:116](https://github.com/alpinisme/utils/blob/a3a7f70/src/mutable/http.ts#L116)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ApiError](http.ApiError.md).[stack](http.ApiError.md#stack)

#### Defined in

.yarn/cache/typescript-patch-772e75d75e-b63cb742fb.zip/node_modules/typescript/lib/lib.es5.d.ts:1056

___

### status

• **status**: `number`

#### Inherited from

[ApiError](http.ApiError.md).[status](http.ApiError.md#status)

#### Defined in

[src/mutable/http.ts:118](https://github.com/alpinisme/utils/blob/a3a7f70/src/mutable/http.ts#L118)

___

### url

• **url**: `string`

#### Inherited from

[ApiError](http.ApiError.md).[url](http.ApiError.md#url)

#### Defined in

[src/mutable/http.ts:117](https://github.com/alpinisme/utils/blob/a3a7f70/src/mutable/http.ts#L117)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[ApiError](http.ApiError.md).[prepareStackTrace](http.ApiError.md#preparestacktrace)

#### Defined in

.yarn/cache/@types-node-npm-18.15.9-8ef19f541e-5165f84f2f.zip/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[ApiError](http.ApiError.md).[stackTraceLimit](http.ApiError.md#stacktracelimit)

#### Defined in

.yarn/cache/@types-node-npm-18.15.9-8ef19f541e-5165f84f2f.zip/node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[ApiError](http.ApiError.md).[captureStackTrace](http.ApiError.md#capturestacktrace)

#### Defined in

.yarn/cache/@types-node-npm-18.15.9-8ef19f541e-5165f84f2f.zip/node_modules/@types/node/globals.d.ts:4
