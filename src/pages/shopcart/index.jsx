import { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import {api} from './../../api/api'
import './shopcart.scss'
import ChangeNum from './../../component/ChangeNum'

class Mine extends Component{
    config = {
        navigationBarTitleText: '购物车'
    }
    

    constructor(){
        super()
        this.state = {
            list:[]
        }
    }

    // 视图显示周期
    componentDidShow(){
        api.getShopCart().then(res=>{
            this.setState({
                list:res.data.data
            })
        }).catch(err=>{
            
        })
    }
    

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    // 渲染购物车列表
    renderShopcartList = () =>{
        const { list } = this.state

        return (
            <View>
            {
                list.map(item=>{
                    return (
                        <View className="sc-item">
                            <View className="left">
                                <Image src={item.image}></Image>
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
        )
        // return (
            
        // )
    }

    render(){
        return (
            <View className="sc">
                {this.renderShopcartList()}
            </View>
        )
    }
}

export default Mine