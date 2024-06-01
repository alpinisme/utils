[**utils**](../../../README.md) • **Docs**

***

[utils](../../../globals.md) / [http](../README.md) / ApiClient

# Class: ApiClient

Api client for a single api base url.

Includes optional retry logic, auth token injection, and error handling

## Constructors

### new ApiClient()

> **new ApiClient**(`props`): [`ApiClient`](ApiClient.md)

#### Parameters

• **props**: `ConstructorProps`

#### Returns

[`ApiClient`](ApiClient.md)

#### Source

[src/mutable/http.ts:26](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L26)

## Properties

### baseUrl

> `private` `readonly` **baseUrl**: `string`

#### Source

[src/mutable/http.ts:20](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L20)

***

### options

> `private` **options**: `RequestInit` & `object`

#### Type declaration

##### headers

> **headers**: `Headers`

#### Source

[src/mutable/http.ts:22](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L22)

***

### retries

> `private` **retries**: `number`

#### Source

[src/mutable/http.ts:18](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L18)

***

### retryDelay

> `private` **retryDelay**: `number`

#### Source

[src/mutable/http.ts:19](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L19)

## Methods

### delete()

> **delete**(`path`): `Promise`\<`Response`\>

DELETE `path` at base url.

#### Parameters

• **path**: `string`

#### Returns

`Promise`\<`Response`\>

#### Throws

[ClientSideApiError](ClientSideApiError.md) if response in 400-series

#### Throws

[ServerSideApiError](ServerSideApiError.md) if response in 500-series

#### Example

```ts
get('/account/123/')
```

#### Source

[src/mutable/http.ts:78](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L78)

***

### get()

> **get**(`path`): `Promise`\<`Response`\>

GET `path` at base url.

#### Parameters

• **path**: `string`

#### Returns

`Promise`\<`Response`\>

#### Throws

[ClientSideApiError](ClientSideApiError.md) if response in 400-series

#### Throws

[ServerSideApiError](ServerSideApiError.md) if response in 500-series

#### Example

```ts
get('/account/1234')
```

#### Source

[src/mutable/http.ts:45](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L45)

***

### handleResponse()

> `private` **handleResponse**(`response`): `Response`

#### Parameters

• **response**: `Response`

#### Returns

`Response`

#### Source

[src/mutable/http.ts:105](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L105)

***

### makeRequestWithRetries()

> `private` **makeRequestWithRetries**(`path`, `options`, `retries`): `Promise`\<`Response`\>

Make request and retry on 5xx errors up to `retries` times

#### Parameters

• **path**: `string`

• **options**: `RequestInit`

• **retries**: `number`= `undefined`

#### Returns

`Promise`\<`Response`\>

#### Source

[src/mutable/http.ts:88](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L88)

***

### post()

> **post**(`path`, `body`): `Promise`\<`Response`\>

POST `path` at base url with optional body .

#### Parameters

• **path**: `string`

• **body**: `any`

#### Returns

`Promise`\<`Response`\>

#### Throws

[ClientSideApiError](ClientSideApiError.md) if response in 400-series

#### Throws

[ServerSideApiError](ServerSideApiError.md) if response in 500-series

#### Example

```ts
post('/account/1234', {username: 'pinocchio', dream: 'becoming a human boy'})
```

#### Source

[src/mutable/http.ts:56](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L56)

***

### put()

> **put**(`path`, `body`?): `Promise`\<`Response`\>

PUT `path` at base url with optional body .

#### Parameters

• **path**: `string`

• **body?**: `any`

#### Returns

`Promise`\<`Response`\>

#### Throws

[ClientSideApiError](ClientSideApiError.md) if response in 400-series

#### Throws

[ServerSideApiError](ServerSideApiError.md) if response in 500-series

#### Example

```ts
put('/account/1234', {username: 'jeeves'})
```

#### Source

[src/mutable/http.ts:67](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L67)

***

### setAuthToken()

> **setAuthToken**(`token`): `Promise`\<`void`\>

set the token used in the authorization header

#### Parameters

• **token**: `string`

#### Returns

`Promise`\<`void`\>

#### Source

[src/mutable/http.ts:83](https://github.com/alpinisme/utils/blob/825f78da0ace828df12ea4d598fd95fa96ee25f5/src/mutable/http.ts#L83)
