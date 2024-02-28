import axios, { InternalAxiosRequestConfig } from 'axios'
import { getValidationError } from 'utils/errorValidator'

export const AxiosInterceptor = () => {
  const updateHeader = (request: InternalAxiosRequestConfig) => {
    const jwt = localStorage.getItem('jwt')
    const newHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    }
    request.headers.set(newHeaders)
    return request
  }
  axios.interceptors.request.use(
    (request) => {
      if (request.url?.includes('login')) return request
      return updateHeader(request)
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const decodedError = getValidationError(error.response.data.code)
      return Promise.reject(decodedError)
    }
  )
}
