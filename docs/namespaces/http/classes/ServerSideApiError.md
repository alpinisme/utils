[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [http](../README.md) / ServerSideApiError

# Class: ServerSideApiError

represents 500-series http responses

## Extends

- [`ApiError`](ApiError.md)

## Constructors

### new ServerSideApiError()

> **new ServerSideApiError**(`response`): [`ServerSideApiError`](ServerSideApiError.md)

#### Parameters

• **response**: `Response`

#### Returns

[`ServerSideApiError`](ServerSideApiError.md)

#### Overrides

[`ApiError`](ApiError.md).[`constructor`](ApiError.md#constructors)

#### Source

[src/mutable/http.ts:142](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L142)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

[`ApiError`](ApiError.md).[`cause`](ApiError.md#cause)

#### Source

.yarn/cache/typescript-patch-79249ecb34-2373c693f3.zip/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

[`ApiError`](ApiError.md).[`message`](ApiError.md#message)

#### Source

.yarn/cache/typescript-patch-79249ecb34-2373c693f3.zip/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`ApiError`](ApiError.md).[`name`](ApiError.md#name)

#### Source

.yarn/cache/typescript-patch-79249ecb34-2373c693f3.zip/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### responseText

> **responseText**: `Promise`\<`string`\>

#### Inherited from

[`ApiError`](ApiError.md).[`responseText`](ApiError.md#responsetext)

#### Source

[src/mutable/http.ts:120](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L120)

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`ApiError`](ApiError.md).[`stack`](ApiError.md#stack)

#### Source

.yarn/cache/typescript-patch-79249ecb34-2373c693f3.zip/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### status

> **status**: `number`

#### Inherited from

[`ApiError`](ApiError.md).[`status`](ApiError.md#status)

#### Source

[src/mutable/http.ts:122](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L122)

***

### url

> **url**: `string`

#### Inherited from

[`ApiError`](ApiError.md).[`url`](ApiError.md#url)

#### Source

[src/mutable/http.ts:121](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L121)
