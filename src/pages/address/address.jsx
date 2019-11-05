import Taro,{Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtButton} from 'taro-ui'
import { api } from './../../api/api'
import './address.scss'
import {wxGetAddress,wxAuthorize,WXAuthorizeType} from './../../util/wxutil'
import icwx from './../../static/ic_wx.png'

const ICONS = {
    icwx
}

export default class Address extends Component{
    config = {
        navigationBarTitleText: '收货地址'
    }
    constructor(){
        super()
        this.state = {
            wxAuthAddress:false
        }
    }

    componentWillMount(){
        let addressAuth = wxAuthorize(WXAuthorizeType.address)
        addressAuth.then(res=>{
            this.setState({
                wxAuthAddress:res
            })
        }).catch(err=>{

        })

        this.loadData()
    }

    loadData = () =>{
        api.queryAddress().then(res=>{

        }).catch(err=>{
            
        })
    }

    goNewAddress = () =>{
        Taro.navigateTo({
            url:'/pages/address/add-new-address'
        })
    }

    

    render(){
        const { wxAuthAddress } = this.state
        return (
            <View>
                {wxAuthAddress&&
                    <View className="ad-top-btn fs14">
                        <Image className="wx-icon" src={ICONS.icwx}></Image>
                        是否获取微信地址
                    </View>
                }
                <View className="ad-footer">
                    <AtButton className="add-btn" type='primary' full onClick={this.goNewAddress}>新增收货地址</AtButton>
                </View>
            </View>
        )
    }

}