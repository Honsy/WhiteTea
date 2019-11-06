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
            wxAuthAddress:false,
            addresslist:[]
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
            this.setState({
                addresslist:res.data.data
            })
        }).catch(err=>{

        })
    }

    goNewAddress = () =>{
        Taro.navigateTo({
            url:'/pages/address/addnewaddress'
        })
    }

    // 渲染地址列表
    renderAddressList = () =>{
        const {addresslist} = this.state

        return (
            <View>
                {
                    addresslist.map(item=>{
                        return (
                            <View className="ad-list-item">
                                <Text className="fs14">{item.linkman}</Text>
                                <Text className="fs12 m-l-10">{item.phone}</Text>
                                <Text className="fs12 db">{item.pca+item.detail}</Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }

    render(){
        const { wxAuthAddress } = this.state
        return (
            <View className="ad-bgc">
                {wxAuthAddress&&
                    <View className="ad-top-btn fs14">
                        <Image className="wx-icon" src={ICONS.icwx}></Image>
                        是否获取微信地址
                    </View>
                }
                {this.renderAddressList()}
                <View className="ad-footer">
                    <AtButton className="add-btn" type='primary' full onClick={this.goNewAddress}>新增收货地址</AtButton>
                </View>
            </View>
        )
    }

}