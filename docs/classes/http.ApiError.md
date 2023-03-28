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
- [prepareStackTrace](http.ApiError.md#preparestacktrace)
- [stackTraceLimit](http.ApiError.md#stacktracelimit)

### Methods

- [captureStackTrace](http.ApiError.md#capturestacktrace)

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

[src/mutable/http.ts:124](https://github.com/alpinisme/utils/blob/c0860b6/src/mutable/http.ts#L124)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

.yarn/cache/typescript-patch-772e75d75e-b63cb742fb.zip/node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

.yarn/cache/typescript-patch-772e75d75e-b63cb742fb.zip/node_modules/typescript/lib/lib.es5.d.ts:1055

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

.yarn/cache/typescript-patch-772e75d75e-b63cb742fb.zip/node_modules/typescript/lib/lib.es5.d.ts:1054

___

### responseText

• **responseText**: `Promise`<`string`\>

#### Defined in

[src/mutable/http.ts:120](https://github.com/alpinisme/utils/blob/c0860b6/src/mutable/http.ts#L120)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

.yarn/cache/typescript-patch-772e75d75e-b63cb742fb.zip/node_modules/typescript/lib/lib.es5.d.ts:1056

___

### status

• **status**: `number`

#### Defined in

[src/mutable/http.ts:122](https://github.com/alpinisme/utils/blob/c0860b6/src/mutable/http.ts#L122)

___

### url

• **url**: `string`

#### Defined in

[src/mutable/http.ts:121](https://github.com/alpinisme/utils/blob/c0860b6/src/mutable/http.ts#L121)

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

Error.prepareStackTrace

#### Defined in

.yarn/cache/@types-node-npm-18.15.9-8ef19f541e-5165f84f2f.zip/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

#### Defined in

.yarn/cache/@types-node-npm-18.15.9-8ef19f541e-5165f84f2f.zip/node_modules/@types/node/globals.d.ts:4
