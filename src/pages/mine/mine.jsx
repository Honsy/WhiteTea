import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './mine.scss'
import { AtList, AtListItem,AtButton } from "taro-ui"

import icuser from './../../static/ic_user_icon.png'
import icdfh from './../../static/ic_dfh_black.png'
import icdjs from './../../static/ic_djs_black.png'
import icdsh from './../../static/ic_dsh_black.png'
import icdpj from './../../static/ic_dpj_black.png'

const ICONS = {
    icuser,
    icdfh,
    icdjs,
    icdsh,
    icdpj
}

class Mine extends Component{
    config = {
        navigationBarTitleText: '我的'
    }

    goAddress = ()=>{
        Taro.navigateTo({
            url: '/pages/address/address'
        })
        // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
        // wx.getSetting({
        //     success(res) {
        //         if (!res.authSetting['scope.address']) {
        //             wx.authorize({
        //                 scope: 'scope.address',
        //                 success () {
        //                     // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        //                     wx.chooseAddress({
        //                         success (res) {
        //                           console.log(res.userName)
        //                           console.log(res.postalCode)
        //                           console.log(res.provinceName)
        //                           console.log(res.cityName)
        //                           console.log(res.countyName)
        //                           console.log(res.detailInfo)
        //                           console.log(res.nationalCode)
        //                           console.log(res.telNumber)
        //                         },
        //                         fail(){
        //                             console.log('fail')

        //                         },
        //                         complete(){
        //                             // 跳转到目的页面，打开新页面
        //                             Taro.navigateTo({
        //                                 url: '/pages/address/address'
        //                             })
        //                         }
        //                     })
        //                 },
        //                 fail(){
        //                     // 跳转到目的页面，打开新页面
        //                     Taro.navigateTo({
        //                         url: '/pages/address/address'
        //                     })
        //                 }
        //             })
        //         }else{
        //             // 跳转到目的页面，打开新页面
        //             Taro.navigateTo({
        //                 url: '/pages/address/address'
        //             })
        //         }
        //     },
        //     fail(){
        //         console.log('fail')

        //     }
        // })
    }
    render(){
        return (
            <View className="mine">
                <View className="m-info">
                    <Image src={ICONS.icuser}></Image>
                    <Text className="gray-c">点击获1取信息</Text>
                </View>
                <View className="m-order">
                    <View>
                        <Image className="m-o-img" src={ICONS.icdjs}></Image>
                    </View>
                    <View>
                        <Image className="m-o-img" src={ICONS.icdfh}></Image>
                    </View>
                    <View>
                        <Image className="m-o-img" src={ICONS.icdsh}></Image>
                    </View>
                    <View>
                        <Image className="m-o-img" src={ICONS.icdpj}></Image>
                    </View>
                </View>
                <View className="m-list">
                    <AtList>
                        <AtListItem title='收货地址' arrow='right'  onClick={()=>this.goAddress()} />
                    </AtList>
                </View>
            </View>
        )
    }
}

export default Mine