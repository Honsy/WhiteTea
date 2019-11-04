import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import { userAction } from '../../actions/useraction'

import {api} from './../../api/api'
import './index.scss'
import { AtButton,AtGrid } from 'taro-ui'

// 静态资源引用
import ShopCartPng from './../../static/ic_shopcart.png'


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
      queryproduct:{
        currentPage:1,
        pageNumber:10
      },
      querytype:{
        type:'product'
      },
      typelist:[],
      productlist:[]
    }
  }

  componentWillMount(){
    const {queryproduct,querytype} = this.state
    // 查询类别
    api.getKeyValue(querytype).then(res=>{
      this.setState({
        typelist:res.data.data
      })
    }).catch(err=>{

    })
    // 查询商品
    api.getProduct(queryproduct).then(res=>{
      this.setState({
        productlist:res.data.data.list
      })
    }).catch(err=>{

    })
    this.props.dispatch(userAction.getUserInfo())
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 进入商品详情
  goDetail = (item) =>{
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({
      url: '/pages/productdetail/productdetail?id='+item.id
    })

  }
  // 加入购物车
  addShopCart = (item)=>{
    console.log(item)
    var params = {
      productid:item.id,
      num:1
    }

    api.addShopCart(params).then(res=>{

    }).catch(err=>{

    })
  }


  render () {
    const {typelist,productlist} = this.state
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
        <View className='productlist at-row at-row--wrap'>
          {
            productlist.map((item,index)=>{
              return (
                  <View className='at-col at-col-6' onClick={()=>this.goDetail(item)}>
                    <View className='product'>
                      <View className='image'>
                        <Image  src={item.image} alt=""/>
                      </View>
                      <Text>{item.name}</Text>
                      <View className='bottom'>
                        <Text className='left'>价格：{item.price}</Text>
                        <View className='right'>
                          <Image onClick={()=>this.addShopCart(item)} src={ShopCartPng} />
                        </View>
                      </View>
                    </View>
                  </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default Index
