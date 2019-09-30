import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import {api} from './../../api/api'

class Mine extends Component{
    config = {
        navigationBarTitleText: '购物车'
    }

    componentWillMount(){
        api.getShopCart().then(res=>{

        }).catch(err=>{
            
        })
    }

    render(){
        return (
            <View>

            </View>
        )
    }
}

export default Mine