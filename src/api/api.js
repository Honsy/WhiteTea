import request from './../util/request'

export const api = {
    getKeyValue,
    getProduct,
    addShopCart,
    getShopCart,
    getOneProduct,
    addAddress,
    updateAddress,
    deleteAddress,
    queryAddress,
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
        url: 'api/product/'+params.currentPage+'/'+params.pageNumber,
        method: 'GET',
    })
}

// 查询单件商品
function getOneProduct(params){
    return request({
      url: 'api/product/'+params.id,
      method: 'get'
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

// 增加收货地址
function addAddress(params){
    return request({
      url: 'api/address',
      method: 'post',
      params
    })
}
// 修改收货地址
function updateAddress(params){
    return request({
      url: 'api/address',
      method: 'put',
      params
    })
}
// 删除收货地址
function deleteAddress(params){
    return request({
      url: 'api/address',
      method: 'delete',
      params
    })
}
// 查询收货地址
function queryAddress(params){
    return request({
      url: 'api/address',
      method: 'get',
      params
    })
}