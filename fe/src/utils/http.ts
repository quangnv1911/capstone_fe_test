// import { META } from '#utils/';
// type CustomOptions = Omit<RequestInit, 'method'> & {
//   baseUrl?: string | undefined
//   token?: string // Thêm token vào options
// }

// const ENTITY_ERROR_STATUS = 422
// const AUTHENTICATION_ERROR_STATUS = 401

// type EntityErrorPayload = {
//   message: string
//   errors: {
//     field: string
//     message: string
//   }[]
// }

// export class HttpError extends Error {
//   status: number
//   payload: {
//     message: string
//     [key: string]: any
//   }
//   constructor({ status, payload }: { status: number; payload: any }) {
//     super('Http Error')
//     this.status = status
//     this.payload = payload
//   }
// }

// export class EntityError extends HttpError {
//   status: 422
//   payload: EntityErrorPayload
//   constructor({ status, payload }: { status: 422; payload: EntityErrorPayload }) {
//     super({ status, payload })
//     this.status = status
//     this.payload = payload
//   }
// }

// const request = async <Response>(
//   method: 'GET' | 'POST' | 'PUT' | 'DELETE',
//   url: string,
//   options?: CustomOptions | undefined,
// ) => {
//   let body: FormData | string | undefined = undefined
//   if (options?.body instanceof FormData) {
//     body = options.body
//   } else if (options?.body) {
//     body = JSON.stringify(options?.body)
//   }

//   const baseHeaders: { [key: string]: string } =
//     body instanceof FormData ? {} : { 'Content-Type': 'application/json' }

//   // Nếu token được truyền vào, thêm vào headers
//   if (options?.token) {
//     baseHeaders.Authorization = `Bearer ${options.token}`
//   }

//   const baseUrl =
//     options?.baseUrl === undefined ? envConfig.NEXT_PUBLIC_API_ENDPOINT : options.baseUrl
//   const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`

//   const res = await fetch(fullUrl, {
//     ...options,
//     headers: {
//       ...baseHeaders,
//       ...options?.headers,
//     } as any,
//     body,
//     method,
//   })

//   const payload: Response = await res.json()
//   const data = {
//     status: res.status,
//     payload,
//   }

//   if (!res.ok) {
//     if (res.status === ENTITY_ERROR_STATUS) {
//       throw new EntityError(data as { status: 422; payload: EntityErrorPayload })
//     } else if (res.status === AUTHENTICATION_ERROR_STATUS) {
//       if (typeof window !== 'undefined') {
//         // Xử lý logout nếu có lỗi authentication
//         location.href = '/login'
//       }
//     } else {
//       throw new HttpError(data)
//     }
//   }

//   return data
// }

// const http = {
//   get<Response>(url: string, options?: Omit<CustomOptions, 'body'> | undefined) {
//     return request<Response>('GET', url, options)
//   },
//   post<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
//     return request<Response>('POST', url, { ...options, body })
//   },
//   put<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
//     return request<Response>('PUT', url, { ...options, body })
//   },
//   delete<Response>(url: string, options?: Omit<CustomOptions, 'body'> | undefined) {
//     return request<Response>('DELETE', url, options)
//   },
// }
// const Account = {
//   login: (values: string, token: string) => {
//     const url = `${META.BACKEND}${values}`
//     return http.post(url, { token })
//   },
// }

// const Slide = {
//   list: (values: string, token: string) => {
//     return http.get(META.BACKEND + values, { token })
//   },
//   getId: (values: string, token: string) => {
//     const url = `${META.BACKEND}${values}`
//     return http.get(META.BACKEND + values, { token })
//   },
// }

// const fetchHttp = {
//   Slide,
//   Account
// }

// export default fetchHttp
