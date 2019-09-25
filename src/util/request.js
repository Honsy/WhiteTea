import Taro from '@tarojs/taro'

// Taro不支持axios 调整


const config = {
  baseURl:'http://127.0.0.1:3030/'
}

var service = function request(params) {
  console.log(params)
  var url = params.url
  var data = params.data
  var oparams = params.params
  var method = params.method


  return Taro.request({
      url:config.baseURl+url,
      data:oparams,
      method:method,
  })
}


export default service
