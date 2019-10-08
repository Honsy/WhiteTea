import Taro from '@tarojs/taro'
import {UCookie} from './auth'
// Taro不支持axios 调整
const config = {
  baseURl:'http://127.0.0.1:3030/'
}

var service = function request(params) {
  var url = params.url
  var data = params.data
  var oparams = params.params
  var method = params.method

  var header = {}
  if (UCookie.getToken()) {
    header['X-Token'] = UCookie.getToken()
  }

  return Taro.request({
      url:config.baseURl+url,
      data:oparams,
      method:method,
      header:header
  })
}


export default service
