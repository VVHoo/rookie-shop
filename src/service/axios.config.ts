import axios, { AxiosRequestConfig } from 'axios'
import Qs from 'qs'

interface IResponseData<T> {
  data: T
  message: string
  code: number
}
const options = {
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3001/' : '',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json;chareset=UTF-8'
  }
}

const instance = axios.create(options)

instance.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = Qs.stringify(config.data)
    }
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => {
    return response
  },
  thrown => {
    return Promise.reject(thrown)
  }
)
// 请求返回值转成json
axios.defaults.transformResponse = [
  function(data) {
    try {
      return JSON.parse(data)
    } catch (e) {
      return data
    }
  }
]

export default async function<T = any>(
  options: AxiosRequestConfig
): Promise<IResponseData<T>> {
  const { url, method } = options
  const requestOptions = Object.assign(
    {},
    {
      method: 'post',
      url: url
    },
    options
  )
  try {
    const {
      data,
      data: { code, message }
    } = await instance.request<IResponseData<T>>(requestOptions)
    if (!code) {
      // TODO error tips
      throw new Error(message)
    }
    return data
  } catch (e) {
    throw e
  }
}
