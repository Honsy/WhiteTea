import {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {PCA} from './../../component/pca/index'
import {AtInput,AtButton} from 'taro-ui'
import './address.scss'

export default class AddAddress extends Component{
    config = {
        navigationBarTitleText: '新增收货地址'
    }

    constructor(){
        super()
    }

    submit = () =>{
        
    }

    render(){
        return (
            <View>
                <AtInput 
                    name='value' 
                    title='收货人' 
                    type='text' 
                    placeholder='请输入姓名' 
                    />
                <AtInput 
                    name='value' 
                    title='联系方式' 
                    type='text' 
                    placeholder='请输入手机号' 
                    />
                <View className="ad-form-h ad-pca">
                    <View className="title">
                        省市区
                    </View>
                    <View className="content">
                        <PCA></PCA>
                    </View>
                </View>
                <AtInput 
                    name='value' 
                    title='详细地址' 
                    type='text' 
                    placeholder='请输入详细地址' 
                    />
                <View className="ad-footer">
                    <AtButton className="add-btn" type='primary' full onClick={this.submit}>确定添加</AtButton>
                </View>
            </View>
        )
    }
}