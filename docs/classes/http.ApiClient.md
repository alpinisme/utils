[utils](../README.md) / [Exports](../modules.md) / [http](../modules/http.md) / ApiClient

# Class: ApiClient

[http](../modules/http.md).ApiClient

Api client for a single api base url.

Includes optional retry logic, auth token injection, and error handling

## Table of contents

### Constructors

- [constructor](http.ApiClient.md#constructor)

### Properties

- [baseUrl](http.ApiClient.md#baseurl)
- [options](http.ApiClient.md#options)
- [retries](http.ApiClient.md#retries)
- [retryDelay](http.ApiClient.md#retrydelay)

### Methods

- [delete](http.ApiClient.md#delete)
- [get](http.ApiClient.md#get)
- [handleResponse](http.ApiClient.md#handleresponse)
- [makeRequestWithRetries](http.ApiClient.md#makerequestwithretries)
- [post](http.ApiClient.md#post)
- [put](http.ApiClient.md#put)
- [setAuthToken](http.ApiClient.md#setauthtoken)

## Constructors

### constructor

• **new ApiClient**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ConstructorProps` |

#### Defined in

[src/mutable/http.ts:26](https://github.com/alpinisme/utils/blob/a680e5d/src/mutable/http.ts#L26)

## Properties

### baseUrl

• `Private` `Readonly` **baseUrl**: `string`

#### Defined in

[src/mutable/http.ts:20](https://github.com/alpinisme/utils/blob/a680e5d/src/mutable/http.ts#L20)

___

### options

• `Private` **options**: `RequestInit` & { `headers`: `Headers`  }

#### Defined in

[src/mutable/http.ts:22](https://github.com/alpinisme/utils/blob/a680e5d/src/mutable/http.ts#L22)

___

### retries

• `Private` **retries**: `number`

#### Defined in

[src/mutable/http.ts:18](https://github.com/alpinisme/utils/blob/a680e5d/src/mutable/http.ts#L18)

___

### retryDelay

• `Private` **retryDelay**: `number`

#### Defined in

[src/mutable/http.ts:19](https://github.com/alpinisme/utils/blob/a680e5d/src/mutable/http.ts#L19)

## Methods

### delete

▸ **delete**(`path`): `Promise`<`Response`\>

DELETE `path` at base url.

**`Throws`**

`ApiError` if response not ok

**`Example`**

```ts
get('/account/123/')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/mutable/http.ts:74](https://github.com/alpinisme/utils/blob/a680e5d/src/mutable/http.ts#L74)

___

### get

▸ **get**(`path`): `Promise`<`Response`\>

GET `path` at base url.

**`Throws`**

`ApiError` if response not ok

**`Example`**

```ts
get('/account/1234')
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/mutable/http.ts:44](https://github.com/alpinisme/utils/blob/a680e5d/src/mutable/http.ts#L44)

___

### handleResponse

▸ `Private` **handleResponse**(`response`): `Response`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Response`

#### Defined in

[src/mutable/http.ts:101](https://github.com/alpinisme/utils/blob/a680e5d/src/mutable/http.ts#L101)

___

### makeRequestWithRetries

▸ `Private` **makeRequestWithRetries**(`path`, `options`, `retries?`): `Promise`<`Response`\>

Make request and retry on 5xx errors up to `retries` times

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options` | `RequestInit` |
| `retries` | `number` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/mutable/http.ts:84](https://github.com/alpinisme/utils/blob/a680e5d/src/mutable/http.ts#L84)

___

### post

▸ **post**(`path`, `body`): `Promise`<`Response`\>

POST `path` at base url with optional body .

**`Throws`**

`ApiError` if response not ok

**`Example`**

```ts
post('/account/1234', {username: 'pinocchio', dream: 'becoming a human boy'})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `body` | `any` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/mutable/http.ts:54](https://github.com/alpinisme/utils/blob/a680e5d/src/mutable/http.ts#L54)

___

### put

▸ **put**(`path`, `body?`): `Promise`<`Response`\>

PUT `path` at base url with optional body .

**`Throws`**

`ApiError` if response not ok

**`Example`**

```ts
put('/account/1234', {username: 'jeeves'})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `body?` | `any` |

#### Returns

`Promise`<`Response`\>

#### Defined in

[src/mutable/http.ts:64](https://github.com/alpinisme/utils/blob/a680e5d/src/mutable/http.ts#L64)

___

### setAuthToken

▸ **setAuthToken**(`token`): `Promise`<`void`\>

set the token used in the authorization header

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/mutable/http.ts:79](https://github.com/alpinisme/utils/blob/a680e5d/src/mutable/http.ts#L79)
