import {userConstant} from './../constants/userconstant'
import {promisify,UCookie} from './../util'
import {api} from './../api/api'

export const userAction = {
    getUserInfo
}

function getUserInfo(params) {
    return dispatch =>{
        UCookie.setToken('a3153df8b668ba51e544ba39dc27b5ca')
        dispatch(success({}))
        // promisify(wx.login)().then(res=>{
        //     console.log(res)
        //     var params = {
        //         code:res.code
        //     }
        //     api.login(params).then(res=>{
        //         dispatch(success(null))

        //     }).catch(err=>{
        //         console.log(err)
        //         dispatch(fail())

        //     })
        // }).catch(err=>{
        //     console.log(err)

        //     dispatch(fail())

        // })
        // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
        // wx.getSetting({
        //     success(res) {
        //     if (!res.authSetting['scope.userInfo']) {
        //         wx.authorize({
        //             scope: 'scope.userInfo',
        //             success (res) {
        //                 // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        //                 // wx.startRecord()
        //                 wx.getUserInfo({
        //                     success:function(res) {
        //                         dispatch(success(res.userInfo))
        //                     },
        //                     fail:function(err) {
        //                         dispatch(fail())
        //                     }
        //                 })
        //             },
        //             fail:function(err){
        //                 wx.getUserInfo({
        //                     success:function(res) {
        //                         dispatch(success(res.userInfo))
        //                     },
        //                     fail:function(err) {
        //                         dispatch(fail())
        //                     }
        //                 })
        //             }
        //         })
        //     }
        //     }
        // })
    }

    function success(userinfo){return{state:userinfo,type:userConstant.GET_INFO_SUCCESS}}
    function fail(){return{state:null,type:userConstant.GET_INFO_FAIL}}

}