import request from './../util/request'

export const api = {
    getKeyValue,
    getProduct,
    addShopCart,
    getShopCart,
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

// 添加购物车
function addShopCart(params){
    return request({
      url: 'api/shopcart',
      method: 'post',
      params
    })
}
  
// 查询购物车
function getShopCart(params){
    return request({
      url: 'api/shopcart',
      method: 'get',
      params
    })
}
  