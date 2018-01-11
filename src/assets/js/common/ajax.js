/**
 * Created by jessietang on 2017/11/30.
 */
import axios from 'axios'
import { VM } from '../../../main.js'
import jsonp from 'jsonp'
import { Notification } from 'element-ui'

const request = (method, url, data, config = {}) => {
  let options = Object.assign({}, config, {
    url,
    method,
    data,
    baseURL: rootSrc.api
  });
  options.headers = options.headers || {};
  return new Promise((resolve, reject) => {
    axios.request(options)
      .then(res => {
        let data = res.data;
        console.log(data);
        if (data.code == 0) {
          resolve(data)
        } else {
          if (res.headers['content-type'] === 'text/html;charset=UTF-8') {
            // need to do...
            VM.$router.replace('/login')
          } else {
            if (data.msg) {
              Notification.error({
                title: '错误提示',
                message: data.msg
              })
            } else if (data.data) {
              Notification.error({
                title: '错误提示',
                message: data.data
              })
            } else {
              Notification.error({
                title: '错误提示',
                message: '错误代码'
              })
            }
            reject(data)
          }
        }
      }).catch(res => {
        Notification.error({
          title: '错误提示',
          message: res
        })
        reject(res);
      });
  });
};

const ajax = {
  get(url, config) {
    return request('get', url, null, config);
  },
  delete(url, config) {
    return request('delete', url, null, config);
  },
  head(url, config) {
    return request('head', url, null, config);
  },
  post(url, data, config) {
    return request('post', url, data, config);
  },
  put(url, data, config) {
    return request('put', url, data, config);
  },
  patch(url, data, config) {
    return request('path', url, data, config);
  },
  setCommonHeader(key, value) {
    window.axios.defaults.headers.common[key] = value;
  },
  jsonp(url) {
    return new Promise((resolve, reject) => {
      jsonp(url, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
};

export {
  ajax
}

