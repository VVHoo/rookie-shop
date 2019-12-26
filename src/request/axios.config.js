import axios from 'axios'
import Qs from 'qs'

// const protocol = window.location.protocol
// axios.defaults.baseURL = window.location.origin
// axios.defaults.baseURL = 'http://127.0.0.1:3001/'
axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

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

const queue = [] // 请求队列
const CancelToken = axios.CancelToken // 内置中断方法
const token = config => {
  return `${config.url}_${config.method}`
}
const removeQueue = (config, index) => {
  queue.map(item => {
    const task = item
    if (item.token === token(config)) {
      task.cancel()
      queue.splice(index, 1)
    }
  })
}
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    removeQueue(config)
    config.cancelToken = new CancelToken(c => {
      queue.push({ token: token(config), cancel: c })
    })
    if (config.method === 'post') {
      config.data = Qs.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function(response) {
    removeQueue(response.config)
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)
axios.defaults.timeout = 10000 // 请求超时毫秒数

export const _get = req => {
  return axios.get(req.url, { params: req.data })
}
export const _post = req => {
  return axios.post(req.url, req.data)
}
