import Taro from '@tarojs/taro'

const Token = 'Token'

//存Token
function setToken(token){

    Taro.setStorageSync(Token,token);
}
//取Token
function getToken(){
    return Taro.getStorageSync(Token);
}
// 移除Token
function removeToken(){
    Taro.removeStorageSync(Token);
}

export const UCookie = {
    setToken,
    getToken,
    removeToken
}