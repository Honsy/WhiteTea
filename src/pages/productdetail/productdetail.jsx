import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

export default class ProductDetail extends Component{
    config = {
        navigationBarTitleText: '商品详情'
    }

    constructor(){
        super()
    }

    componentWillMount(){
        console.log(this.$router.params)

    }


    render(){
        return (
            <View>

            </View>
        )
    }
} 