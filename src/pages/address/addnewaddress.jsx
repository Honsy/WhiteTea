import {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {PCA} from '../../component/pca/index'
import {AtInput,AtButton} from 'taro-ui'
import './address.scss'
import {api} from '../../api/api'

export default class AddAddress extends Component{
    config = {
        navigationBarTitleText: '新增收货地址'
    }

    constructor(){
        super()
        this.state ={
            address:{
                linkman:'',
                phone:'',
                pca:'',
                detail:'',
                isdefault:0
            }
        }
    }

    submit = () =>{
        api.addAddress(this.state.address).then(res=>{

        }).catch(err=>{

        })

    }
    // PCA回调
    pcaCallBack = (value) =>{
        this.setState({
            address:{
                ...this.state.address,
                pca:value
            }
        })
    }

    // 
    inputChange = (val,e) =>{
        this.setState({
            address:{
                ...this.state.address,
                [e.target.id]:val
            }
        })
    }

    render(){
        const { address } = this.state
        return (
            <View>
                <AtInput 
                    name='linkman' 
                    title='收货人' 
                    type='text' 
                    placeholder='请输入姓名'
                    value={address.linkman} 
                    onChange={this.inputChange}
                    />
                <AtInput 
                    name='phone' 
                    title='联系方式' 
                    type='text' 
                    placeholder='请输入手机号'
                    value={address.phone} 
                    onChange={this.inputChange}
                    />
                <View className="ad-form-h ad-pca">
                    <View className="title">
                        省市区
                    </View>
                    <View className="content">
                        <PCA
                            callback={this.pcaCallBack}></PCA>
                    </View>
                </View>
                <AtInput 
                    name='detail' 
                    title='详细地址' 
                    type='text' 
                    placeholder='请输入详细地址' 
                    value={address.detail} 
                    onChange={this.inputChange}
                    />
                <View className="ad-footer">
                    <AtButton className="add-btn" type='primary' full onClick={this.submit}>确定添加</AtButton>
                </View>
            </View>
        )
    }
}