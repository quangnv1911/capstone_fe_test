
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable promise/prefer-await-to-callbacks */
/* eslint-disable prettier/prettier */
import { META } from '#utils/env.ts'

import axios, { AxiosError, AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { redirect } from 'vike/abort'

// axios.defaults.baseURL = (import.meta.env.PUBLIC_ENV__META__BASE_URL ?? 'http://localhost:3000') as string

// axios.defaults.withCredentials = true;

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const responseBody = (response: AxiosResponse) => response.data

axios.interceptors.request.use((config) => {
  // const token = store.getState().account.user?.token;
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  // return config;
  const token = Cookies.get('token') // Đảm bảo tên của cookie là 'token'
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = []
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key])
            }
          }
          throw modelStateErrors.flat()
        }
        toast.error(data.title)
        break
      case 401:
        toast.error(data.title)
        break
      case 403:
        toast.error('You are not allowed to do that!')
        break
      case 500:
        throw redirect('/login')
        break
      default:
        break
    }
    return Promise.reject(error.response)
  },
)

const requests = {
  get: (url: string, token?: string, params?: URLSearchParams) =>
    axios
      .get(url, {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(responseBody),
  post: (url: string, token?: string, body: object) =>
    axios
      .post(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(responseBody),
  put: (url: string, token?: string, body: object) =>
    axios
      .put(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(responseBody),
  del: (url: string, token?: string) =>
    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(responseBody),
  postFile: (url: string, token?: string, data: FormData) =>
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'multipart/form-data',
        },
      })
      .then(responseBody),
  putFile: (url: string, token?: string, data: FormData) =>
    axios
      .put(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'multipart/form-data',
          // Thêm bất kỳ header nào khác mà bạn cần
        },
      })
      .then(responseBody),
}

const Account = {
  login: (values: any, token: string) => requests.post(META.BASE_URL + values, token, values),
  register: (values: any) => requests.post('account/register', values),
}

const Slide = {
  list: (token?: string) => requests.get(META.BACKEND + '/sliders/list', token),
  getId: (token?: string) => requests.get(META.BACKEND + values, token)
}

const agent = {
  Account,
  Slide
}

export default agent
