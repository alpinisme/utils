[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [http](../README.md) / ApiError

# Class: ApiError

represents any non-ok http response

## Extends

- `Error`

## Extended by

- [`ClientSideApiError`](ClientSideApiError.md)
- [`ServerSideApiError`](ServerSideApiError.md)

## Constructors

### new ApiError()

> **new ApiError**(`response`): [`ApiError`](ApiError.md)

#### Parameters

• **response**: `Response`

#### Returns

[`ApiError`](ApiError.md)

#### Overrides

`Error.constructor`

#### Source

[src/mutable/http.ts:124](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L124)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Source

.yarn/cache/typescript-patch-79249ecb34-2373c693f3.zip/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Source

.yarn/cache/typescript-patch-79249ecb34-2373c693f3.zip/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Source

.yarn/cache/typescript-patch-79249ecb34-2373c693f3.zip/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### responseText

> **responseText**: `Promise`\<`string`\>

#### Source

[src/mutable/http.ts:120](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L120)

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Source

.yarn/cache/typescript-patch-79249ecb34-2373c693f3.zip/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### status

> **status**: `number`

#### Source

[src/mutable/http.ts:122](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L122)

***

### url

> **url**: `string`

#### Source

[src/mutable/http.ts:121](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L121)
