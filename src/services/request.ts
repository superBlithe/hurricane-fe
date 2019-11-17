import Qs from 'qs';
import axios from 'axios';
import store from '@/store';
import { TIMEOUT } from '../constant';

axios.interceptors.request.use(
  config => {
    let token = store.state.token;
    token && (config.headers['token'] = token);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  res => {
    return checkStatus(res);
  },
  error => {
    return Promise.reject(checkStatus(error));
  }
);

let checkStatus = res => {
  if (res) {
    const { status } = res || -1000;
    if (status >= 200 && status <= 400) {
      return res.data;
    } else {
      let errorInfo = '';
      switch (status) {
        case 401:
          errorInfo = '401: 访问令牌无效或已过期';
          break;
        default:
          errorInfo = `连接错误${status}`;
      }
    }
  } else {
    return {
      state: 404,
      msg: '网络异常'
    };
  }
};

export default function request(
  url,
  { method = 'post', timeout = TIMEOUT, data = {}, headers = {} }
) {
  headers = Object.assign(
    method === 'get'
      ? {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8'
        }
      : {
          'Content-Type': 'application/json; charset=UTF-8'
        },
    headers
  );
  const defaultConfig = {
    url,
    // method,
    params: data,
    data,
    timeout,
    headers
  };
  if (method === 'get') {
    delete defaultConfig.data;
  } else {
    delete defaultConfig.params;

    const contentType = headers['Content-Type'];

    if (typeof contentType !== 'undefined') {
      if (contentType.indexOf('multipart') !== -1) {
        // 类型 `multipart/form-data;`
        defaultConfig.data = data;
      } else if (contentType.indexOf('json') !== -1) {
        // 类型 `application/json`
        // 服务器收到的raw body(原始数据) "{name:"jhon",sex:"man"}"（普通字符串）
        defaultConfig.data = JSON.stringify(data);
      } else {
        // 类型 `application/x-www-form-urlencoded`
        // 服务器收到的raw body(原始数据) name=homeway&key=nokey
        defaultConfig.data = Qs.stringify(data);
      }
    }
  }
  return axios(defaultConfig);
}
