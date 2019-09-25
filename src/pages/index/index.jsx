import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import {api} from './../../api/api'

import './index.scss'
import { AtButton,AtGrid } from 'taro-ui'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(){
    this.state = {
      typelist:[]
    }
  }

  componentWillMount(){
    var param={type:'product'}
    api.getKeyValue(param).then(res=>{
      this.setState({
        typelist:res.data.data
      })
    }).catch(err=>{

    })
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {typelist} = this.state
    return (
      <View className='index'>
        <View className='at-row at-row--wrap'>
        {
          typelist.map((item,index)=>{
            return (
                <View className='at-col at-col-6'>
                  <View className='type-item'>{item.name}</View>
                </View>
            )
          })
        }
        </View>
        

        <AtButton>ssadasdas</AtButton>
      </View>
    )
  }
}

export default Index
