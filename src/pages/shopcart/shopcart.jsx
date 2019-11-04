import { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import {api} from '../../api/api'
import './shopcart.scss'
import ChangeNum from '../../component/ChangeNum'
import { AtButton } from 'taro-ui'

import icselect from './../../static/ic_sc_select.png'
import icnoselect from './../../static/ic_sc_noselect.png'

const ICONS = {
    icselect,
    icnoselect
}

class Mine extends Component{
    config = {
        navigationBarTitleText: '购物车'
    }
    

    constructor(){
        super()
        this.state = {
            list:[],
            isallselect:false,
            selectlist:[]
        }
    }

    // 视图显示周期
    componentDidShow(){
        api.getShopCart().then(res=>{
            this.setState({
                list:res.data.data
            },()=>{
                this.handleData(res.data.data)
            })
        }).catch(err=>{
            
        })
    }
    

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
        // this.handleData()
    }

    // 处理返回数据
    handleData = (list) =>{
        console.log('handleData')

        var selectlist = this.state.selectlist
        list.map(item=>{
            selectlist.push(false)
        })
        this.setState({
            selectlist:selectlist
        })
    }

    // 全部选中
    allSelect = () =>{
        var { isallselect } = this.state
        isallselect = !isallselect

        this.setState({
            isallselect:isallselect
        })
    }

    // 渲染购物车列表
    renderShopcartList = () =>{
        const { list,selectlist,isallselect } = this.state

        return (
            <View>
                <View>
                {
                    list.map((item,index)=>{
                        return (
                            <View className="sc-item">
                                <View className="left">
                                    <Image className="select" src={isallselect?ICONS.icselect:selectlist[index]?ICONS.icselect:ICONS.icnoselect}></Image>
                                    <Image className="proimg" src={item.image}></Image>
                                </View>
                                <View className="right">
                                    <Text className="db fs14">{item.name}</Text>
                                    <Text className="db fs12 gray-c">单价：{item.price}</Text>
                                    <View className="jiajian">
                                        <ChangeNum
                                            num={item.num}
                                            ss="adsads"
                                            ></ChangeNum>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
                </View>
            </View>
        )
        // return (
            
        // )
    }

    render(){
        const { isallselect } = this.state

        return (
            <View className="sc">
                {this.renderShopcartList()}
                <View className="sc-footer">
                    <View  className="sc-f-allselect" onClick = {()=>this.allSelect()}>
                        <Image src={isallselect?ICONS.icselect:ICONS.icnoselect}></Image>
                        <Text>全选</Text>
                    </View>
                    <View>
                        
                    </View>
                    <View>
                        <Button className="sc-js-btn">结算</Button>
                    </View>
                </View>
            </View>
        )
    }
}

export default Mine