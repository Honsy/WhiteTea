import request from './../util/request'

export const api = {
    getKeyValue,
    getList,
}

// 拉取KeyValue
function getKeyValue(params) {
    return request({
      url: 'api/keyvalue',
      method: 'GET',
      params
    })
  }
  
function getList(){

}