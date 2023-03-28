import { milliseconds } from '../impure-immutable'
import { DurationMS, safeInvoke } from '../pure-immutable'

type ConstructorProps = {
  retries?: number
  retryDelay?: number
  baseUrl: string
  authToken?: string
  includeCredentials?: boolean
}

/**
 * Api client for a single api base url.
 *
 * Includes optional retry logic, auth token injection, and error handling
 */
export class ApiClient {
  private retries: number
  private retryDelay: number
  private readonly baseUrl: string

  private options: RequestInit & { headers: Headers } = {
    headers: new Headers({ 'Content-Type': 'application/json' }),
  }

  constructor(props: ConstructorProps) {
    this.retries = props.retries ?? 0
    this.retryDelay = props.retryDelay ?? DurationMS.fromMinutes(1)
    this.baseUrl = props.baseUrl
    if (props.includeCredentials) {
      this.options.credentials = 'include'
    }
    if (props.authToken) {
      this.options.headers.set('Authorization', `Bearer ${props.authToken}`)
    }
  }

  /**
   * GET `path` at base url.
   *
   * @throws {@link ClientSideApiError} if response in 400-series
   * @throws {@link ServerSideApiError} if response in 500-series
   * @example get('/account/1234')
   */
  async get(path: string) {
    return this.makeRequestWithRetries(path, this.options)
  }

  /**
   * POST `path` at base url with optional body .
   *
   * @throws {@link ClientSideApiError} if response in 400-series
   * @throws {@link ServerSideApiError} if response in 500-series
   * @example post('/account/1234', {username: 'pinocchio', dream: 'becoming a human boy'})
   */
  async post(path: string, body: any) {
    return this.makeRequestWithRetries(path, { ...this.options, method: 'POST', body })
  }

  /**
   * PUT `path` at base url with optional body .
   *
   * @throws {@link ClientSideApiError} if response in 400-series
   * @throws {@link ServerSideApiError} if response in 500-series
   * @example put('/account/1234', {username: 'jeeves'})
   */
  async put(path: string, body?: any) {
    return this.makeRequestWithRetries(path, { ...this.options, method: 'PUT', body })
  }

  /**
   * DELETE `path` at base url.
   *
   * @throws {@link ClientSideApiError} if response in 400-series
   * @throws {@link ServerSideApiError} if response in 500-series
   * @example get('/account/123/')
   */
  async delete(path: string) {
    return this.makeRequestWithRetries(path, { ...this.options, method: 'DELETE' })
  }

  /** set the token used in the authorization header */
  async setAuthToken(token: string) {
    this.options.headers.set('Authorization', `Bearer ${token}`)
  }

  /** Make request and retry on 5xx errors up to `retries` times */
  private async makeRequestWithRetries(
    path: string,
    options: RequestInit,
    retries = this.retries,
  ): Promise<Response> {
    const url = this.baseUrl + path

    const response = await fetch(url, options)
    const result = safeInvoke(this.handleResponse.bind(this), response)
    if (result.success) return result.result
    if (result.error instanceof ServerSideApiError) {
      await milliseconds(this.retryDelay)
      return this.makeRequestWithRetries(path, options, retries - 1)
    }
    throw result.error
  }

  private handleResponse(response: Response) {
    if (response.ok) {
      return response
    }

    if (response.status >= 500) {
      throw new ServerSideApiError(response)
    }

    throw new ClientSideApiError(response)
  }
}

/** represents any non-ok http response */
export class ApiError extends Error {
  responseText: Promise<string>
  url: string
  status: number

  constructor(response: Response) {
    super(`API response not ok. ${response.status}: ${response.statusText}`)
    this.name = 'ApiError'
    this.responseText = response.text()
    this.status = response.status
    this.url = response.url
  }
}

/** represents 400-series http responses */
export class ClientSideApiError extends ApiError {
  constructor(response: Response) {
    super(response)
  }
}

/** represents 500-series http responses */
export class ServerSideApiError extends ApiError {
  constructor(response: Response) {
    super(response)
  }
}
