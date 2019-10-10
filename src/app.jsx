import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import Tab from './pages/tab'


import configStore from './store'

import './app.scss'
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/mine/mine',
      'pages/shopcart/index',
      'pages/productdetail/productdetail',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      // position:'top',
      color:'#d8d8d8',
      selectedColor:'#de0000',
      list:[
        {
          pagePath:'pages/index/index',
          text:'首页',
          iconPath:'./static/ic_tab_home.png',
          selectedIconPath:'./static/ic_tab_home_select.png'
        },
        {
          pagePath:'pages/shopcart/index',
          text:'购物车',
          iconPath:'./static/ic_tab_shopcart.png',
          selectedIconPath:'./static/ic_tab_shopcart_select.png'
        },
        {
          pagePath:'pages/mine/mine',
          text:'我的',
          iconPath:'./static/ic_tab_mine.png',
          selectedIconPath:'./static/ic_tab_mine_select.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Tab />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
