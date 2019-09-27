import request from './../util/request'

export const api = {
    getKeyValue,
    getProduct,
    login
}

// 小程序登录
function login(params){
    return request({
        url: 'api/users/wxlogin',
        method: 'GET',
        params
    })
}
// 拉取KeyValue
function getKeyValue(params) {
    return request({
      url: 'api/keyvalue',
      method: 'GET',
      params
    })
}

// 查询商品
function getProduct(params){
    return request({
        url: 'api/product',
        method: 'GET',
        params
    })
}