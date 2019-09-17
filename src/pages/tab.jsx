import Taro from '@tarojs/taro'
import {AtTabBar} from 'taro-ui'
import {View} from '@tarojs/components'

import './tab.scss'
import Index from './index/index'
import Mine from './mine/mine'

class Tabs extends Taro.Component{
    config = {
        navigationBarTitleText: '首页'
    }
    constructor(){
        super()
        this.state = {
            tabs:[
                {title:'首页'},
                {title:'我的'}
            ]
        }
    }

    // Tabbar点击
    tabbarClick = (e) =>{
        console.log(e)
    }

    render(){
        const {tabs} = this.state
        return(
            <View>
                <View>
                    <Index></Index>
                </View>
                <AtTabBar
                    className="tab"
                    tabList={tabs}
                    onClick={(e)=>{this.tabbarClick(e)}}
                    current={0}
                    >
                </AtTabBar>
            </View>
        )
    }

}

export default Tabs