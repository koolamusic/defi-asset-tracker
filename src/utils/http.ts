// /**
//  * Keep the HTTP Adapter here. some facade pattern would be ideal for (GET, POST)
//  * @method list - call an API get endpoint with Query parameters
//  * @method create - call and API post endpoint with a req body
//  */
// /**
//  * Copyright 2020 Google LLC
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *      http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  *
//  * Manage connection to the API: aka axios: https://github.com/axios/axios/blob/b03f16159eac889baba067ff1e53e8701c86728e/index.d.ts
//  */

// import { HttpsAgent } from 'agentkeepalive';
// import axios, { AxiosInstance, Method, AxiosRequestConfig } from 'axios';
// import tmpl from 'string-template';
// import qs from 'qs';

// export const version = '2.0.2';
// export const defaultHttpsAgent = new HttpsAgent({ keepAlive: true });
// export const defaultTimeout = 10000;
// export const userAgent = `google-maps-services-node-${version}`;
// export const acceptEncoding = 'gzip';
// export const X_GOOG_MAPS_EXPERIENCE_ID = 'X-GOOG-MAPS-EXPERIENCE-ID';

import { AxiosInstance } from 'axios'

import axios from 'axios'
import tmpl from 'string-template'
import qs from 'qs'
import nProgress from 'nprogress'

class HttpAdapter extends Object {
  static defaults: any

  static updateDefaults(config: { baseURL: string | undefined; headers: { 'X-Request-With': string } }) {
    const baseURL = process.env.REACT_APP_PROXY_URL
    HttpAdapter.defaults = { ...this.defaults, ...config, baseURL }
  }

  static createResource(endpoint: string, config = {}) {
    class Resource {
      static endpoint: string
      static axios: AxiosInstance
      static config: any
      static buildURL(pattern = '', data = {}) {
        let stub = tmpl(pattern, data).replace(/\/+$/, '')
        const route = this.endpoint.replace(/\/+$/, '')
        console.log(baseURL, 'versus', this.endpoint, 'and', route)
        return [`${baseURL}${route}`, stub].join('/').replace(/\/+$/, '')
      }

      static executeRequest(data = {}, pattern = '', method = 'GET', _ctx = {}) {
        let url = this.buildURL(pattern, data)
        console.log(url)
        let config: any = { method, url }
        let key = method.toLowerCase() === 'get' ? 'params' : 'data'
        config[key] = data
        return this.axios.request(config)
      }

      // Now implement all default methods
      static list(data = {}, ctx = {}) {
        return this.executeRequest(data, '', 'GET', ctx)
      }

      static post(data: {} | undefined, pattern = '{id}', ctx = {}) {
        return this.executeRequest(data, pattern, 'POST', ctx)
      }
      static emit(data: {} | undefined, pattern = 'emit', ctx = {}) {
        return this.executeRequest(data, pattern, 'POST', ctx)
      }

      static send(data: {} | undefined, pattern = 'send', ctx = {}) {
        return this.executeRequest(data, pattern, 'POST', ctx)
      }
    }

    Resource.endpoint = endpoint
    Resource.config = { ...HttpAdapter.defaults, ...config }
    Resource.axios = axios.create(Resource.config)

    // console.log(Resource.config)
    // Integrating interceptors for request and response
    Resource.axios.interceptors.request.use(
      function (config: any) {
        nProgress.start()
        return config
      },
      function (error: any) {
        nProgress.done()
        return Promise.reject(error)
      }
    )

    Resource.axios.interceptors.response.use(
      function (response: any) {
        nProgress.done()
        return response
      },
      function (error: any) {
        nProgress.done()
        return Promise.reject(error)
      }
    )

    return Resource
  }
}

HttpAdapter.defaults = {
  paramsSerializer: function (params: any) {
    return qs.stringify(params, {
      arrayFormat: 'brackets',
      skipNulls: true,
      indices: false,
      encode: false,
    })
  },
}
const baseURL = process.env.REACT_APP_PROXY_URL
const defaultConfig = {
  baseURL,
  headers: {
    'X-Request-With': 'XMLHttpRequest',
  },
}

HttpAdapter.updateDefaults(defaultConfig)
export class RequestProxy extends HttpAdapter.createResource('/') {}
