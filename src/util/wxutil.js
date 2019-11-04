// 微信交互封装
// 1001 微信Setting接口拉取失败

function returnCode(code,message,data){
    return {
        code:code,message:message,data:data
    }  
} 

// 枚举微信权限
export const WXAuthorizeType = {
    address:'scope.address',//通讯地址
}

// 微信成功码
export const WXSuccessCode = {
    CompleteCode:100,//请求完成 失败成功都会调用
    SuccessCode:200,//请求成功
}
// 微信错误码
export const WXErrorCode = {
    SettingFailCode:1001,//请求设置错误
    AuthorizeFailCode:1002,//授权错误
    GetDataFailCode:1000,//拉取微信请求数据错误
}

export async function wxAuthorize(type){
    
    return await wxSettingPromist()
}

function wxSettingPromist(){
    return new Promise((resolve,reject)=>{
        wx.getSetting({
            success(res){
                if (!res.authSetting['scope.address']) {
                    reject()
                }else{
                    resolve(res.authSetting['scope.address'])
                }
            },
            fail(){
                reject()
            }
        })
    })
}

// 获取微信自带的收货地址
export function wxGetAddress(fuccomplete){
        // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    return new Promise((resolve,reject)=>{
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.address']) {
                    wx.authorize({
                        scope: 'scope.address',
                        success(){
                            wx.chooseAddress({
                                success (res) {
                                  resolve(returnCode(WXSuccessCode.SuccessCode,'Success',res))
                                },
                                fail(){
                                    reject(returnCode(WXErrorCode.GetDataFailCode,'GetData Error'))
                                },
                                complete(){
                                    // 跳转到目的页面，打开新页面
                                    // Taro.navigateTo({
                                    //     url: '/pages/address/address'
                                    // })
                                    fuccomplete()
                                }
                            })
                        },
                        fail(){
                            reject(returnCode(WXErrorCode.AuthorizeFailCode,'GetAuthorize Error'))
                        }
                    })
                }else{

                }
            },
            fail(){
                reject(returnCode(WXErrorCode.SettingFailCode,'GetSetting Error'))
            }
        })
    })
}