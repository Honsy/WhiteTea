import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './mine.scss'

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
            </View>
        )
    }
}

export default Mine